import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const countries = [
  {
    continent: "أمريكا",
    items: [
      { flag: "🇺🇸", label: "الولايات المتحدة الأمريكية", value: "1" },
      { flag: "🇨🇦", label: "كندا", value: "2" },
      { flag: "🇲🇽", label: "المكسيك", value: "3" },
    ],
  },
  {
    continent: "أفريقيا",
    items: [
      { flag: "🇿🇦", label: "جنوب أفريقيا", value: "4" },
      { flag: "🇳🇬", label: "نيجيريا", value: "5" },
      { flag: "🇲🇦", label: "المغرب", value: "6" },
    ],
  },
  {
    continent: "آسيا",
    items: [
      { flag: "🇨🇳", label: "الصين", value: "7" },
      { flag: "🇯🇵", label: "اليابان", value: "8" },
      { flag: "🇮🇳", label: "الهند", value: "9" },
    ],
  },
  {
    continent: "أوروبا",
    items: [
      { flag: "🇬🇧", label: "المملكة المتحدة", value: "10" },
      { flag: "🇫🇷", label: "فرنسا", value: "11" },
      { flag: "🇩🇪", label: "ألمانيا", value: "12" },
    ],
  },
  {
    continent: "أوقيانوسيا",
    items: [
      { flag: "🇦🇺", label: "أستراليا", value: "13" },
      { flag: "🇳🇿", label: "نيوزيلندا", value: "14" },
    ],
  },
];

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>خيارات مع العلم</Label>
      <Select defaultValue="2">
        <SelectTrigger
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
          id={id}
        >
          <SelectValue placeholder="اختر إطار العمل" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
          {countries.map((continent) => (
            <SelectGroup key={continent.continent}>
              <SelectLabel className="ps-2">{continent.continent}</SelectLabel>
              {continent.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <span className="text-lg leading-none">{item.flag}</span>{" "}
                  <span className="truncate">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
