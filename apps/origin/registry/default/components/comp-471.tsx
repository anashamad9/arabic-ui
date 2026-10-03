import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

const programmingLanguages = [
  {
    developer: "بريندان أيخ",
    extension: ".js",
    id: "1",
    latestVersion: "ES2021",
    name: "جافا سكريبت",
    paradigm: "نموذج متعدد",
    popularity: "عالية",
    releaseYear: "1995",
    typing: "ديناميكي",
  },
  {
    developer: "غويدو فان روسوم",
    extension: ".py",
    id: "2",
    latestVersion: "3.10",
    name: "بايثون",
    paradigm: "نموذج متعدد",
    popularity: "عالية",
    releaseYear: "1991",
    typing: "ديناميكي",
  },
  {
    developer: "جيمس جوسلينج",
    extension: ".java",
    id: "3",
    latestVersion: "17",
    name: "جافا",
    paradigm: "كائني المنحى",
    popularity: "عالية",
    releaseYear: "1995",
    typing: "ثابت",
  },
  {
    developer: "بيارن ستروستروب",
    extension: ".cpp",
    id: "4",
    latestVersion: "C++20",
    name: "+++++++",
    paradigm: "نموذج متعدد",
    popularity: "عالية",
    releaseYear: "1985",
    typing: "ثابت",
  },
  {
    developer: "يوكيهيرو ماتسوموتو",
    extension: ".rb",
    id: "5",
    latestVersion: "3.0",
    name: "روبية",
    paradigm: "نموذج متعدد",
    popularity: "منخفضة",
    releaseYear: "1995",
    typing: "ديناميكي",
  },
];

export default function Component() {
  return (
    <div>
      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 py-2">الاسم</TableHead>
              <TableHead className="h-9 py-2">سنة الإصدار</TableHead>
              <TableHead className="h-9 py-2">المطوّر</TableHead>
              <TableHead className="h-9 py-2">الكتابة</TableHead>
              <TableHead className="h-9 py-2">نموذج</TableHead>
              <TableHead className="h-9 py-2">تمديد تمديد التمديد</TableHead>
              <TableHead className="h-9 py-2">أحدث إصدار</TableHead>
              <TableHead className="h-9 py-2">شعبية</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programmingLanguages.map((language) => (
              <TableRow key={language.id}>
                <TableCell className="py-2 font-medium">
                  {language.name}
                </TableCell>
                <TableCell className="py-2">{language.releaseYear}</TableCell>
                <TableCell className="py-2">{language.developer}</TableCell>
                <TableCell className="py-2">{language.typing}</TableCell>
                <TableCell className="py-2">{language.paradigm}</TableCell>
                <TableCell className="py-2">{language.extension}</TableCell>
                <TableCell className="py-2">{language.latestVersion}</TableCell>
                <TableCell className="py-2">{language.popularity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        طاولة كثيفة
      </p>
    </div>
  );
}
