import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button className="group h-auto gap-4 py-3 text-start" variant="outline">
      <div className="space-y-1">
        <h3>وكالة المواهب</h3>
        <p className="whitespace-break-spaces font-normal text-muted-foreground">
          مباريات لقائمتك
        </p>
      </div>
      <ChevronRightIcon
        aria-hidden="true"
        className="opacity-60 transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
        size={16}
      />
    </Button>
  );
}
