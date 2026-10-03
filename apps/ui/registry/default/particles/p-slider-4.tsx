import { Slider } from "@/registry/default/ui/slider";

export default function Particle() {
  return (
    <div>
      <Slider
        aria-label="حجم التخزين في غيغابايت"
        defaultValue={15}
        max={35}
        min={5}
      />
      <div
        aria-label="القيم المرجعية لحجم التخزين"
        className="mt-4 flex w-full items-center justify-between gap-1 font-medium text-muted-foreground text-xs"
        role="group"
      >
        <span>5 جيجابايت</span>
        <span>20 جيجابايت</span>
        <span>35 جيجابايت</span>
      </div>
    </div>
  );
}
