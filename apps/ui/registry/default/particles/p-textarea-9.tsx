import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  return (
    <Textarea
      aria-label="الرسالة"
      className="border-transparent bg-muted shadow-none before:hidden"
      placeholder="اكتب رسالتك هنا"
    />
  );
}
