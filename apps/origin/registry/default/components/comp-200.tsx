import { useId, useMemo } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();

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

        return {
          label:
            new Intl.DateTimeFormat("ar", {
              timeZone: timezone,
              timeZoneName: "long",
            })
              .formatToParts(new Date())
              .find((part) => part.type === "timeZoneName")?.value || timezone,
          numericOffset: Number.parseInt(
            offset.replace("GMT", "").replace("+", "") || "0",
            10,
          ),
          value: timezone,
        };
      })
      .sort((a, b) => a.numericOffset - b.numericOffset);
  }, [timezones]);

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>المنطقة الزمنية حدد (أصلي)</Label>
      <SelectNative defaultValue="Europe/London" id={id}>
        {formattedTimezones.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectNative>
    </div>
  );
}
