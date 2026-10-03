import { ChevronDownIcon, GitForkIcon } from "lucide-react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  return (
    <Group aria-label="إجراءات المستودع">
      <Button variant="outline">
        <GitForkIcon aria-hidden="true" />
        شوكة
        <Badge variant="secondary">48</Badge>
      </Button>
      <GroupSeparator />
      <Popover>
        <PopoverTrigger
          render={
            <Button aria-label="إرسال خيارات" size="icon" variant="outline" />
          }
        >
          <ChevronDownIcon aria-hidden="true" />
        </PopoverTrigger>
        <PopoverPopup align="end" className="w-64">
          <PopoverTitle className="text-base">الشوكات الموجودة</PopoverTitle>
          <PopoverDescription>
            ليس لديك أي شوكات من هذا المستودع
          </PopoverDescription>
        </PopoverPopup>
      </Popover>
    </Group>
  );
}
