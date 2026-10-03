import { expect, test } from "@playwright/test";

const ui = "http://127.0.0.1:4000/ui";

for (const [name, url] of [
  ["home", "http://127.0.0.1:3001"],
  ["components", ui],
]) {
  test(`${name}: Arabic document, font and responsive layout`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(url);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("body")).toContainText(/[\u0600-\u06ff]/);
    await page.evaluate(() => document.fonts.ready);
    const layout = await page.evaluate(() => ({
      font: getComputedStyle(document.body).fontFamily,
      loaded: [...document.fonts].some(
        (font) => font.status === "loaded" && /fontSans/.test(font.family),
      ),
      width: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
    }));
    expect(layout.font).toMatch(/fontSans/);
    expect(layout.loaded).toBe(true);
    expect(layout.width).toBeLessThanOrEqual(layout.viewport + 1);
    expect(errors).toEqual([]);
    await page.screenshot({
      path: `test-results/${name}-${test.info().project.name}.png`,
    });
  });
}

test("RTL tab keyboard navigation", async ({ page }) => {
  await page.goto(`${ui}/docs/components/tabs`);
  const tabs = page
    .getByRole("tablist")
    .filter({
      has: page.getByRole("tab", { name: "التبويب الأول", exact: true }),
    })
    .first();
  const first = tabs.getByRole("tab", { name: "التبويب الأول", exact: true });
  const second = tabs.getByRole("tab", { name: "التبويب الثاني", exact: true });
  await first.click();
  await first.press("ArrowLeft");
  await expect(second).toBeFocused();
  await second.press("Enter");
  await expect(second).toHaveAttribute("aria-selected", "true");
});

test("Arabic dialog opens and restores focus", async ({ page }) => {
  await page.goto(`${ui}/docs/components/dialog`);
  const trigger = page
    .getByRole("button", { name: "فتح النافذة", exact: true })
    .first();
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "تعديل الملف الشخصي" });
  await expect(dialog).toBeVisible();
  expect(
    await dialog.evaluate((element) => getComputedStyle(element).direction),
  ).toBe("rtl");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("Arabic calendar labels and code direction", async ({ page }) => {
  await page.goto(`${ui}/docs/components/calendar`);
  const calendar = page.locator('[data-slot="calendar"]').first();
  await expect(calendar).toBeVisible();
  await expect(calendar).toContainText(
    /يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر/,
  );
  expect(
    await calendar.evaluate((element) => getComputedStyle(element).direction),
  ).toBe("rtl");
  const code = page.locator("pre:visible").first();
  await expect(code).toBeVisible();
  expect(
    await code.evaluate((element) => getComputedStyle(element).direction),
  ).toBe("ltr");
});

test("downloadable components retain Arabic text and RTL fixes", async ({
  request,
}) => {
  const response = await request.get(`${ui}/r/p-tabs-1.json`);
  expect(response.ok()).toBe(true);
  const item = await response.json();
  expect(item.name).toBe("p-tabs-1");
  expect(item.files[0].content).toContain("التبويب الأول");
  const drawer = await (await request.get(`${ui}/r/drawer.json`)).json();
  expect(drawer.files[0].content).toContain("rtl:justify-start");
});

test("select popup uses Arabic labels and RTL direction", async ({ page }) => {
  await page.goto(`${ui}/docs/components/select`);
  const trigger = page
    .getByRole("combobox", { name: "اختر إطار العمل" })
    .first();
  await trigger.click();
  const option = page.getByRole("option", { name: "أسترو", exact: true });
  await expect(option).toBeVisible();
  expect(
    await option.evaluate((element) => getComputedStyle(element).direction),
  ).toBe("rtl");
  await option.click();
  await expect(trigger).toContainText("أسترو");
});

test("side sheet opens from the right edge", async ({ page }) => {
  await page.goto(`${ui}/docs/components/sheet`);
  await page
    .getByRole("button", { name: "فتح اللوحة الجانبية", exact: true })
    .first()
    .click();
  const sheet = page.locator('[data-slot="sheet-popup"]').first();
  await expect(sheet).toBeVisible();
  await expect
    .poll(async () => {
      const box = await sheet.boundingBox();
      const viewport = page.viewportSize();
      return box && viewport
        ? Math.abs(box.x + box.width - viewport.width)
        : Number.POSITIVE_INFINITY;
    })
    .toBeLessThan(2);
  await page.keyboard.press("Escape");
  await expect(sheet).toBeHidden();
});

test("form displays Arabic validation feedback", async ({ page }) => {
  await page.goto(`${ui}/docs/components/form`);
  const form = page
    .locator("form")
    .filter({ has: page.locator('input[placeholder="you@example.com"]') })
    .first();
  await form.getByRole("button", { name: "إرسال", exact: true }).click();
  await expect(form.locator('[data-slot="field-error"]')).toContainText(
    "يرجى إدخال بريد إلكتروني صحيح.",
  );
});

test("number field formats Arabic digits and supports increment", async ({
  page,
}) => {
  await page.goto(`${ui}/docs/components/number-field`);
  const field = page.locator('[data-slot="number-field"]').first();
  const input = field.locator('[data-slot="number-field-input"]');
  await expect(input).toHaveValue("٠");
  await field
    .getByRole("button", { name: "زيادة القيمة", exact: true })
    .click();
  await expect(input).toHaveValue("١");
  await input.fill("٢٣");
  await input.press("Tab");
  await expect(input).toHaveValue("٢٣");
});

test("toast text and accessible region are Arabic", async ({ page }) => {
  await page.goto(`${ui}/docs/components/toast`);
  await page
    .getByRole("button", { name: "إشعار افتراضي", exact: true })
    .first()
    .click();
  await expect(
    page
      .locator('[data-slot="toast-title"]')
      .filter({ hasText: "تم إنشاء الحدث" }),
  ).toBeVisible();
  const region = page
    .getByRole("region", { name: "الإشعارات" })
    .filter({ has: page.locator('[data-slot="toast-title"]') })
    .first();
  await expect(region).toHaveAttribute("aria-live", "polite");
  await expect(region).toContainText("تم إنشاء الحدث");
});

test("translated documentation links point to existing sections", async ({
  request,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Document links do not depend on viewport size.",
  );
  const { readFileSync, readdirSync } = await import("node:fs");
  const { join } = await import("node:path");
  const root = "apps/ui/content/docs";
  const files: string[] = [];
  function collect(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) collect(path);
      else if (path.endsWith(".mdx")) files.push(path);
    }
  }
  collect(root);
  const targets = new Set<string>();
  for (const file of files) {
    const route =
      "/ui/docs" +
      file
        .slice(root.length)
        .replace("/(root)", "")
        .replace(/\.mdx$/, "")
        .replace(/\/index$/, "");
    for (const match of readFileSync(file, "utf8").matchAll(
      /\]\(((?:\/ui\/docs[^)#]*)?)#([^)]*)\)/g,
    )) {
      targets.add(`${match[1] || route}#${match[2]}`);
    }
  }
  const documents = new Map<string, string>();
  const broken: string[] = [];
  for (const target of targets) {
    const [path, fragment] = target.split("#");
    if (!documents.has(path)) {
      const response = await request.get(`http://127.0.0.1:4000${path}`);
      expect(response.ok(), path).toBe(true);
      documents.set(path, await response.text());
    }
    if (!documents.get(path)?.includes(`id="${decodeURIComponent(fragment)}"`))
      broken.push(target);
  }
  expect(broken).toEqual([]);
});
