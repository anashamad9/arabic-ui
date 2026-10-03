import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export default function Particle() {
  return (
    <div className="flex -space-x-1.5">
      <Avatar className="size-6 ring-2 ring-background">
        <AvatarImage
          alt="م ١"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=72&h=72&dpr=2&q=80"
        />
        <AvatarFallback>م ١</AvatarFallback>
      </Avatar>
      <Avatar className="size-6 ring-2 ring-background">
        <AvatarImage
          alt="م ٢"
          src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=72&h=72&dpr=2&q=80"
        />
        <AvatarFallback>م ٢</AvatarFallback>
      </Avatar>
      <Avatar className="size-6 ring-2 ring-background">
        <AvatarImage
          alt="م ٣"
          src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=72&h=72&dpr=2&q=80"
        />
        <AvatarFallback>م ٣</AvatarFallback>
      </Avatar>
    </div>
  );
}
