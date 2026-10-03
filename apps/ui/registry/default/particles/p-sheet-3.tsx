import { Button } from "@/registry/default/ui/button";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";

export default function Particle() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          فتح من اليمين
        </SheetTrigger>
        <SheetPopup showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>اليمين</SheetTitle>
            <SheetDescription>الجانب الأيمن من الشاشة.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>
              هذا نص عربي تجريبي يعرض شكل المحتوى داخل المكوّن. يمكنك استبداله
              بمحتواك الخاص، وتعديل الطول والتنسيق بما يناسب واجهتك.
            </p>
          </SheetPanel>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          فتح اليسار
        </SheetTrigger>
        <SheetPopup showCloseButton={false} side="left">
          <SheetHeader>
            <SheetTitle>اليسار</SheetTitle>
            <SheetDescription>الجانب الأيسر من الشاشة.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>
              هذا نص عربي تجريبي يعرض شكل المحتوى داخل المكوّن. يمكنك استبداله
              بمحتواك الخاص، وتعديل الطول والتنسيق بما يناسب واجهتك.
            </p>
          </SheetPanel>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          فتح أعلى الصفحة
        </SheetTrigger>
        <SheetPopup showCloseButton={false} side="top">
          <SheetHeader>
            <SheetTitle>أعلى قمة</SheetTitle>
            <SheetDescription>أعلى الشاشة.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>
              هذا نص عربي تجريبي يعرض شكل المحتوى داخل المكوّن. يمكنك استبداله
              بمحتواك الخاص، وتعديل الطول والتنسيق بما يناسب واجهتك.
            </p>
          </SheetPanel>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          فتح القاع
        </SheetTrigger>
        <SheetPopup showCloseButton={false} side="bottom">
          <SheetHeader>
            <SheetTitle>القاع</SheetTitle>
            <SheetDescription>أسفل الشاشة.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>
              هذا نص عربي تجريبي يعرض شكل المحتوى داخل المكوّن. يمكنك استبداله
              بمحتواك الخاص، وتعديل الطول والتنسيق بما يناسب واجهتك.
            </p>
          </SheetPanel>
        </SheetPopup>
      </Sheet>
    </div>
  );
}
