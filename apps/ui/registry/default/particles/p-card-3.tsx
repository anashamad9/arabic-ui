import { ShieldAlertIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/default/ui/card";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="border-b">
        <CardTitle>تسجيل الدخول إلى حسابك</CardTitle>
        <CardDescription>
          أدخل البريد الإلكتروني وكلمة المرور لتسجيل الدخول
        </CardDescription>
      </CardHeader>
      <CardPanel>
        <Form className="flex w-full flex-col gap-4">
          <Field>
            <FieldLabel>البريد الإلكتروني</FieldLabel>
            <Input placeholder="أدخل بريدك الإلكتروني" type="email" />
          </Field>
          <Field>
            <FieldLabel>كلمة المرور</FieldLabel>
            <Input placeholder="أدخل كلمة المرور" type="password" />
          </Field>
          <Button className="w-full" type="submit">
            تسجيل الدخول
          </Button>
        </Form>
      </CardPanel>
      <CardFooter className="border-t">
        <div className="flex gap-1 text-muted-foreground text-xs">
          <ShieldAlertIcon className="size-3 h-lh shrink-0" />
          <p>يتم تشفير المعلومات التي تدخلها وتخزينها بشكل آمن.</p>
        </div>
      </CardFooter>
    </Card>
  );
}
