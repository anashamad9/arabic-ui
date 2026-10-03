"use client";

import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { EmptyMedia } from "@coss/ui/components/empty";
import { DownloadIcon, FileTextIcon, LockIcon } from "lucide-react";
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

interface ComplianceDocument {
  id: string;
  name: string;
  description: string;
  url: string;
  restricted: boolean;
}

const DOCUMENT_SECTIONS = [
  {
    documents: [
      {
        description: "عرض وتنزيل DPA لـ كال",
        id: "dpa",
        name: "اتفاقية حماية البيانات",
        restricted: false,
        url: "https://go.cal.com/dpa",
      },
    ],
    title: "خصوصية البيانات",
  },
  {
    documents: [
      {
        description: "تقرير مراجعة الحسابات من النوع الثاني",
        id: "soc2-report",
        name: "تقرير اللجنة الفرعية 2",
        restricted: true,
        url: "#",
      },
      {
        description: "ISO/IEC 27001:2022 certificate",
        id: "iso27001-cert",
        name: "شهادة ISO 27001",
        restricted: true,
        url: "#",
      },
    ],
    title: "تقارير الامتثال",
  },
  {
    documents: [
      {
        description: "أحدث نتائج اختبار اختراق الطرف الثالث",
        id: "pentest-report",
        name: "تقرير اختبار الاختراق",
        restricted: true,
        url: "#",
      },
    ],
    title: "وثائق أخرى",
  },
] as const satisfies readonly {
  title: string;
  documents: readonly ComplianceDocument[];
}[];

export function ComplianceDocuments() {
  const hasRestrictedAccess = false;

  return (
    <div className="flex flex-col gap-6">
      {DOCUMENT_SECTIONS.map((section) => (
        <CardFrame key={section.title}>
          <CardFrameHeader>
            <CardFrameTitle>{section.title}</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel className="p-0">
              {section.documents.map((doc) => {
                const hasAccess = !doc.restricted || hasRestrictedAccess;
                return (
                  <ListItem key={doc.id}>
                    <EmptyMedia className="m-0 self-start" variant="icon">
                      <FileTextIcon />
                    </EmptyMedia>
                    <div className="flex flex-1 gap-4 max-sm:flex-col">
                      <ListItemContent>
                        <ListItemHeader>
                          <div className="flex items-start gap-4">
                            <div>
                              <ListItemTitle>{doc.name}</ListItemTitle>
                              <ListItemDescription>
                                {doc.description}
                              </ListItemDescription>
                            </div>
                          </div>
                        </ListItemHeader>
                      </ListItemContent>
                      <ListItemActions>
                        <Button disabled={!hasAccess} variant="outline">
                          {hasAccess ? <DownloadIcon /> : <LockIcon />}
                          {hasAccess ? "تنزيل" : "الترقية إلى الوصول"}
                        </Button>
                      </ListItemActions>
                    </div>
                  </ListItem>
                );
              })}
            </CardPanel>
          </Card>
        </CardFrame>
      ))}
    </div>
  );
}
