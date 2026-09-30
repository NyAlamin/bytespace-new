type YearToDateCardProps = {
  className?: string;
};

export function YearToDateCard({ className = "" }: YearToDateCardProps) {
  return (
    <div
      className={`flex h-[135px] w-[134px] flex-col items-start gap-2 rounded-2xl bg-persian-blue-800 p-4 backdrop-blur-[10px] ${className}`}
    >
      <div>
        <p className="text-[16px] font-medium leading-[1.2] text-shuttle-gray-50">
          Year to Date
        </p>
        <p className="text-[10px] leading-[1.2] text-shuttle-gray-50">2023</p>
      </div>
      <p className="font-heading text-[24px] font-semibold leading-8 text-shuttle-gray-50">
        $1,200.38
      </p>
      <span className="flex h-6 w-[38px] items-center justify-center rounded-3xl bg-electric-lime-500 text-[10px] font-medium leading-5 text-shuttle-gray-950">
        +12$
      </span>
    </div>
  );
}