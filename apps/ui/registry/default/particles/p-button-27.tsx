import { QrCodeIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";

export default function Particle() {
  return (
    <Group>
      <Button aria-label="رمز الاستجابة السريعة" size="icon">
        <QrCodeIcon aria-hidden="true" />
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Button>تسجيل الدخول</Button>
    </Group>
  );
}
