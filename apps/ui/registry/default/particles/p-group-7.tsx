import { Group, GroupSeparator, GroupText } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  return (
    <Group aria-label="مدخل المجال">
      <GroupText render={<Label aria-label="النطاق" htmlFor="domain" />}>
        https://
      </GroupText>
      <GroupSeparator />
      <Input
        aria-label="النطاق"
        defaultValue="coss.com"
        id="domain"
        type="text"
      />
    </Group>
  );
}
