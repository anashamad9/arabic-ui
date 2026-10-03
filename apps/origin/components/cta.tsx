import { Button } from "@/registry/default/ui/button";

export default function Cta() {
  return (
    <div className="mt-16 text-center md:mt-20">
      <h2 className="mb-6 font-heading text-3xl/[1.1] text-foreground">
        ألم تجد ما كنت تبحث عنه؟
      </h2>
      <Button asChild className="rounded-full">
        <a
          href="https://github.com/cosscom/coss/discussions/categories/suggestions"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-primary-foreground">اقتراح عنصر</span>
        </a>
      </Button>
    </div>
  );
}
