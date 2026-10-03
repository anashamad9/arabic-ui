"use client";

import { useMemo, useState } from "react";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
} from "@/registry/default/ui/autocomplete";

// Limit results demo
const limit = 7;
type SimpleTag = { id: string; value: string };
const manyTags: SimpleTag[] = [
  { id: "lang-js", value: "JavaScript" },
  { id: "lang-ts", value: "TypeScript" },
  { id: "lang-py", value: "بايثون" },
  { id: "lang-java", value: "جافا" },
  { id: "lang-csharp", value: "C#" },
  { id: "lang-cpp", value: "C++" },
  { id: "lang-c", value: "C" },
  { id: "lang-go", value: "الذهاب" },
  { id: "lang-rust", value: "الصدأ" },
  { id: "lang-rb", value: "روبية" },
  { id: "lang-php", value: "PHP" },
  { id: "lang-swift", value: "سويفت" },
  { id: "lang-kotlin", value: "كوتلين" },
  { id: "lang-scala", value: "سكالا" },
  { id: "lang-elixir", value: "الإكسير" },
  { id: "lang-hs", value: "هاسكل" },
  { id: "lang-dart", value: "دارت" },
  { id: "lang-objc", value: "الهدف جيم" },
  { id: "lang-julia", value: "جوليا" },
  { id: "lang-r", value: "R" },
  { id: "lang-perl", value: "بيرل" },
  { id: "lang-lua", value: "لوا" },
  { id: "lang-ocaml", value: "OCaml" },
  { id: "lang-fsharp", value: "F#" },
];

export default function Particle() {
  const [value, setValue] = useState("");
  const { contains } = useAutocompleteFilter({ sensitivity: "base" });

  const totalMatches = useMemo(() => {
    const trimmed = value.trim();
    if (!trimmed) return manyTags.length;
    return manyTags.filter((t) => contains(t.value, trimmed)).length;
  }, [value, contains]);

  const moreCount = Math.max(0, totalMatches - limit);

  return (
    <Autocomplete
      items={manyTags}
      limit={limit}
      onValueChange={setValue}
      value={value}
    >
      <AutocompleteInput placeholder="على سبيل المثال ميزة" />
      <AutocompletePopup>
        <AutocompleteEmpty>لم يتم العثور على علامات</AutocompleteEmpty>
        <AutocompleteList>
          {(tag: SimpleTag) => (
            <AutocompleteItem key={tag.id} value={tag}>
              {tag.value}
            </AutocompleteItem>
          )}
        </AutocompleteList>
        {moreCount > 0 && (
          <AutocompleteStatus>
            +{moreCount} المزيد (استمر في الكتابة لتضييق)
          </AutocompleteStatus>
        )}
      </AutocompletePopup>
    </Autocomplete>
  );
}
