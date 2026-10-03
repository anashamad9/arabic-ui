"use client";

import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";

const requirements = [
  { regex: /.{8,}/, text: "8 أحرف على الأقل" },
  { regex: /[0-9]/, text: "رقم واحد على الأقل" },
  { regex: /[a-z]/, text: "على الأقل 1 حرف صغير" },
  { regex: /[A-Z]/, text: "على الأقل 1 حرف كبير" },
];

export default function Particle() {
  const id = useId();
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const strength = requirements.map((req) => ({
    met: req.regex.test(password),
    text: req.text,
  }));

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "أدخل كلمة مرور";
    if (score <= 2) return "كلمة مرور ضعيفة";
    if (score === 3) return "كلمة مرور متوسطة";
    return "كلمة مرور قوية";
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>كلمة المرور</Label>
        <InputGroup>
          <InputGroupInput
            aria-describedby={`${id}-description`}
            id={id}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            type={isVisible ? "text" : "password"}
            value={password}
          />
          <InputGroupAddon align="inline-end">
            <Button
              aria-label={isVisible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
              onClick={() => setIsVisible(!isVisible)}
              size="icon-xs"
              variant="ghost"
            >
              {isVisible ? (
                <EyeOffIcon aria-hidden="true" />
              ) : (
                <EyeIcon aria-hidden="true" />
              )}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div
        aria-label="قوة كلمة المرور"
        aria-valuemax={4}
        aria-valuemin={0}
        aria-valuenow={strengthScore}
        className="h-1 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        tabIndex={-1}
      >
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        />
      </div>

      <p
        className="font-medium text-foreground text-sm"
        id={`${id}-description`}
      >
        {getStrengthText(strengthScore)}. Must contain:
      </p>

      <ul aria-label="متطلبات كلمة المرور" className="flex flex-col gap-1.5">
        {strength.map((req) => (
          <li className="flex items-center gap-2" key={req.text}>
            {req.met ? (
              <CheckIcon
                aria-hidden="true"
                className="size-4 text-emerald-500"
              />
            ) : (
              <XIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground/80"
              />
            )}
            <span
              className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? "- تلبية المتطلبات" : "- لم يتم استيفاء المتطلبات"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
