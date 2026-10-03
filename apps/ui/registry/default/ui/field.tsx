"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import type React from "react";
import { cn } from "@/registry/default/lib/utils";

export function Field({
  className,
  ...props
}: FieldPrimitive.Root.Props): React.ReactElement {
  return (
    <FieldPrimitive.Root
      className={cn("flex flex-col items-start gap-2", className)}
      data-slot="field"
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: FieldPrimitive.Label.Props): React.ReactElement {
  return (
    <FieldPrimitive.Label
      className={cn(
        "inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground data-disabled:opacity-64 sm:text-sm/4",
        className,
      )}
      data-slot="field-label"
      {...props}
    />
  );
}

export function FieldItem({
  className,
  ...props
}: FieldPrimitive.Item.Props): React.ReactElement {
  return (
    <FieldPrimitive.Item
      className={cn("flex", className)}
      data-slot="field-item"
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props): React.ReactElement {
  return (
    <FieldPrimitive.Description
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="field-description"
      {...props}
    />
  );
}

export function FieldError({
  children,
  className,
  ...props
}: FieldPrimitive.Error.Props): React.ReactElement {
  return (
    <FieldPrimitive.Validity>
      {({ validity, error }) => (
        <FieldPrimitive.Error
          className={cn("text-destructive-foreground text-xs", className)}
          data-slot="field-error"
          {...props}
        >
          {children ??
            (validity.valueMissing
              ? "يرجى ملء هذا الحقل."
              : validity.typeMismatch
                ? "يرجى إدخال قيمة صحيحة."
                : validity.tooShort
                  ? "القيمة أقصر من الحد المطلوب."
                  : validity.tooLong
                    ? "القيمة أطول من الحد المسموح."
                    : validity.rangeUnderflow
                      ? "القيمة أقل من الحد المسموح."
                      : validity.rangeOverflow
                        ? "القيمة أكبر من الحد المسموح."
                        : validity.patternMismatch
                          ? "يرجى الالتزام بالتنسيق المطلوب."
                          : validity.stepMismatch || validity.badInput
                            ? "يرجى إدخال رقم صحيح."
                            : error || "يرجى التحقق من القيمة المدخلة.")}
        </FieldPrimitive.Error>
      )}
    </FieldPrimitive.Validity>
  );
}

export const FieldControl: typeof FieldPrimitive.Control =
  FieldPrimitive.Control;
export const FieldValidity: typeof FieldPrimitive.Validity =
  FieldPrimitive.Validity;

export { FieldPrimitive };
