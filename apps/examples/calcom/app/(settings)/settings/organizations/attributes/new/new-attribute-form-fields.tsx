"use client";

import { Button } from "@coss/ui/components/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@coss/ui/components/combobox";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Fieldset, FieldsetLegend } from "@coss/ui/components/fieldset";
import { Group } from "@coss/ui/components/group";
import { Input } from "@coss/ui/components/input";
import { Label } from "@coss/ui/components/label";
import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@coss/ui/components/popover";
import {
  Select,
  SelectButton,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { Switch } from "@coss/ui/components/switch";
import { InfoIcon, PlusIcon, SearchIcon, XIcon } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const attributeTypeItems = [
  { label: "النص", value: "text" },
  { label: "رقم", value: "number" },
  { label: "اختيار واحد", value: "single_select" },
  { label: "اختيار متعدد", value: "multi_select" },
] as const;

export function NewAttributeFormFields() {
  const [attributeType, setAttributeType] = useState("text");

  const nextOptionIdRef = useRef(1);
  const [options, setOptions] = useState([{ id: 0 }]);

  const showWeightsSwitch =
    attributeType === "single_select" || attributeType === "multi_select";

  function addOption() {
    setOptions((prev) => [...prev, { id: nextOptionIdRef.current++ }]);
  }

  function removeOption(id: number) {
    setOptions((prev) => prev.filter((o) => o.id !== id));
  }

  const nextGroupOptionIdRef = useRef(1);
  const [groupOptions, setGroupOptions] = useState<
    Array<{ id: number; selectedOptionId: number | null }>
  >([{ id: 0, selectedOptionId: null }]);

  const optionPickItems = useMemo(
    () =>
      options.map((o, i) => ({
        label: `الخيار ${i + 1}`,
        value: o.id,
      })),
    [options],
  );

  function addGroupOption() {
    setGroupOptions((prev) => [
      ...prev,
      { id: nextGroupOptionIdRef.current++, selectedOptionId: null },
    ]);
  }

  function removeGroupOption(id: number) {
    setGroupOptions((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <Field>
        <div className="flex items-start gap-2">
          <Switch name="lockForAssignment" />
          <div className="flex flex-col gap-1">
            <FieldLabel>قفل للمهمة</FieldLabel>
            <FieldDescription>
              سيسمح القفل فقط بالتعيينات من Directory Sync
            </FieldDescription>
          </div>
        </div>
      </Field>

      {showWeightsSwitch ? (
        <Field>
          <div className="flex items-start gap-2">
            <Switch name="weightsEnabled" />
            <div className="flex flex-col gap-1">
              <FieldLabel>الأوزان تمكين</FieldLabel>
              <FieldDescription>
                ومن خلال تمكين الأوزان، سيكون من الممكن إعطاء أولوية أعلى لسمات
                معينة لكل مستخدم. وكلما زاد الوزن، زادت الأولوية.
              </FieldDescription>
            </div>
          </div>
        </Field>
      ) : null}

      <Field>
        <FieldLabel>الاسم</FieldLabel>
        <Input name="name" type="text" />
      </Field>

      <Field>
        <FieldLabel>النوع</FieldLabel>
        <Select
          aria-label="نوع السمة"
          items={[...attributeTypeItems]}
          onValueChange={(value) => value && setAttributeType(value)}
          value={attributeType}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {attributeTypeItems.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </Field>

      {showWeightsSwitch ? (
        <div className="rounded-xl bg-muted p-4">
          <div className="flex flex-col gap-4">
            <Fieldset className="flex w-full flex-col gap-2">
              <Label render={<FieldsetLegend />}>الخيارات</Label>
              {options.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {options.map((option, index) => (
                    <Group
                      aria-label={`الخيار ${index + 1}`}
                      className="w-full gap-2"
                      key={option.id}
                    >
                      <Input
                        className="min-w-0 flex-1"
                        name={`options[${index}]`}
                        placeholder="أدخل قيمة الخيار"
                        type="text"
                      />
                      <div>
                        <Button
                          aria-label="إزالة خيار"
                          onClick={() => removeOption(option.id)}
                          size="icon"
                          type="button"
                          variant="outline"
                        >
                          <XIcon aria-hidden="true" />
                        </Button>
                      </div>
                    </Group>
                  ))}
                </div>
              ) : null}
              <div>
                <Button onClick={addOption} type="button" variant="outline">
                  <PlusIcon aria-hidden="true" />
                  خيار جديد
                </Button>
              </div>
            </Fieldset>

            <Fieldset className="flex w-full flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <Label render={<FieldsetLegend />}>خيارات المجموعة</Label>
                <Popover>
                  <PopoverTrigger
                    aria-label="حول خيارات المجموعة"
                    delay={0}
                    openOnHover
                    closeDelay={100}
                  >
                    <InfoIcon className="size-3.5 text-muted-foreground" />
                  </PopoverTrigger>
                  <PopoverPopup
                    side="top"
                    tooltipStyle
                    className="max-w-64 text-center"
                  >
                    <p>
                      عندما يتم تعيين خيار مجموعة لمستخدم، يتصرف كما لو تم تعيين
                      جميع الخيارات داخل تلك المجموعة لهم.
                    </p>
                  </PopoverPopup>
                </Popover>
              </div>
              {groupOptions.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {groupOptions.map((row, index) => (
                    <Group
                      aria-label={`خيار المجموعة ${index + 1}`}
                      className="w-full gap-2"
                      key={row.id}
                    >
                      <Input
                        className="flex-1"
                        name={`groupOptions[${index}].name`}
                        type="text"
                      />
                      <div className="flex-1">
                        <Combobox
                          disabled={optionPickItems.length === 0}
                          items={optionPickItems}
                          onValueChange={(item) => {
                            setGroupOptions((prev) =>
                              prev.map((r) =>
                                r.id === row.id
                                  ? {
                                      ...r,
                                      selectedOptionId: item?.value ?? null,
                                    }
                                  : r,
                              ),
                            );
                          }}
                          value={
                            optionPickItems.find(
                              (i) => i.value === row.selectedOptionId,
                            ) ?? null
                          }
                        >
                          <ComboboxTrigger
                            render={<SelectButton className="w-full min-w-0" />}
                          >
                            <ComboboxValue placeholder="اختر خيارًا" />
                          </ComboboxTrigger>
                          <ComboboxPopup aria-label="اختر خيارًا">
                            <div className="border-b p-2">
                              <ComboboxInput
                                className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
                                placeholder="خيارات البحث..."
                                showTrigger={false}
                                startAddon={<SearchIcon />}
                              />
                            </div>
                            <ComboboxEmpty>لا توجد خيارات متاحة.</ComboboxEmpty>
                            <ComboboxList>
                              {(item: (typeof optionPickItems)[number]) => (
                                <ComboboxItem key={item.value} value={item}>
                                  {item.label}
                                </ComboboxItem>
                              )}
                            </ComboboxList>
                          </ComboboxPopup>
                        </Combobox>
                      </div>
                      <div>
                        <Button
                          aria-label="إزالة خيار المجموعة"
                          onClick={() => removeGroupOption(row.id)}
                          size="icon"
                          type="button"
                          variant="outline"
                        >
                          <XIcon aria-hidden="true" />
                        </Button>
                      </div>
                    </Group>
                  ))}
                </div>
              ) : null}
              <div>
                <Button
                  onClick={addGroupOption}
                  type="button"
                  variant="outline"
                >
                  <PlusIcon aria-hidden="true" />
                  خيار المجموعة الجديد
                </Button>
              </div>
            </Fieldset>
          </div>
        </div>
      ) : null}
    </div>
  );
}
