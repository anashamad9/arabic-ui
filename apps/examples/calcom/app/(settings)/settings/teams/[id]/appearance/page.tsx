import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameFooter,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { BookingThemeSection } from "@/app/(settings)/settings/my-account/appearance/appearance-form";
import { CustomBrandColorsSection } from "@/app/(settings)/settings/my-account/appearance/custom-brand-colors-section";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

export default function TeamAppearancePage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="مظهر مظهر خارجي">
          <AppHeaderDescription>
            إدارة الإعدادات لمظهر فريقك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>موضوع صفحة الحجز</CardFrameTitle>
            <CardFrameDescription>
              ينطبق هذا فقط على صفحات الحجز العامة الخاصة بك
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <BookingThemeSection />
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button disabled>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>

        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>ألوان العلامة التجارية المخصصة</CardFrameTitle>
            <CardFrameDescription>
              تخصيص لون العلامة التجارية الخاصة بك في صفحة الحجز الخاصة بك.
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <CustomBrandColorsSection />
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button disabled>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>

        <SettingsToggle
          description="يزيل أي علامات تجارية ذات صلة بـ كال ، أي 'مدعوم من كال'."
          title="تعطيل العلامة التجارية كال"
        />

        <SettingsToggle
          description="إخفاء كتاب زر عضو فريق من صفحاتك العامة."
          title="إخفاء كتاب زر عضو الفريق"
        />

        <SettingsToggle
          description="إخفاء رابط ملف تعريف الفريق على صفحات الحجز"
          title="إخفاء رابط الملف الشخصي للفريق"
        />
      </div>
    </>
  );
}
