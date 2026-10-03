import type { Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "ui",
    registryDependencies: [
      "@arabicui/accordion",
      "@arabicui/alert",
      "@arabicui/alert-dialog",
      "@arabicui/autocomplete",
      "@arabicui/avatar",
      "@arabicui/badge",
      "@arabicui/breadcrumb",
      "@arabicui/button",
      "@arabicui/calendar",
      "@arabicui/card",
      "@arabicui/checkbox",
      "@arabicui/checkbox-group",
      "@arabicui/collapsible",
      "@arabicui/combobox",
      "@arabicui/command",
      "@arabicui/context-menu",
      "@arabicui/dialog",
      "@arabicui/drawer",
      "@arabicui/empty",
      "@arabicui/field",
      "@arabicui/fieldset",
      "@arabicui/form",
      "@arabicui/frame",
      "@arabicui/group",
      "@arabicui/input",
      "@arabicui/otp-field",
      "@arabicui/input-group",
      "@arabicui/kbd",
      "@arabicui/label",
      "@arabicui/menu",
      "@arabicui/meter",
      "@arabicui/number-field",
      "@arabicui/pagination",
      "@arabicui/popover",
      "@arabicui/preview-card",
      "@arabicui/progress",
      "@arabicui/radio-group",
      "@arabicui/scroll-area",
      "@arabicui/select",
      "@arabicui/separator",
      "@arabicui/sheet",
      "@arabicui/sidebar",
      "@arabicui/skeleton",
      "@arabicui/slider",
      "@arabicui/spinner",
      "@arabicui/switch",
      "@arabicui/table",
      "@arabicui/tabs",
      "@arabicui/textarea",
      "@arabicui/toast",
      "@arabicui/toggle",
      "@arabicui/toggle-group",
      "@arabicui/toolbar",
      "@arabicui/tooltip",
    ],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
    name: "accordion",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-400)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-400)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-700)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-700)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-700)",
      },
    },
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
    name: "alert",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
    name: "alert-dialog",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/autocomplete.tsx",
        type: "registry:ui",
      },
    ],
    name: "autocomplete",
    registryDependencies: ["@arabicui/input", "@arabicui/scroll-area"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
    name: "avatar",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-400)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-400)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-700)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-700)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-700)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
    name: "badge",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
    name: "breadcrumb",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
    name: "button",
    registryDependencies: ["@arabicui/spinner"],
    type: "registry:ui",
  },
  {
    dependencies: ["@daypicker/react", "lucide-react"],
    files: [
      {
        path: "ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
    name: "calendar",
    registryDependencies: [],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
    name: "card",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    name: "checkbox",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/checkbox-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "checkbox-group",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
    name: "collapsible",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
    name: "combobox",
    registryDependencies: ["@arabicui/input", "@arabicui/scroll-area"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
    name: "command",
    registryDependencies: ["@arabicui/autocomplete"],
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/context-menu.tsx",
        type: "registry:ui",
      },
    ],
    name: "context-menu",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
    name: "dialog",
    registryDependencies: ["@arabicui/button", "@arabicui/scroll-area"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
    name: "drawer",
    registryDependencies: ["@arabicui/button", "@arabicui/scroll-area"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/empty.tsx",
        type: "registry:ui",
      },
    ],
    name: "empty",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
    name: "field",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/fieldset.tsx",
        type: "registry:ui",
      },
    ],
    name: "fieldset",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/form.tsx",
        type: "registry:ui",
      },
    ],
    name: "form",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/frame.tsx",
        type: "registry:ui",
      },
    ],
    name: "frame",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/group.tsx",
        type: "registry:ui",
      },
    ],
    name: "group",
    registryDependencies: ["@arabicui/separator"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
    name: "input",
    type: "registry:ui",
  },
  {
    css: {
      "@keyframes caret-blink": {
        "0%, 70%, to": {
          opacity: "1",
        },
        "20%, 50%": {
          opacity: "0",
        },
      },
    },
    cssVars: {
      theme: {
        "--animate-caret-blink": "1s ease-out infinite care-blink",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/otp-field.tsx",
        type: "registry:ui",
      },
    ],
    name: "otp-field",
    registryDependencies: ["@arabicui/separator"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "input-group",
    registryDependencies: ["@arabicui/input", "@arabicui/textarea"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
    name: "kbd",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
    name: "label",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/menu.tsx",
        type: "registry:ui",
      },
    ],
    name: "menu",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/meter.tsx",
        type: "registry:ui",
      },
    ],
    name: "meter",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/number-field.tsx",
        type: "registry:ui",
      },
    ],
    name: "number-field",
    registryDependencies: ["@arabicui/label"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
    name: "pagination",
    registryDependencies: ["@arabicui/button"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
    name: "popover",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/preview-card.tsx",
        type: "registry:ui",
      },
    ],
    name: "preview-card",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
    name: "progress",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "radio-group",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
    name: "scroll-area",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
    name: "select",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
    name: "separator",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
    name: "sheet",
    registryDependencies: ["@arabicui/button", "@arabicui/scroll-area"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    name: "sidebar",
    registryDependencies: [
      "@arabicui/button",
      "@arabicui/input",
      "@arabicui/scroll-area",
      "@arabicui/separator",
      "@arabicui/sheet",
      "@arabicui/skeleton",
      "@arabicui/tooltip",
      "@arabicui/use-media-query",
      "@arabicui/utils",
    ],
    type: "registry:ui",
  },
  {
    css: {
      "@keyframes skeleton": {
        to: {
          "background-position": "-200% 0",
        },
      },
    },
    cssVars: {
      theme: {
        "--animate-skeleton": "هيكل عظمي 2S -1S خطي لانهائي",
      },
    },
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
    name: "skeleton",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
    name: "slider",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
    name: "spinner",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    name: "switch",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
    name: "table",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
    name: "tabs",
    registryDependencies: ["@arabicui/segmented-control"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    name: "textarea",
    type: "registry:ui",
  },
  {
    css: {
      "@keyframes toast-success-odd": {
        "0%": {
          scale: "1",
        },
        "30%": {
          scale: "1.025",
        },
        "60%": {
          scale: "0.99",
        },
        "100%": {
          scale: "1",
        },
      },
      "@keyframes toast-error-odd": {
        "0%": {
          translate: "0 0",
        },
        "25%": {
          translate: "-3px 0",
        },
        "50%": {
          translate: "3px 0",
        },
        "75%": {
          translate: "-3px 0",
        },
        "100%": {
          translate: "0 0",
        },
      },
      "@keyframes toast-success-even": {
        "0%": {
          scale: "1",
        },
        "30%": {
          scale: "1.025",
        },
        "60%": {
          scale: "0.99",
        },
        "100%": {
          scale: "1",
        },
      },
      "@keyframes toast-error-even": {
        "0%": {
          translate: "0 0",
        },
        "25%": {
          translate: "-3px 0",
        },
        "50%": {
          translate: "3px 0",
        },
        "75%": {
          translate: "-3px 0",
        },
        "100%": {
          translate: "0 0",
        },
      },
    },
    cssVars: {
      theme: {
        "--animate-toast-success-odd":
          "toast-success-odd 0.32s cubic-bezier(0.5, 1, 0.89, 1)",
        "--animate-toast-success-even":
          "toast-success-even 0.32s cubic-bezier(0.5, 1, 0.89, 1)",
        "--animate-toast-error-odd":
          "toast-error-odd 0.28s cubic-bezier(0.5, 1, 0.89, 1)",
        "--animate-toast-error-even":
          "toast-error-even 0.28s cubic-bezier(0.5, 1, 0.89, 1)",
      },
    },
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/toast.tsx",
        type: "registry:ui",
      },
    ],
    name: "toast",
    registryDependencies: ["@arabicui/button"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
    name: "toggle",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/toggle-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "toggle-group",
    registryDependencies: ["@arabicui/separator", "@arabicui/toggle"],
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/toolbar.tsx",
        type: "registry:ui",
      },
    ],
    name: "toolbar",
    type: "registry:ui",
  },
  {
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
    name: "tooltip",
    type: "registry:ui",
  },
];
