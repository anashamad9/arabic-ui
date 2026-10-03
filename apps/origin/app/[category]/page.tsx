import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { categories, getCategory } from "@/config/components";
import { getComponentsByNames } from "@/lib/utils";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category);

  if (!category) {
    return {};
  }

  // Get components to check count
  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );

  const isSingleComponent = components.length === 1;

  // Custom title and description for event-calendar
  if (category.slug === "event-calendar") {
    return {
      description:
        "مكون تقويم حدث تم إنشاؤه باستخدام رياكت و تيلويند. تم بناؤه في الأصل في v0 وحاليًا في مرحلة ألفا المبكرة.",
      title:
        "مكون تقويم الأحداث الذي تم إنشاؤه باستخدام رياكت و تيلويند - COSS UI/Arabic",
    };
  }

  return {
    description: isSingleComponent
      ? `جميلة ويمكن الوصول إليها ${category.name.toLowerCase()} مكون مبني مع رياكت و تيلويند.`
      : `مجموعة جميلة ويمكن الوصول إليها ${category.name.toLowerCase()} المكونات المبنية مع رياكت و تيلويند.`,
    title: isSingleComponent
      ? `${category.name} مكون مبني مع رياكت و تيلويند - COSS UI/Arabic الأصل`
      : `${category.name} مكونات بنيت مع رياكت و تيلويند - COSS UI/Arabic الأصل`,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function Page({ params }: Props) {
  const category = getCategory((await params).category);

  if (!category) {
    notFound();
  }

  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );

  // Determine the description text based on category
  const getDescriptionText = () => {
    // Special case for event-calendar
    if (category.slug === "event-calendar") {
      return (
        <span className="block text-balance">
          مكون تقويم أحداث مبني باستخدام رياكت و تيلويند. مبني أصلاً في{" "}
          <a
            className="text-primary hover:underline"
            href="https://v0.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            v0
          </a>{" "}
          حاليا في مرحلة ألفا المبكرة.{" "}
          <a
            className="inline-flex items-center gap-1 text-primary hover:underline"
            href="https://github.com/origin-space/event-calendar"
            rel="noopener noreferrer"
            target="_blank"
          >
            التوثيق
            <svg
              className="-mt-1 fill-current"
              height="9"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m1.55 8.445-.776-.776 5.767-5.777H2.087l.01-1.074H8.39v6.304H7.307l.01-4.454L1.55 8.445Z" />
            </svg>
          </a>
        </span>
      );
    }

    // Default case based on component count
    return components.length === 1
      ? `أ ${category.name.toLowerCase()} مكون مبني مع رياكت و تيلويند.`
      : `مجموعة متنامية من ${components.length} ${category.name.toLowerCase()} المكونات المبنية مع رياكت و تيلويند.`;
  };

  return (
    <>
      <PageHeader title={category.name}>{getDescriptionText()}</PageHeader>
      <PageGrid>
        {components.map((component) => (
          <ComponentCard
            className="data-[slot=comp-542]:px-0"
            component={component}
            key={component.name}
          >
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
      <Cta />
    </>
  );
}
