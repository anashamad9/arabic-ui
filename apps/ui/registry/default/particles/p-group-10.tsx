import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";

export default function Particle() {
  return (
    <Group aria-label="ترقيم الصفحات">
      <Group aria-label="أرقام الصفحات">
        <Button className="min-w-8" variant="outline">
          1
        </Button>
        <GroupSeparator />
        <Button className="min-w-8" variant="outline">
          2
        </Button>
        <GroupSeparator />
        <Button className="min-w-8" variant="outline">
          3
        </Button>
        <GroupSeparator />
        <Button className="min-w-8" variant="outline">
          4
        </Button>
        <GroupSeparator />
        <Button className="min-w-8" variant="outline">
          5
        </Button>
      </Group>
      <Group aria-label="الملاحة">
        <Button aria-label="السابق" size="icon" variant="outline">
          <ArrowLeftIcon className="rtl:rotate-180" aria-hidden="true" />
        </Button>
        <GroupSeparator />
        <Button aria-label="التالي" size="icon" variant="outline">
          <ArrowRightIcon className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      </Group>
    </Group>
  );
}
