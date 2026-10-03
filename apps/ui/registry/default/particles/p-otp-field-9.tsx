import { cn } from "@/registry/default/lib/utils";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { OTPField, OTPFieldInput } from "@/registry/default/ui/otp-field";

const OTP_LENGTH = 6;

const OTP_SLOT_KEYS = Array.from(
  { length: OTP_LENGTH },
  (_, i) => `otp-slot-${i}`,
);

export default function Particle() {
  return (
    <Field className="items-center">
      <FieldLabel>رمز التحقق</FieldLabel>
      <OTPField length={OTP_LENGTH}>
        {OTP_SLOT_KEYS.map((slotKey, index) => (
          <OTPFieldInput
            key={slotKey}
            aria-label={`الحرف ${index + 1} من ${OTP_LENGTH}`}
            className={cn(
              "placeholder:text-muted-foreground focus-visible:placeholder:text-transparent",
            )}
            placeholder="•"
          />
        ))}
      </OTPField>
      <FieldDescription>
        تظل تلميحات العنصر النائب مرئية حتى تكون الفتحة المركزة نشطة.
      </FieldDescription>
    </Field>
  );
}
