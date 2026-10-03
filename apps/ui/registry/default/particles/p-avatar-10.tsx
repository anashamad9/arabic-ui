import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Badge } from "@/registry/default/ui/badge";

export default function Particle() {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage
          alt="المستخدم"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>ل ت</AvatarFallback>
      </Avatar>
      <Badge
        className="absolute -end-1 -top-1 rounded-full outline-2 outline-background outline-solid"
        size="sm"
      >
        6
      </Badge>
    </div>
  );
}
