import {
  type AttributeItem,
  AttributesPageContent,
} from "../attributes-page-content";

const demoAttributes: AttributeItem[] = [
  {
    details: "اختيار متعدد · 1 خيارات",
    enabled: true,
    id: "attr_1",
    name: "اختبار اختبار الاختبار",
  },
  {
    details: "اختيار واحد · 3 خيارات",
    enabled: true,
    id: "attr_2",
    name: "اختبار 2",
  },
];

export default function AttributesDemoPage() {
  return <AttributesPageContent attributes={demoAttributes} />;
}
