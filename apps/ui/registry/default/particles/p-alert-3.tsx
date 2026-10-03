import { InfoIcon } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";
import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>تنبيه!</AlertTitle>
      <AlertDescription>وصف ما يمكن القيام به حيال ذلك هنا.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost">
          رفض
        </Button>
        <Button size="xs">موافق</Button>
      </AlertAction>
    </Alert>
  );
}
