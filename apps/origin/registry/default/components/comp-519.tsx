import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [
  {
    step: 1,
    title: "خطوة واحدة",
  },
  {
    step: 2,
    title: "الخطوة الثانية",
  },
  {
    step: 3,
    title: "الخطوة الثالثة",
  },
  {
    step: 4,
    title: "الخطوة الرابعة",
  },
];

export default function Component() {
  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper className="items-start gap-4" defaultValue={2}>
        {steps.map(({ step, title }) => (
          <StepperItem className="flex-1" key={step} step={step}>
            <StepperTrigger className="w-full flex-col items-start gap-2 rounded">
              <StepperIndicator asChild className="h-1 w-full bg-border">
                <span className="sr-only">{step}</span>
              </StepperIndicator>
              <div className="space-y-0.5">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        السائر مع التسميات
      </p>
    </div>
  );
}
