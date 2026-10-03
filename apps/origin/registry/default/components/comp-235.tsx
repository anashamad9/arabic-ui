import { Label } from "@/registry/default/ui/label";
import MultipleSelector, {
  type Option,
} from "@/registry/default/ui/multiselect";

const frameworks: Option[] = [
  {
    label: "Next.js",
    value: "next.js",
  },
  {
    label: "سفلت",
    value: "sveltekit",
  },
  {
    label: "Nuxt.js",
    value: "nuxt.js",
  },
  {
    label: "ريميكس",
    value: "remix",
  },
  {
    label: "أسترو",
    value: "astro",
  },
  {
    label: "أنغولار",
    value: "angular",
  },
  {
    label: "Vue.js",
    value: "vue",
  },
  {
    label: "رياكت",
    value: "react",
  },
  {
    label: "Ember.js",
    value: "ember",
  },
  {
    label: "غاتسبي",
    value: "gatsby",
  },
  {
    label: "الحادي عشر",
    value: "eleventy",
  },
  {
    label: "سوليد",
    value: "solid",
  },
  {
    label: "بريكت",
    value: "preact",
  },
  {
    label: "كويك",
    value: "qwik",
  },
  {
    label: "Alpine.js",
    value: "alpine",
  },
  {
    label: "ليت",
    value: "lit",
  },
];

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>اختيار متعدد مع نائب وواضح</Label>
      <MultipleSelector
        commandProps={{
          label: "حدد أطر العمل",
        }}
        defaultOptions={frameworks}
        emptyIndicator={
          <p className="text-center text-sm">لم يتم العثور على نتائج</p>
        }
        placeholder="حدد أطر العمل"
      />
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        مستوحاة من{" "}
        <a
          className="underline hover:text-foreground"
          href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          shadcn/ui expansions
        </a>
      </p>
    </div>
  );
}
