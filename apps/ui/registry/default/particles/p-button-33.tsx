import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  return (
    <div className="inline-flex items-center gap-2">
      <Button variant="ghost">إلغاء</Button>
      <Button>حفظ</Button>
    </div>
  );
}
