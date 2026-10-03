import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export default function Component() {
  return (
    <Avatar>
      <AvatarImage alt="ليلى حسين" src="/origin/avatar-80-07.jpg" />
      <AvatarFallback>ل ح</AvatarFallback>
    </Avatar>
  );
}
