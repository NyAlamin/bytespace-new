type RevenueCardProps = {
  className?: string;
};

export function RevenueCard({ className = "" }: RevenueCardProps) {
  return (
    <div
      className={`flex h-[119px] w-[232px] flex-col gap-2 rounded-2xl bg-persian-blue-800 p-4 backdrop-blur-[10px] ${className}`}
    >
      <div className="w-[101px]">
        <p className="text-[16px] font-medium leading-[1.2] text-shuttle-gray-50">
          Total Revenue
        </p>
        <p className="text-[10px] leading-[1.2] text-shuttle-gray-50">
          July 1-28
        </p>
      </div>
      <div className="flex w-[200px] items-center justify-between gap-2">
        <span className="font-heading text-[24px] font-semibold leading-8 text-shuttle-gray-50">
          $120.29
        </span>
        <span className="flex h-6 w-[38px] items-center justify-center rounded-3xl bg-electric-lime-500 text-[10px] font-medium leading-5 text-shuttle-gray-950">
          +12$
        </span>
      </div>
      <div className="h-2 w-[200px] rounded-3xl bg-white">
        <div className="h-2 w-[112px] rounded-3xl bg-electric-lime-400" />
      </div>
    </div>
  );
}