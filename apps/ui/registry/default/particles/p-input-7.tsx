import { Button } from "@/registry/default/ui/button";
import { Group } from "@/registry/default/ui/group";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Group aria-label="الاشتراك في البريد الإلكتروني" className="gap-2">
      <Input
        aria-label="البريد الإلكتروني"
        className="flex-1"
        placeholder="you@example.com"
        type="email"
      />
      <div>
        <Button variant="outline">إرسال</Button>
      </div>
    </Group>
  );
}
