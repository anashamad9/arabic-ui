import { Group, GroupSeparator } from "@/registry/default/ui/group";
import { Label } from "@/registry/default/ui/label";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";

export default function Particle() {
  return (
    <div className="flex flex-col gap-2">
      <Label>المدى</Label>
      <Group aria-label="نطاق المدخلات">
        <NumberField
          aria-label="قيمة الحد الأدنى"
          render={<NumberFieldGroup />}
        >
          <NumberFieldInput className="text-start" placeholder="من" />
        </NumberField>
        <GroupSeparator />
        <NumberField aria-label="أقصى قيمة" render={<NumberFieldGroup />}>
          <NumberFieldInput className="text-start" placeholder="إلى" />
        </NumberField>
      </Group>
    </div>
  );
}
