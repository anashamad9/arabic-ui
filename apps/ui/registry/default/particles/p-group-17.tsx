import { Group, GroupSeparator, GroupText } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  return (
    <Group aria-label="مدخلات الأسعار">
      <Input
        aria-label="أدخل المبلغ"
        className="text-end"
        defaultValue="100"
        id="amount"
        type="text"
      />
      <GroupSeparator />
      <GroupText render={<Label aria-label="العملة" htmlFor="amount" />}>
        دولار أمريكي
      </GroupText>
    </Group>
  );
}
