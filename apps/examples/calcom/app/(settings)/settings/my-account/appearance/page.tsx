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
import { BookingThemeSection, DashboardThemeSection } from "./appearance-form";
import { BookingLayoutSection } from "./booking-layout-section";
import { CustomBrandColorsSection } from "./custom-brand-colors-section";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

export default function AppearanceSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="مظهر مظهر خارجي">
          <AppHeaderDescription>
            إدارة الإعدادات لمظهر الحجز الخاص بك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>قالب لوحة القيادة</CardFrameTitle>
            <CardFrameDescription>
              ينطبق هذا فقط على لوحة التحكم التي قمت بتسجيل الدخول إليها
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <DashboardThemeSection />
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button disabled>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>

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
            <CardFrameTitle>تخطيط الحجز</CardFrameTitle>
            <CardFrameDescription>
              يمكنك تحديد عدة مرات ويمكن للمراهنين تبديل وجهات النظر. يمكن تجاوز
              هذا على أساس كل حدث.
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <BookingLayoutSection />
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
