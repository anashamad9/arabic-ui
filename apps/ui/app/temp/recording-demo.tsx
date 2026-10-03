"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";
import { OTPField, OTPFieldInput } from "@/registry/default/ui/otp-field";
import { Progress } from "@/registry/default/ui/progress";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Slider } from "@/registry/default/ui/slider";
import { Switch } from "@/registry/default/ui/switch";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";
import { Textarea } from "@/registry/default/ui/textarea";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";

const DURATION = 3000;
const DEMOS = [
  ["رمز التحقق", "ستة أرقام، وتجربة سلسة."],
  ["حقل الإدخال", "كل فكرة تبدأ بكلمة."],
  ["مفتاح التبديل", "تفضيلاتك، بلمسة واحدة."],
  ["مربع الاختيار", "تفاصيل صغيرة تصنع الفرق."],
  ["شريط التمرير", "اضبط كل شيء كما تحب."],
  ["التبويبات", "محتواك، بترتيب واضح."],
  ["القائمة القابلة للطي", "الإجابة على بُعد نقرة."],
  ["قائمة الاختيار", "اختيارات واضحة وسهلة."],
  ["الاختيار الفردي", "اختر ما يناسبك."],
  ["مجموعة الأزرار", "انتقل بين طرق العرض."],
  ["شريط التقدم", "شاهد الإنجاز خطوة بخطوة."],
  ["زر الإجراء", "من نقرة إلى إنجاز."],
  ["حقل الأرقام", "زيادة، نقصان، ودقة."],
  ["حقل النص الطويل", "مساحة لأفكارك."],
  ["التقويم", "موعدك القادم يبدأ هنا."],
] as const;

const cities = [
  { label: "الرياض", value: "riyadh" },
  { label: "جدة", value: "jeddah" },
  { label: "الدمام", value: "dammam" },
];
const arabicNumber = (value: number) => value.toLocaleString("ar");

export function RecordingDemo() {
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setElapsed((time) => time + 50), 50);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    if (elapsed < DURATION) return;
    setIndex((current) => (current + 1) % DEMOS.length);
    setElapsed(0);
  }, [elapsed]);

  function navigate(next: number) {
    setIndex((next + DEMOS.length) % DEMOS.length);
    setElapsed(0);
  }

  return (
    <main
      className="fixed inset-0 z-46 flex flex-col overflow-auto bg-background text-foreground"
      data-recording-stage
    >
      <header className="flex items-center justify-between px-6 py-6 sm:px-12">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm" dir="ltr">
            COSS UI/Arabic
          </span>
        </div>
        <span className="text-muted-foreground text-xs">
          تعريب أنس حمد لمكتبة coss UI
        </span>
      </header>

      <section className="m-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-6 text-center">
        <div
          key={index}
          className="fade-in slide-in-from-bottom-2 w-full animate-in duration-300"
        >
          <p className="mb-4 text-muted-foreground text-xs tracking-wide">
            {arabicNumber(index + 1)} من {arabicNumber(DEMOS.length)}
          </p>
          <h1 className="font-medium text-3xl sm:text-4xl">
            {(DEMOS[index] ?? DEMOS[0])[0]}
          </h1>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {(DEMOS[index] ?? DEMOS[0])[1]}
          </p>
          <div className="mt-10 flex min-h-80 items-center justify-center p-6 sm:p-12">
            <ComponentDemo beat={Math.floor(elapsed / 350)} index={index} />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mt-8 flex w-full max-w-xs gap-1.5"
          dir="rtl"
        >
          {DEMOS.map(([name], position) => (
            <div
              key={name}
              className="h-1 flex-1 overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-75"
                style={{
                  width:
                    position < index
                      ? "100%"
                      : position === index
                        ? `${Math.min(100, (elapsed / DURATION) * 100)}%`
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="flex min-h-24 flex-col items-center justify-center gap-3 px-6 pb-5">
        {controlsVisible && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              aria-label="المكون السابق"
              onClick={() => navigate(index - 1)}
              size="icon"
              variant="ghost"
            >
              <ArrowRight />
            </Button>
            <Button onClick={() => setPlaying(!playing)} variant="outline">
              {playing ? <Pause /> : <Play />}
              {playing ? "إيقاف مؤقت" : "تشغيل العرض"}
            </Button>
            <Button
              className="max-sm:size-9 max-sm:p-0"
              onClick={() => {
                navigate(0);
                setPlaying(true);
              }}
              variant="ghost"
            >
              <RotateCcw />
              <span className="max-sm:sr-only">إعادة العرض</span>
            </Button>
            <Button
              aria-label="المكون التالي"
              onClick={() => navigate(index + 1)}
              size="icon"
              variant="ghost"
            >
              <ArrowLeft />
            </Button>
          </div>
        )}
        <button
          className={`cursor-pointer text-muted-foreground text-xs transition-opacity hover:text-foreground ${controlsVisible ? "" : "opacity-0 hover:opacity-100 focus-visible:opacity-100"}`}
          onClick={() => setControlsVisible(!controlsVisible)}
          type="button"
        >
          {controlsVisible ? "إخفاء أدوات العرض" : "إظهار أدوات العرض"}
        </button>
      </footer>
    </main>
  );
}

type Values = {
  text: string;
  checked: boolean;
  newsletter: boolean;
  slider: number;
  tab: string;
  accordion: string[];
  city: string;
  open: boolean;
  radio: string;
  toggles: string[];
  number: number;
  note: string;
  date: Date | undefined;
};

function ComponentDemo({ index, beat }: { index: number; beat: number }) {
  const container = useRef<HTMLDivElement>(null);
  const [overrides, setOverrides] = useState<Partial<Values>>({});
  const complete = beat >= 7;
  const values: Values = {
    text:
      index === 0
        ? "482619".slice(0, Math.min(6, beat))
        : "أهلاً بالعالم".slice(0, beat * 2),
    checked: (beat >= 2 && beat < 5) || beat >= 7,
    newsletter: beat >= 5,
    slider: [20, 20, 35, 50, 65, 80, 80, 65, 65][Math.min(8, beat)] ?? 65,
    tab: beat < 3 ? "overview" : beat < 6 ? "activity" : "settings",
    accordion: beat < 2 ? [] : [beat < 5 ? "start" : "rtl"],
    city: beat < 5 ? "riyadh" : "jeddah",
    open: index === 7 && beat >= 2 && beat < 5,
    radio: beat < 3 ? "monthly" : "yearly",
    toggles: [beat < 3 ? "list" : beat < 6 ? "grid" : "cards"],
    number: Math.min(5, 1 + Math.floor(beat / 2)),
    note: "واجهات عربية تجعل كل تجربة أجمل.".slice(0, beat * 5),
    date: beat < 2 ? undefined : new Date(2026, 9, beat < 5 ? 12 : 18),
    ...overrides,
  };

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setOverrides((current) => ({ ...current, [key]: value }));
  }

  useEffect(() => {
    if (index !== 0 && index !== 1 && index !== 13) return;
    const fields = container.current?.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    const field = fields?.[index === 0 ? Math.min(beat, 5) : 0];
    field?.focus({ preventScroll: true });
  }, [index, beat]);

  let component: React.ReactNode;
  switch (index) {
    case 0:
      component = (
        <div className="space-y-6">
          <Label className="justify-center">أدخل رمز التحقق</Label>
          <div dir="ltr">
            <OTPField
              aria-label="رمز التحقق"
              length={6}
              size="lg"
              value={values.text}
              onValueChange={(value) => update("text", value)}
            >
              {[0, 1, 2, 3, 4, 5].map((slot) => (
                <OTPFieldInput
                  key={slot}
                  aria-label={`الرقم ${arabicNumber(slot + 1)}`}
                />
              ))}
            </OTPField>
          </div>
          <p className="h-5 text-muted-foreground text-sm">
            {complete && (
              <span className="inline-flex items-center gap-2 text-emerald-600">
                <Check className="size-4" />
                تم التحقق بنجاح
              </span>
            )}
          </p>
        </div>
      );
      break;
    case 1:
      component = (
        <div className="w-full max-w-xs space-y-3 text-start">
          <Label htmlFor="demo-name">اسمك</Label>
          <Input
            id="demo-name"
            placeholder="اكتب اسمك هنا"
            value={values.text}
            onChange={(event) => update("text", event.target.value)}
          />
          <p className="text-muted-foreground text-xs">سعداء بانضمامك إلينا.</p>
        </div>
      );
      break;
    case 2:
      component = (
        <Label className="flex w-full max-w-xs items-center justify-between gap-8">
          تفعيل الإشعارات
          <Switch
            checked={values.checked}
            onCheckedChange={(value) => update("checked", value)}
          />
        </Label>
      );
      break;
    case 3:
      component = (
        <div className="space-y-5 text-start">
          <Label>
            <Checkbox
              checked={values.checked}
              onCheckedChange={(value) => update("checked", value)}
            />
            أوافق على الشروط والأحكام
          </Label>
          <Label>
            <Checkbox
              checked={values.newsletter}
              onCheckedChange={(value) => update("newsletter", value)}
            />
            أرغب في تلقي آخر الأخبار
          </Label>
        </div>
      );
      break;
    case 4:
      component = (
        <div className="w-full max-w-xs space-y-6">
          <div className="flex justify-between text-sm">
            <span>مستوى الصوت</span>
            <span>{arabicNumber(values.slider)}٪</span>
          </div>
          <Slider
            aria-label="مستوى الصوت"
            value={values.slider}
            onValueChange={(value) =>
              update(
                "slider",
                typeof value === "number" ? value : (value[0] ?? 0),
              )
            }
          />
        </div>
      );
      break;
    case 5:
      component = (
        <Tabs
          className="w-full max-w-sm"
          value={values.tab}
          onValueChange={(value) => update("tab", String(value))}
        >
          <TabsList className="w-full">
            <TabsTab value="overview">نظرة عامة</TabsTab>
            <TabsTab value="activity">النشاط</TabsTab>
            <TabsTab value="settings">الإعدادات</TabsTab>
          </TabsList>
          <TabsPanel value="overview" className="p-6">
            مرحباً بك في مساحتك الجديدة.
          </TabsPanel>
          <TabsPanel value="activity" className="p-6">
            أكملت ثلاثة مشاريع هذا الأسبوع.
          </TabsPanel>
          <TabsPanel value="settings" className="p-6">
            خصص التجربة لتناسب احتياجاتك.
          </TabsPanel>
        </Tabs>
      );
      break;
    case 6:
      component = (
        <Accordion
          className="w-full max-w-sm text-start"
          value={values.accordion}
          onValueChange={(value) => update("accordion", value as string[])}
        >
          <AccordionItem value="start">
            <AccordionTrigger>كيف أبدأ باستخدام المكونات؟</AccordionTrigger>
            <AccordionPanel>
              اختر المكون الذي تحتاجه وخصصه ليناسب مشروعك.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="rtl">
            <AccordionTrigger>هل تدعم الواجهات اللغة العربية؟</AccordionTrigger>
            <AccordionPanel>
              نعم، صُممت للعربية مع دعم كامل للاتجاه من اليمين إلى اليسار.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      );
      break;
    case 7:
      component = (
        <div className="w-full max-w-xs space-y-3 text-start">
          <Label>مدينتك</Label>
          <Select
            items={cities}
            value={values.city}
            onValueChange={(value) => update("city", value ?? "riyadh")}
            open={values.open}
            onOpenChange={(value) => update("open", value)}
          >
            <SelectTrigger aria-label="اختر مدينتك" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectPopup>
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </div>
      );
      break;
    case 8:
      component = (
        <RadioGroup
          className="w-full max-w-xs gap-4 text-start"
          value={values.radio}
          onValueChange={(value) => update("radio", String(value))}
        >
          <Label className="rounded-xl border p-4">
            <Radio value="monthly" />
            اشتراك شهري
          </Label>
          <Label className="rounded-xl border p-4">
            <Radio value="yearly" />
            اشتراك سنوي
          </Label>
        </RadioGroup>
      );
      break;
    case 9:
      component = (
        <ToggleGroup
          value={values.toggles}
          onValueChange={(value) => update("toggles", value as string[])}
        >
          <ToggleGroupItem value="list">قائمة</ToggleGroupItem>
          <ToggleGroupItem value="grid">شبكة</ToggleGroupItem>
          <ToggleGroupItem value="cards">بطاقات</ToggleGroupItem>
        </ToggleGroup>
      );
      break;
    case 10:
      component = (
        <div className="w-full max-w-xs space-y-4">
          <div className="flex justify-between text-sm">
            <span>{complete ? "اكتمل الرفع" : "جارٍ رفع الملفات"}</span>
            <span>{arabicNumber(Math.min(100, beat * 15))}٪</span>
          </div>
          <Progress
            aria-label="تقدم رفع الملفات"
            value={Math.min(100, beat * 15)}
          />
        </div>
      );
      break;
    case 11:
      component = (
        <Button
          size="lg"
          loading={beat >= 2 && !complete}
          onClick={() => update("checked", true)}
        >
          {complete || overrides.checked ? (
            <>
              <Check />
              تم حفظ التغييرات
            </>
          ) : (
            "حفظ التغييرات"
          )}
        </Button>
      );
      break;
    case 12:
      component = (
        <div className="w-full max-w-48 space-y-3 text-start">
          <Label>عدد التذاكر</Label>
          <NumberField
            aria-label="عدد التذاكر"
            min={1}
            max={10}
            value={values.number}
            onValueChange={(value) => update("number", value ?? 1)}
          >
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
        </div>
      );
      break;
    case 13:
      component = (
        <div className="w-full max-w-sm space-y-3 text-start">
          <Label htmlFor="demo-note">رسالتك</Label>
          <Textarea
            id="demo-note"
            placeholder="شاركنا أفكارك…"
            value={values.note}
            onChange={(event) => update("note", event.target.value)}
          />
          <p className="text-muted-foreground text-xs">كلماتك تصنع الفرق.</p>
        </div>
      );
      break;
    default:
      component = (
        <Calendar
          mode="single"
          defaultMonth={new Date(2026, 9, 1)}
          selected={values.date}
          onSelect={(date) => update("date", date)}
        />
      );
  }

  return (
    <div ref={container} className="flex w-full items-center justify-center">
      {component}
    </div>
  );
}
