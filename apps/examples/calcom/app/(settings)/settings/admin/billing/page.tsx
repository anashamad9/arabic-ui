"use client";

import { Badge } from "@coss/ui/components/badge";
import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Group } from "@coss/ui/components/group";
import { Input } from "@coss/ui/components/input";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@coss/ui/components/sheet";
import { ExternalLinkIcon } from "lucide-react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function AdminBillingPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الفوترة الإدارية">
          <AppHeaderDescription>
            إدارة رسائل البريد الإلكتروني الفواتير والوصول إلى البوابة الشريطية
            للتراخيص.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>البحث عن النشر المستضاف ذاتيًا</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel>
              <Field>
                <FieldLabel>البريد الإلكتروني الفواتير</FieldLabel>
                <Group
                  aria-label="انتحال شخصية المستخدم"
                  className="w-full gap-2"
                >
                  <Input placeholder="customer@example.com" type="email" />
                  <div>
                    <Sheet>
                      <SheetTrigger render={<Button />}>بحث</SheetTrigger>
                      <SheetPopup variant="inset">
                        <SheetHeader>
                          <SheetTitle>تفاصيل النشر</SheetTitle>
                          <SheetDescription>a@gmail.com</SheetDescription>
                        </SheetHeader>
                        <SheetPanel className="flex flex-col gap-6">
                          <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-sm">
                              تفاصيل الفواتير
                            </h3>
                            <dl className="flex flex-col gap-2 rounded-xl border p-4 text-xs">
                              <div className="flex justify-between gap-4">
                                <dt className="text-muted-foreground">
                                  البريد الإلكتروني الفواتير
                                </dt>
                                <dd className="font-medium">a@gmail.com</dd>
                              </div>
                              <div className="flex justify-between gap-4">
                                <dt className="text-muted-foreground">
                                  هوية العميل
                                </dt>
                                <dd className="font-medium">
                                  cus_mock123456789
                                </dd>
                              </div>
                              <div className="flex justify-between gap-4">
                                <dt className="text-muted-foreground">
                                  تم إنشاؤها
                                </dt>
                                <dd className="font-medium">1/15/2024</dd>
                              </div>
                              <div className="flex justify-between gap-4">
                                <dt className="text-muted-foreground">
                                  آخر تحديث
                                </dt>
                                <dd className="font-medium">3/1/2024</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-sm">
                              مفاتيح الترخيص (2)
                            </h3>
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col gap-4 rounded-xl border p-4 text-xs">
                                <dl className="flex flex-col gap-2">
                                  <div className="flex justify-between gap-4">
                                    <dd className="font-medium font-mono">
                                      كال_live_xxxxxxxxxxxx
                                    </dd>
                                    <dd className="flex items-center gap-2">
                                      <Badge variant="success">نشط</Badge>
                                      <Badge variant="info">
                                        استضافة ذاتية
                                      </Badge>
                                    </dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      معرف الاشتراك
                                    </dt>
                                    <dd className="font-medium">
                                      sub_mock123456789
                                    </dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      نوع الفوترة
                                    </dt>
                                    <dd className="font-medium">PER_USER</dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      عدد الكيانات
                                    </dt>
                                    <dd className="font-medium">10</dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      سعر الكيان
                                    </dt>
                                    <dd className="font-medium">$5.00</dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      التجاوزات
                                    </dt>
                                    <dd className="font-medium">0</dd>
                                  </div>
                                </dl>
                                <div>
                                  <h4 className="mb-2 font-semibold text-sm">
                                    الاستخدام الأخير (آخر 30 يومًا)
                                  </h4>
                                  <dl className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                      <dt className="text-muted-foreground">
                                        2/1/2024
                                      </dt>
                                      <dd>42</dd>
                                    </div>
                                    <div className="flex justify-between">
                                      <dt className="text-muted-foreground">
                                        2/15/2024
                                      </dt>
                                      <dd>38</dd>
                                    </div>
                                    <div className="flex justify-between">
                                      <dt className="text-muted-foreground">
                                        3/1/2024
                                      </dt>
                                      <dd>55</dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>

                              <div className="flex flex-col gap-4 rounded-xl border p-4 text-xs">
                                <dl className="flex flex-col gap-2">
                                  <div className="flex justify-between gap-4">
                                    <dd className="font-medium font-mono">
                                      كال_live...yyyyyyy
                                    </dd>
                                    <dd className="flex items-center gap-2">
                                      <Badge variant="secondary">غير نشط</Badge>
                                      <Badge variant="info">
                                        استضافة ذاتية
                                      </Badge>
                                    </dd>
                                  </div>
                                  <div className="flex justify-between gap-4">
                                    <dt className="text-muted-foreground">
                                      معرف الاشتراك
                                    </dt>
                                    <dd className="font-medium">
                                      لم يتم تعيين
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </SheetPanel>
                        <SheetFooter>
                          <SheetClose render={<Button variant="ghost" />}>
                            إغلاق
                          </SheetClose>
                          <Button variant="outline">تحرير الفواتير</Button>
                          <Button variant="outline">
                            إعادة إرسال البريد الإلكتروني
                          </Button>
                        </SheetFooter>
                      </SheetPopup>
                    </Sheet>
                  </div>
                </Group>
                <FieldDescription>
                  ابحث عن نشر مستضاف ذاتيًا عن طريق إرسال بريد إلكتروني الفواتير
                  لعرض تفاصيله وإدارتها.
                </FieldDescription>
              </Field>
            </CardPanel>
          </Card>
        </CardFrame>
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>إعادة إرسال تأكيد الشراء</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel>
              <Field>
                <FieldLabel>البريد الإلكتروني الفواتير</FieldLabel>
                <Group
                  aria-label="انتحال شخصية المستخدم"
                  className="w-full gap-2"
                >
                  <Input placeholder="customer@example.com" type="email" />
                  <div>
                    <Button>إعادة إرسال البريد الإلكتروني</Button>
                  </div>
                </Group>
                <FieldDescription>
                  إرسال البريد الإلكتروني تأكيد الشراء إلى عنوان الفوترة.
                </FieldDescription>
              </Field>
            </CardPanel>
          </Card>
        </CardFrame>
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>بوابة الفوترة</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardFrameDescription>
                    افتح بوابة الفوترة الشريطية لهذا الترخيص.
                  </CardFrameDescription>
                </div>
                <Button>
                  بوابة الفوترة
                  <ExternalLinkIcon aria-hidden="true" />
                </Button>
              </div>
            </CardPanel>
          </Card>
        </CardFrame>
      </div>
    </>
  );
}
