import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";

export default function Particle() {
  return (
    <Alert>
      <AlertTitle>تنبيه!</AlertTitle>
      <AlertDescription>
        <p>وصف ما يمكن القيام به حيال ذلك هنا.</p>
      </AlertDescription>
    </Alert>
  );
}
