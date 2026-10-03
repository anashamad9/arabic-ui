"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  const [value, setValue] = useState("أخلوا سبيلي");

  return (
    <InputGroup>
      <InputGroupInput
        aria-label="إدخال النص مع زر واضح"
        onChange={(e) => setValue(e.target.value)}
        placeholder="أدخل النص"
        type="text"
        value={value}
      />
      {value && (
        <InputGroupAddon align="inline-end">
          <Button
            aria-label="مدخلات واضحة"
            onClick={() => setValue("")}
            size="icon-xs"
            variant="ghost"
          >
            <XIcon aria-hidden="true" />
          </Button>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
