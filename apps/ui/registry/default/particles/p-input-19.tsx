import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Input
      aria-label="أدخل النص"
      className="[--radius-lg:9999px] [--radius:9999px]"
      placeholder="أدخل النص"
      type="text"
    />
  );
}
