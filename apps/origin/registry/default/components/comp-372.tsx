"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function Component() {
  const [framework, setFramework] = useState("nextjs");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          المواد الإذاعية
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup onValueChange={setFramework} value={framework}>
          <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
          <DropdownMenuRadioItem disabled value="sveltekit">
            سفلت
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="remix">ريميكس</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="astro">أسترو</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
