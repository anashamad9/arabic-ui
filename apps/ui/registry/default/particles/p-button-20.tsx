import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  return (
    <Button variant="link">
      <ChevronLeftIcon className="rtl:rotate-180" aria-hidden="true" />
      العودة إلى الوراء
    </Button>
  );
}
