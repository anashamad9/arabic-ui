import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";

export default function Component() {
  return (
    <ToggleGroup className="inline-flex" type="single" variant="outline">
      <ToggleGroupItem value="left">اليسار</ToggleGroupItem>
      <ToggleGroupItem value="center">مركز</ToggleGroupItem>
      <ToggleGroupItem value="right">اليمين</ToggleGroupItem>
    </ToggleGroup>
  );
}
