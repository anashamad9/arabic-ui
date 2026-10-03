import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Group aria-label="إضافة عنصر">
      <Button aria-label="إضافة" size="icon" variant="outline">
        <PlusIcon aria-hidden="true" />
      </Button>
      <GroupSeparator />
      <Input
        aria-label="اسم العنصر"
        placeholder="أدخل اسم العنصر"
        type="text"
      />
    </Group>
  );
}
