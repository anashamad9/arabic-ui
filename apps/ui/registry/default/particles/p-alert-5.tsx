import { CircleCheckIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";

export default function Particle() {
  return (
    <Alert variant="success">
      <CircleCheckIcon />
      <AlertTitle>تنبيه!</AlertTitle>
      <AlertDescription>وصف ما يمكن القيام به حيال ذلك هنا.</AlertDescription>
    </Alert>
  );
}
