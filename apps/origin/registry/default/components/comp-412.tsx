export default function Component() {
  return (
    <div className="flex items-center rounded-full border bg-background p-1 shadow-sm">
      <div className="flex -space-x-1.5">
        <img
          alt="الصورة الشخصية الأولى"
          className="rounded-full ring-1 ring-background"
          height={20}
          src="/origin/avatar-80-03.jpg"
          width={20}
        />
        <img
          alt="الصورة الشخصية الثانية"
          className="rounded-full ring-1 ring-background"
          height={20}
          src="/origin/avatar-80-04.jpg"
          width={20}
        />
        <img
          alt="الصورة الشخصية الثالثة"
          className="rounded-full ring-1 ring-background"
          height={20}
          src="/origin/avatar-80-05.jpg"
          width={20}
        />
        <img
          alt="الصورة الشخصية الرابعة"
          className="rounded-full ring-1 ring-background"
          height={20}
          src="/origin/avatar-80-06.jpg"
          width={20}
        />
      </div>
      <p className="px-2 text-muted-foreground text-xs">
        موثوق به{" "}
        <strong className="font-medium text-foreground">أكثر من ٦٠ ألف</strong>{" "}
        المطورين.
      </p>
    </div>
  );
}
