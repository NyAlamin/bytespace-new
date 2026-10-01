type CategoryInfoCardProps = {
  title: string;
  courses: string;
  students: string;
  className?: string;
};

export function CategoryInfoCard({
  title,
  courses,
  students,
  className = "",
}: CategoryInfoCardProps) {
  return (
    <div
      className={`flex h-[70px] w-[208px] flex-col justify-center rounded-2xl bg-white p-4 ${className}`}
    >
      <p className="text-[16px] font-medium leading-[1.2] text-shuttle-gray-950">
        {title}
      </p>
      <p className="flex items-center gap-2 text-[12px] leading-[1.6] text-shuttle-gray-400">
        <span>{courses}</span>
        <span aria-hidden="true" className="text-[10px] leading-[1.5]">
          •
        </span>
        <span>{students}</span>
      </p>
    </div>
  );
}