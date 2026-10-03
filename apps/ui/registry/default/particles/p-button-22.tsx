import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Button
        aria-label="عموم الكاميرا حتى"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <ChevronUpIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label="كاميرا عموم اليسار"
        className="col-start-1"
        size="icon"
        variant="outline"
      >
        <ChevronLeftIcon className="rtl:rotate-180" aria-hidden="true" />
      </Button>
      <div aria-hidden="true" className="flex items-center justify-center">
        <CircleIcon className="size-4 opacity-80" />
      </div>
      <Button aria-label="كاميرا عموم الحق" size="icon" variant="outline">
        <ChevronRightIcon className="rtl:rotate-180" aria-hidden="true" />
      </Button>
      <Button
        aria-label="كاميرا عموم أسفل"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <ChevronDownIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
