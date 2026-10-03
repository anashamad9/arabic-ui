import { CircleAlertIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/default/ui/card";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Frame, FrameFooter } from "@/registry/default/ui/frame";
import { Input } from "@/registry/default/ui/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const frameworkOptions = [
  { label: "Next.js", value: "next" },
  { label: "فايت", value: "vite" },
  { label: "ريميكس", value: "remix" },
  { label: "أسترو", value: "astro" },
];

export default function Particle() {
  return (
    <Frame className="w-full max-w-xs">
      <Card>
        <CardHeader>
          <CardTitle>إنشاء مشروع</CardTitle>
          <CardDescription>انشر مشروعك الجديد بنقرة واحدة.</CardDescription>
        </CardHeader>
        <CardPanel>
          <Form className="flex w-full flex-col gap-4">
            <Field>
              <FieldLabel>الاسم</FieldLabel>
              <Input placeholder="اسم المشروع" type="text" />
            </Field>
            <Field>
              <FieldLabel>إطار العمل</FieldLabel>
              <Select defaultValue="next" items={frameworkOptions}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectPopup>
                  {frameworkOptions.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
            </Field>
            <Button className="w-full" type="submit">
              نشر
            </Button>
          </Form>
        </CardPanel>
      </Card>
      <FrameFooter>
        <div className="flex gap-1 text-muted-foreground text-xs">
          <CircleAlertIcon className="size-3 h-lh shrink-0" />
          <p>سيستغرق الأمر بضع ثوانٍ لإكماله.</p>
        </div>
      </FrameFooter>
    </Frame>
  );
}
