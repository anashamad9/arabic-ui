import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { OTPField, OTPFieldInput } from "@/registry/default/ui/otp-field";

const OTP_LENGTH = 4;

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
          />
        ))}
      </OTPField>
      <FieldDescription>
        أدخل {OTP_LENGTH}-digit رمز المرسلة إلى البريد الإلكتروني الخاص بك.
      </FieldDescription>
    </Field>
  );
}
