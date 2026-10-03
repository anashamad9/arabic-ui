import { Label } from "@/registry/default/ui/label";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export default function Particle() {
  return (
    <RadioGroup defaultValue="next">
      <Label>
        <Radio value="next" /> Next.js
      </Label>
      <Label>
        <Radio value="vite" /> فايت
      </Label>
      <Label>
        <Radio value="astro" /> أسترو
      </Label>
    </RadioGroup>
  );
}
