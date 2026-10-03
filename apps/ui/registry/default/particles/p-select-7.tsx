"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const languages = {
  cpp: "C++",
  csharp: "C#",
  go: "الذهاب",
  java: "جافا",
  javascript: "JavaScript",
  php: "PHP",
  python: "بايثون",
  rust: "الصدأ",
  swift: "سويفت",
  typescript: "TypeScript",
};

type Language = keyof typeof languages;

const values = Object.keys(languages) as Language[];

function renderValue(value: Language[]) {
  if (value.length === 0) {
    return "اختر اللغات...";
  }

  const firstLanguage = value[0] ? languages[value[0]] : "";
  const additionalLanguages =
    value.length > 1 ? ` (+${value.length - 1} more)` : "";
  return firstLanguage + additionalLanguages;
}

export default function Particle() {
  return (
    <Select defaultValue={["javascript", "typescript"]} multiple>
      <SelectTrigger aria-label="اختر اللغات">
        <SelectValue>{renderValue}</SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {values.map((value) => (
          <SelectItem key={value} value={value}>
            {languages[value]}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
