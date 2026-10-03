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
      <FieldLabel>رمز الاسترداد</FieldLabel>
      <OTPField length={OTP_LENGTH} validationType="alphanumeric">
        {OTP_SLOT_KEYS.map((slotKey, index) => (
          <OTPFieldInput
            key={slotKey}
            aria-label={`الحرف ${index + 1} من ${OTP_LENGTH}`}
          />
        ))}
      </OTPField>
      <FieldDescription>
        قبول الحروف والأرقام لرموز النسخ الاحتياطي مثل{" "}
        <code className="font-mono text-foreground">A7C9XZ</code>.
      </FieldDescription>
    </Field>
  );
}
