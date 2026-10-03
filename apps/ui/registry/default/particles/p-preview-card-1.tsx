import { CornerUpLeftIcon, StarIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@/registry/default/ui/preview-card";

export default function Particle() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<Button variant="ghost" />}>
        COSS UI/Arabic
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-sm">COSS UI/Arabic</h4>
            <p className="text-muted-foreground text-sm">
              مكونات مصممة بشكل جميل يمكنك نسخها ولصقها في تطبيقاتك.
            </p>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <div className="flex items-center gap-1">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-blue-500"
              />
              <span>تايب سكريبت</span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="size-3" />
              <span>٥٨٫٢ ألف</span>
            </div>
            <div className="flex items-center gap-1">
              <CornerUpLeftIcon className="size-3" />
              <span>٥٫١ ألف</span>
            </div>
          </div>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
