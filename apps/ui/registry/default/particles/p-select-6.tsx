import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "فايت", value: "vite" },
  { label: "أسترو", value: "astro" },
];

const backend = [
  { label: "إكسبرس", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Fastify", value: "fastify" },
  { label: "جانجو", value: "django" },
  { label: "قارورة", value: "flask" },
  { label: "القضبان", value: "rails" },
];

export default function Particle() {
  return (
    <Select items={[...frontend, ...backend]}>
      <SelectTrigger aria-label="اختر إطار العمل">
        <SelectValue placeholder="اختر إطار العمل" />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>تطوير الواجهات</SelectGroupLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>تطوير الخدمات</SelectGroupLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
