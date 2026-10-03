"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

type Checked = boolean;

export default function Component() {
  const [nextjs, setNextjs] = useState<Checked>(false);
  const [sveltekit, setSveltekit] = useState<Checked>(true);
  const [astro, setAstro] = useState<Checked>(false);
  const [remix, setRemix] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          عناصر مربع الاختيار
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={nextjs} onCheckedChange={setNextjs}>
          Next.js
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sveltekit}
          onCheckedChange={setSveltekit}
        >
          سفلت
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={remix}
          disabled
          onCheckedChange={setRemix}
        >
          ريميكس
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={astro} onCheckedChange={setAstro}>
          أسترو
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
