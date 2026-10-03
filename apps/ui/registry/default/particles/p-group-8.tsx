import { Group, GroupSeparator, GroupText } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  return (
    <Group aria-label="مدخل المجال">
      <Input
        aria-label="النطاق"
        defaultValue="coss"
        id="domain-suffix"
        type="text"
      />
      <GroupSeparator />
      <GroupText
        render={<Label aria-label="ملحق المجال" htmlFor="domain-suffix" />}
      >
        .com
      </GroupText>
    </Group>
  );
}
