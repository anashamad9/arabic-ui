"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

interface Currency {
  value: string;
  label: string;
}

const currencies: Currency[] = [
  {
    label: "الدولار الأمريكي",
    value: "$",
  },
  {
    label: "يورو",
    value: "€",
  },
  {
    label: "جنيه استرليني",
    value: "£",
  },
];

export default function Particle() {
  return (
    <Group aria-label="مبلغ الدفع">
      <Group aria-label="كمية المدخلات">
        <Select
          defaultValue={currencies[0]}
          itemToStringValue={(currency) => currency.value}
        >
          <SelectTrigger className="w-fit min-w-none">
            <SelectValue>{(currency: Currency) => currency.value}</SelectValue>
          </SelectTrigger>
          <SelectPopup className="min-w-48">
            {currencies.map((curr) => (
              <SelectItem key={curr.value} value={curr}>
                {curr.value} <span className="ms-1">{curr.label}</span>
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <GroupSeparator />
        <NumberField
          aria-label="أدخل المبلغ"
          className="gap-0"
          defaultValue={10}
          render={<NumberFieldGroup />}
        >
          <NumberFieldInput className="text-start" />
        </NumberField>
      </Group>
      <Group aria-label="إرسال">
        <Button aria-label="إرسال" size="icon" variant="outline">
          <ArrowRightIcon className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      </Group>
    </Group>
  );
}
