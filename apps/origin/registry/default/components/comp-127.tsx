import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Button
        aria-label="عموم الكاميرا حتى"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <ChevronUpIcon aria-hidden="true" size={16} />
      </Button>
      <Button
        aria-label="كاميرا عموم اليسار"
        className="col-start-1"
        size="icon"
        variant="outline"
      >
        <ChevronLeftIcon
          className="rtl:rotate-180"
          aria-hidden="true"
          size={16}
        />
      </Button>
      <div aria-hidden="true" className="flex items-center justify-center">
        <CircleIcon className="opacity-60" size={16} />
      </div>
      <Button aria-label="كاميرا عموم الحق" size="icon" variant="outline">
        <ChevronRightIcon
          className="rtl:rotate-180"
          aria-hidden="true"
          size={16}
        />
      </Button>
      <Button
        aria-label="كاميرا عموم أسفل"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <ChevronDownIcon aria-hidden="true" size={16} />
      </Button>
    </div>
  );
}
