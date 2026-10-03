"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const protocols = [
  { label: "http", value: "http" },
  { label: "https", value: "https" },
  { label: "http + https", value: "both" },
];

const subdomains = [
  { label: "النطاقات الفرعية", value: null },
  { label: "www.ar", value: "www" },
  { label: "واجهة برمجية", value: "api" },
  { label: "cdn", value: "cdn" },
];

export default function Particle() {
  return (
    <Group aria-label="البحث عن عناوين رابط">
      <Select defaultValue="both" items={protocols}>
        <SelectTrigger className="w-fit min-w-none">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {protocols.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
      <GroupSeparator />
      <Input
        aria-label="عنوان رابط"
        className="flex-1"
        defaultValue="coss.com"
        type="text"
      />
      <GroupSeparator />
      <Select defaultValue={null} items={subdomains}>
        <SelectTrigger className="w-fit min-w-none">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {subdomains.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
      <GroupSeparator />
      <Button aria-label="بحث" size="icon" variant="outline">
        <SearchIcon aria-hidden="true" />
      </Button>
    </Group>
  );
}
