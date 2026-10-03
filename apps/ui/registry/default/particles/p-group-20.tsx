import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Group aria-label="الاشتراك في البريد الإلكتروني">
      <Input
        aria-label="البريد الإلكتروني"
        placeholder="البريد الإلكتروني"
        type="email"
      />
      <GroupSeparator />
      <Button variant="outline">اشتراك</Button>
    </Group>
  );
}
