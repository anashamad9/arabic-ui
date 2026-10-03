import { Slider } from "@/registry/default/ui/slider";

export default function Particle() {
  return (
    <Slider
      aria-label="منزلق الإبهام المزدوج مع سلوك الاصطدام لا شيء"
      defaultValue={[25, 75]}
      thumbCollisionBehavior="none"
    />
  );
}
