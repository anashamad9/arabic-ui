import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Fieldset className="flex w-full flex-col gap-6">
      <FieldsetLegend>تفاصيل الفوترة</FieldsetLegend>
      <Field>
        <FieldLabel>الشركة</FieldLabel>
        <Input placeholder="أدخل اسم الشركة" type="text" />
        <FieldDescription>الاسم الذي سيظهر على الفواتير.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel>البطاقة الضريبية</FieldLabel>
        <Input placeholder="أدخل رقم التعريف الضريبي" type="text" />
        <FieldDescription>رقم التعريف الضريبي الخاص بك.</FieldDescription>
      </Field>
    </Fieldset>
  );
}
