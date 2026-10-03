"use client";

import { useState } from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

const mainPermissions = [
  { id: "view-dashboard", name: "عرض لوحة التحكم" },
  { id: "manage-users", name: "إدارة المستخدمين" },
  { id: "access-reports", name: "تقارير الوصول" },
];

const userManagementPermissions = [
  { id: "create-user", name: "إنشاء مستخدم" },
  { id: "edit-user", name: "تحرير المستخدم" },
  { id: "delete-user", name: "حذف المستخدم" },
  { id: "assign-roles", name: "تعيين الأدوار" },
];

export default function Particle() {
  const [mainValue, setMainValue] = useState<string[]>([]);
  const [managementValue, setManagementValue] = useState<string[]>([]);

  const managementIsPartial =
    managementValue.length > 0 &&
    managementValue.length !== userManagementPermissions.length;

  return (
    <CheckboxGroup
      allValues={mainPermissions.map((p) => p.id)}
      aria-labelledby="user-permissions-caption"
      onValueChange={(value) => {
        if (value.includes("manage-users")) {
          setManagementValue(userManagementPermissions.map((p) => p.id));
        } else if (
          managementValue.length === userManagementPermissions.length
        ) {
          setManagementValue([]);
        }
        setMainValue(value);
      }}
      value={mainValue}
    >
      <Label id="user-permissions-caption">
        <Checkbox indeterminate={managementIsPartial} parent />
        تصاريح المستخدم
      </Label>

      {mainPermissions
        .filter((p) => p.id !== "manage-users")
        .map((p) => (
          <Label className="ms-4" key={p.id}>
            <Checkbox value={p.id} />
            {p.name}
          </Label>
        ))}

      <CheckboxGroup
        allValues={userManagementPermissions.map((p) => p.id)}
        aria-labelledby="manage-users-caption"
        className="ms-4"
        onValueChange={(value) => {
          if (value.length === userManagementPermissions.length) {
            setMainValue((prev) =>
              Array.from(new Set([...prev, "manage-users"])),
            );
          } else {
            setMainValue((prev) => prev.filter((v) => v !== "manage-users"));
          }
          setManagementValue(value);
        }}
        value={managementValue}
      >
        <Label id="manage-users-caption">
          <Checkbox parent />
          إدارة المستخدمين
        </Label>

        {userManagementPermissions.map((p) => (
          <Label className="ms-4" key={p.id}>
            <Checkbox value={p.id} />
            {p.name}
          </Label>
        ))}
      </CheckboxGroup>
    </CheckboxGroup>
  );
}
