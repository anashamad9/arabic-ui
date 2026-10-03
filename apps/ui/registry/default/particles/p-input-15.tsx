import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Input
      aria-label="البريد الإلكتروني"
      className="border-transparent bg-muted shadow-none before:hidden"
      placeholder="البريد الإلكتروني"
      type="email"
    />
  );
}
