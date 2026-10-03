import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  return (
    <Button>
      ابدأ الآن
      <ArrowRightIcon
        aria-hidden="true"
        className="in-[[data-slot=button]:hover]:translate-x-0.5 transition-transform rtl:rotate-180"
      />
    </Button>
  );
}
