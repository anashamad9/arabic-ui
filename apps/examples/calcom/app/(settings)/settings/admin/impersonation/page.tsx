import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { Field, FieldDescription } from "@coss/ui/components/field";
import { Group } from "@coss/ui/components/group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@coss/ui/components/input-group";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

const RECENT_IMPERSONATIONS = [
  {
    impersonatedAt: "2/23/2026 5:21:37 PM",
    user: "teampro",
  },
  {
    impersonatedAt: "2/23/2026 5:21:22 PM",
    user: "platformadmin2024!",
  },
];

export default function AdminImpersonationPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="مسؤول">
          <AppHeaderDescription>انتحال الشخصية</AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>انتحال شخصية المستخدم</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel>
              <Field>
                <Group
                  aria-label="انتحال شخصية المستخدم"
                  className="w-full gap-2"
                >
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <InputGroupText>http://localhost:3000/</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput
                      aria-label="المستخدم لانتحال شخصية"
                      className="*:[input]:ps-0!"
                      placeholder="اسم المستخدم"
                      type="text"
                    />
                  </InputGroup>
                  <div>
                    <Button>انتحال شخصية</Button>
                  </div>
                </Group>
                <FieldDescription>
                  تتم مراجعة جميع استخدامات هذه الميزة.
                </FieldDescription>
              </Field>
            </CardPanel>
          </Card>
        </CardFrame>

        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>الانتحال الأخير</CardFrameTitle>
          </CardFrameHeader>
          <Card>
            <CardPanel className="p-0">
              {RECENT_IMPERSONATIONS.map((entry) => (
                <ListItem key={entry.user}>
                  <ListItemContent>
                    <ListItemHeader>
                      <ListItemTitle>{entry.user}</ListItemTitle>
                      <ListItemDescription>
                        انتحال شخصية في {entry.impersonatedAt}
                      </ListItemDescription>
                    </ListItemHeader>
                  </ListItemContent>
                  <ListItemActions>
                    <Button variant="outline">انتحال شخصية سريعة</Button>
                  </ListItemActions>
                </ListItem>
              ))}
            </CardPanel>
          </Card>
        </CardFrame>
      </div>
    </>
  );
}
