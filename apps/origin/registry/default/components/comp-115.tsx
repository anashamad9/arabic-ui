import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button className="relative ps-12">
      السابق
      <span className="pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center bg-primary-foreground/15">
        <ChevronLeftIcon
          aria-hidden="true"
          className="opacity-60 rtl:rotate-180"
          size={16}
        />
      </span>
    </Button>
  );
}
