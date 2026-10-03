import type { Registry } from "shadcn/schema";

export const fonts: Registry["items"] = [
  {
    name: "fonts",
    type: "registry:ui",
    registryDependencies: [
      "@arabicui/font-sans",
      "@arabicui/font-heading",
      "@arabicui/font-mono",
    ],
    files: [],
  },
  {
    name: "font-sans",
    type: "registry:style",
    cssVars: {
      theme: {
        "font-sans": '"Thmanyah Sans", sans-serif',
      },
    },
    files: [],
  },
  {
    name: "font-heading",
    type: "registry:style",
    cssVars: {
      theme: {
        "font-heading": '"Thmanyah Sans", sans-serif',
      },
    },
    files: [],
  },
  {
    name: "font-mono",
    type: "registry:style",
    cssVars: {
      theme: {
        "font-mono": 'ui-monospace, "Thmanyah Sans", monospace',
      },
    },
    files: [],
  },
];
