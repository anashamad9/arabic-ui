import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@coss/ui/components/input-group";
import { PlusIcon, SearchIcon } from "lucide-react";
import { AddEventTypeDialog } from "./add-event-type-dialog";
import { EventTypesList } from "./event-types-list";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function Page() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="أنواع الأحداث">
          <AppHeaderDescription>
            قم بإنشاء أحداث لمشاركتها للأشخاص لحجزها في التقويم الخاص بك.
          </AppHeaderDescription>
        </AppHeaderContent>
        <AppHeaderActions className="max-md:hidden">
          <InputGroup>
            <InputGroupInput
              aria-label="بحث"
              placeholder="ابحث…"
              type="search"
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <AddEventTypeDialog>
            <PlusIcon className="-ms-1" />
            جديد
          </AddEventTypeDialog>
        </AppHeaderActions>
      </AppHeader>

      <EventTypesList />
    </>
  );
}
