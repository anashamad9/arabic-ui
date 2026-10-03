import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [
  {
    description: "ديسك للخطوة الأولى",
    step: 1,
    title: "خطوة واحدة",
  },
  {
    description: "وصف للخطوة الثانية",
    step: 2,
    title: "الخطوة الثانية",
  },
  {
    description: "وصف الخطوة الثالثة",
    step: 3,
    title: "الخطوة الثالثة",
  },
];

export default function Component() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            className="not-last:flex-1 max-md:items-start"
            key={step}
            step={step}
          >
            <StepperTrigger className="rounded max-md:flex-col">
              <StepperIndicator />
              <div className="text-center md:text-start">
                <StepperTitle>{title}</StepperTitle>
                <StepperDescription className="max-sm:hidden">
                  {description}
                </StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        السائر مع عناوين مضمنة والأوصاف
      </p>
    </div>
  );
}
