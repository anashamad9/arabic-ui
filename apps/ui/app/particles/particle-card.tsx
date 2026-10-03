import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cache } from "react";
import { Index } from "@/registry/__index__";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerPopup,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";
import { ParticleCardContainer } from "./particle-card-container";
import { ComponentSource } from "@/components/component-source";
import { getRegistryItem } from "@/lib/registry";

const getCachedRegistryItem = cache(async (name: string) => {
  return await getRegistryItem(name);
});

function ParticleRenderer({ name }: { name: string }) {
  const item = Index[name];
  const Component = item?.component;

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        مكوّن {name} لم يتم العثور عليها
      </p>
    );
  }

  return <Component currentPage={1} totalPages={10} totalResults={100} />;
}

export async function ParticleCard({
  name,
  className,
  colSpan,
}: {
  name: string;
  className?: string;
  colSpan?: number;
}) {
  const particle = await getCachedRegistryItem(name);

  if (!particle) {
    return null;
  }

  return (
    <ParticleCardContainer
      className={className}
      colSpan={colSpan}
      footer={
        <>
          <p className="flex flex-1 gap-1 truncate text-muted-foreground text-xs">
            <HugeiconsIcon
              className="size-3 h-lh shrink-0"
              icon={InformationCircleIcon}
              strokeWidth={2}
            />
            <span className="truncate">{particle.description}</span>
          </p>
          <div className="flex items-center gap-1.5">
            {process.env.NODE_ENV === "development" && (
              <Button
                className="text-xs"
                disabled
                size="sm"
                title="اسم الأمثلة"
                variant="outline"
              >
                {particle.name}
              </Button>
            )}
            <Drawer position="right">
              <DrawerTrigger
                render={
                  <Button className="text-sm" size="sm" variant="outline" />
                }
              >
                عرض الكود
              </DrawerTrigger>
              <DrawerPopup
                className="max-w-4xl"
                showBar
                showCloseButton={false}
                variant="straight"
              >
                <DrawerContent className="flex flex-1 flex-col overflow-hidden p-6">
                  <div className="flex h-full flex-1 flex-col overflow-hidden">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="mt-6 mb-4 font-heading font-semibold text-xl">
                        الكود
                      </h2>
                    </div>
                    <ComponentSource
                      className="flex min-h-0 flex-1 flex-col *:data-rehype-pretty-code-figure:mt-0"
                      collapsible={false}
                      name={name}
                    />
                  </div>
                </DrawerContent>
              </DrawerPopup>
            </Drawer>
          </div>
        </>
      }
    >
      <div data-particle data-slot="preview">
        <ParticleRenderer name={name} />
      </div>
    </ParticleCardContainer>
  );
}
