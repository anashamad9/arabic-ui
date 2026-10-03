import { CheckIcon, MonitorIcon, SmartphoneIcon, XIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

const items = [
  {
    desktop: [
      { name: "كروم", supported: true, version: "115" },
      { name: "حافة حافة الحافة", supported: true, version: "115" },
      { name: "فايرفوكس", supported: false, version: "111" },
      { name: "أوبرا الأوبرا", supported: true, version: "101" },
      { name: "سفاري", supported: false, version: "لا" },
    ],
    feature: "scroll-timeline",
    mobile: [
      { name: "كروم أندرويد", supported: true, version: "115" },
      { name: "فايرفوكس أندرويد", supported: false, version: "لا" },
      { name: "أوبرا الروبوت", supported: true, version: "77" },
      { name: "سفاري آي أو إس", supported: false, version: "لا" },
      { name: "سامسونج إنترنت", supported: true, version: "23" },
    ],
  },
  {
    desktop: [
      { name: "كروم", supported: true, version: "115" },
      { name: "حافة حافة الحافة", supported: true, version: "115" },
      { name: "فايرفوكس", supported: false, version: "114" },
      { name: "أوبرا الأوبرا", supported: true, version: "101" },
      { name: "سفاري", supported: false, version: "لا" },
    ],
    feature: "view-timeline",
    mobile: [
      { name: "كروم أندرويد", supported: true, version: "115" },
      { name: "فايرفوكس أندرويد", supported: false, version: "لا" },
      { name: "أوبرا الروبوت", supported: true, version: "77" },
      { name: "سفاري آي أو إس", supported: false, version: "لا" },
      { name: "سامسونج إنترنت", supported: true, version: "23" },
    ],
  },
  {
    desktop: [
      { name: "كروم", supported: true, version: "127" },
      { name: "حافة حافة الحافة", supported: true, version: "127" },
      { name: "فايرفوكس", supported: false, version: "3" },
      { name: "أوبرا الأوبرا", supported: true, version: "113" },
      { name: "سفاري", supported: true, version: "16.4" },
    ],
    feature: "font-size-adjust",
    mobile: [
      { name: "كروم أندرويد", supported: true, version: "127" },
      { name: "فايرفوكس أندرويد", supported: true, version: "4" },
      { name: "أوبرا الروبوت", supported: true, version: "84" },
      { name: "سفاري آي أو إس", supported: true, version: "16.4" },
      { name: "سامسونج إنترنت", supported: false, version: "لا" },
    ],
  },
];

export default function Component() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-y-0 *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell />
          <TableHead className="border-b text-center" colSpan={5}>
            <MonitorIcon aria-hidden="true" className="inline-flex" size={16} />
            <span className="sr-only">متصفحات سطح المكتب</span>
          </TableHead>
          <TableHead className="border-b text-center" colSpan={5}>
            <SmartphoneIcon
              aria-hidden="true"
              className="inline-flex"
              size={16}
            />
            <span className="sr-only">متصفحات الجوال</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell />
          {items[0].desktop.map((browser) => (
            <TableHead
              className="h-auto py-3 align-bottom text-foreground"
              key={browser.name}
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
          {items[0].mobile.map((browser) => (
            <TableHead
              className="h-auto py-3 align-bottom text-foreground"
              key={browser.name}
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            className="*:border-border [&>:not(:last-child)]:border-r"
            key={item.feature}
          >
            <TableHead className="font-medium text-foreground">
              {item.feature}
            </TableHead>
            {[...item.desktop, ...item.mobile].map((browser, index) => (
              <TableCell
                className="space-y-1 text-center"
                key={`${browser.name}-${index}`}
              >
                {browser.supported ? (
                  <CheckIcon
                    aria-hidden="true"
                    className="inline-flex stroke-emerald-600"
                    size={16}
                  />
                ) : (
                  <XIcon
                    aria-hidden="true"
                    className="inline-flex stroke-red-600"
                    size={16}
                  />
                )}
                <span className="sr-only">
                  {browser.supported ? "مدعوم" : "غير مدعوم"}
                </span>
                <div className="font-medium text-muted-foreground text-xs">
                  {browser.version}
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
