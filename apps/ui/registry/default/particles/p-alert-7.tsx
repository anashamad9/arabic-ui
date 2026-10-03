import { CircleAlertIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";

export default function Particle() {
  return (
    <Alert variant="error">
      <CircleAlertIcon />
      <AlertTitle>تنبيه!</AlertTitle>
      <AlertDescription>وصف ما يمكن القيام به حيال ذلك هنا.</AlertDescription>
    </Alert>
  );
}
