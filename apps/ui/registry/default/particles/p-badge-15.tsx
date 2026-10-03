import { Badge } from "@/registry/default/ui/badge";

export default function Particle() {
  return (
    <Badge variant="outline">
      الإشعارات
      <span className="ms-1 font-semibold text-primary">5</span>
    </Badge>
  );
}
