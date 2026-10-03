import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  return (
    <Textarea
      className="*:field-sizing-fixed *:min-h-0"
      placeholder="اكتب رسالتك هنا"
      rows={2}
    />
  );
}
