import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  return (
    <CheckboxGroup aria-label="حدد أطر العمل" defaultValue={["next"]}>
      <Label>
        <Checkbox value="next" />
        Next.js
      </Label>
      <Label>
        <Checkbox value="vite" />
        فايت
      </Label>
      <Label>
        <Checkbox value="astro" />
        أسترو
      </Label>
    </CheckboxGroup>
  );
}
