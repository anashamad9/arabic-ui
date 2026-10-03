"use client";

import { SearchIcon } from "lucide-react";
import { useMemo } from "react";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/default/ui/combobox";
import { SelectButton } from "@/registry/default/ui/select";

export default function Particle() {
  const timezones = Intl.supportedValuesOf("timeZone");

  const formattedTimezones = useMemo(() => {
    return timezones
      .map((timezone) => {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          timeZoneName: "shortOffset",
        });
        const parts = formatter.formatToParts(new Date());
        const offset =
          parts.find((part) => part.type === "timeZoneName")?.value || "";

        const offsetMatch = offset.match(/GMT([+-]?)(\d+)(?::(\d+))?/);
        const sign = offsetMatch?.[1] === "-" ? -1 : 1;
        const hours = Number.parseInt(offsetMatch?.[2] || "0", 10);
        const minutes = Number.parseInt(offsetMatch?.[3] || "0", 10);
        const totalMinutes = sign * (hours * 60 + minutes);

        return {
          label:
            new Intl.DateTimeFormat("ar", {
              timeZone: timezone,
              timeZoneName: "long",
            })
              .formatToParts(new Date())
              .find((part) => part.type === "timeZoneName")?.value || timezone,
          numericOffset: totalMinutes,
          value: timezone,
        };
      })
      .sort((a, b) => a.numericOffset - b.numericOffset);
  }, [timezones]);

  const _defaultTimezone = formattedTimezones.find(
    (tz) => tz.value === "Europe/London",
  );

  return (
    <Combobox autoHighlight items={formattedTimezones}>
      <ComboboxTrigger render={<SelectButton />}>
        <ComboboxValue placeholder="اختر المنطقة الزمنية" />
      </ComboboxTrigger>
      <ComboboxPopup aria-label="اختر المنطقة الزمنية">
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder="على سبيل المثال أوروبا/لندن"
            showTrigger={false}
            startAddon={<SearchIcon />}
          />
        </div>
        <ComboboxEmpty>لم يتم العثور على مناطق زمنية.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
