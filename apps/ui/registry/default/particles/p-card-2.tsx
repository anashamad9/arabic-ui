import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardAction,
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
      <CardHeader>
        <CardTitle>تسجيل الدخول إلى حسابك</CardTitle>
        <CardAction>
          <Link
            className="text-muted-foreground text-sm leading-4.5 hover:underline"
            href="#"
          >
            إنشاء حساب
          </Link>
        </CardAction>
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
    </Card>
  );
}
