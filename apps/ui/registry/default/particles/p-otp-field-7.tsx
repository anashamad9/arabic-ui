"use client";

import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { OTPField, OTPFieldInput } from "@/registry/default/ui/otp-field";

const OTP_LENGTH = 6;

const OTP_SLOT_KEYS = Array.from(
  { length: OTP_LENGTH },
  (_, i) => `otp-slot-${i}`,
);

export default function Particle() {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const valid = value.length === OTP_LENGTH && value === "123456";

  return (
    <Field className="items-center">
      <FieldLabel>رمز التحقق</FieldLabel>
      <OTPField
        length={OTP_LENGTH}
        onValueChange={(nextValue) => {
          setValue(nextValue);
          setInvalid(
            nextValue.length === OTP_LENGTH ? nextValue !== "123456" : false,
          );
        }}
        value={value}
      >
        {OTP_SLOT_KEYS.map((slotKey, index) => (
          <OTPFieldInput
            key={slotKey}
            aria-invalid={invalid || undefined}
            aria-label={`الحرف ${index + 1} من ${OTP_LENGTH}`}
          />
        ))}
      </OTPField>
      {!valid && !invalid && (
        <FieldDescription>
          أدخل '123456` لتمرير التحقق من الصحة.
        </FieldDescription>
      )}
      {invalid && <FieldError>يجب أن يكون الرمز 123456.</FieldError>}
      {valid && <FieldDescription>تم التحقق من الكود.</FieldDescription>}
    </Field>
  );
}
