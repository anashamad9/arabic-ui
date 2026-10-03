import { ScrollArea } from "@coss/ui/components/scroll-area";
import type * as React from "react";
import type { Tab } from "@/components/app/tabbed-nav";
import { TabbedNav } from "@/components/app/tabbed-nav";

const bookingTabs: Tab[] = [
  { title: "قريبًا", url: "/booking/upcoming" },
  { title: "غير مؤكد", url: "/booking/unconfirmed" },
  { title: "التكرار", url: "/booking/recurring" },
  { title: "الماضي", url: "/booking/past" },
  { title: "ملغى", url: "/booking/canceled" },
];

function BookingsNav(): React.ReactElement {
  return (
    <div className="max-sm:-mx-4 max-sm:-my-0.5">
      <ScrollArea overscrollContain scrollbarGutter scrollFade>
        <div className="w-fit max-sm:px-4 max-sm:py-0.5">
          <TabbedNav
            ariaLabel="Filter bookings"
            data-slot="bookings-nav"
            tabs={bookingTabs}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

export { BookingsNav };
