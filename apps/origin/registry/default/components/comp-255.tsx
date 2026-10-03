"use client";

import { useSliderWithInput } from "@/registry/default/hooks/use-slider-with-input";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  const minValue = 0;
  const maxValue = 100;
  const initialValue = [25];

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ initialValue, maxValue, minValue });

  return (
    <div className="*:not-first:mt-3">
      <Label>شريط تمرير مع حقل إدخال</Label>
      <div className="flex items-center gap-4">
        <Slider
          aria-label="شريط تمرير مع حقل إدخال"
          className="grow"
          max={maxValue}
          min={minValue}
          onValueChange={handleSliderChange}
          value={sliderValue}
        />
        <Input
          aria-label="أدخل قيمة"
          className="h-8 w-12 px-2 py-1"
          inputMode="decimal"
          onBlur={() => validateAndUpdateValue(inputValues[0], 0)}
          onChange={(e) => handleInputChange(e, 0)}
          onKeyDown={(e) => {
            if (e.key === "إدخال") {
              validateAndUpdateValue(inputValues[0], 0);
            }
          }}
          type="text"
          value={inputValues[0]}
        />
      </div>
    </div>
  );
}
