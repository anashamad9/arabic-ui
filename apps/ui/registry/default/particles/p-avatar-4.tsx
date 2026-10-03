import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export default function Particle() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-md">
        <AvatarImage
          alt="المستخدم"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>ص ش</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-xl">
        <AvatarImage
          alt="المستخدم"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>ص ش</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage
          alt="المستخدم"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>ص ش</AvatarFallback>
      </Avatar>
    </div>
  );
}
