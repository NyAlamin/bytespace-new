type CategoryPillsProps = {
  rows: readonly (readonly string[])[];
  activeCategory: string;
  moreLabel?: string;
};

export function CategoryPills({
  rows,
  activeCategory,
  moreLabel = "+ More",
}: CategoryPillsProps) {
  return (
    <div className="flex flex-col items-center gap-y-[21px]">
      {rows.map((row, rowIndex) => (
        <ul key={row[0]} className="flex items-center gap-4">
          {row.map((category) => {
            const isActive = category === activeCategory;
            return (
              <li key={category}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  className={`flex h-[43px] items-center justify-center rounded-3xl px-4 text-[16px] font-medium leading-[1.2] ${
                    isActive
                      ? "bg-electric-lime-400 text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-700"
                  }`}
                >
                  {category}
                </button>
              </li>
            );
          })}
          {rowIndex === rows.length - 1 && (
            <li>
              <button
                type="button"
                className="text-[16px] font-medium leading-[1.2] text-persian-blue-800"
              >
                {moreLabel}
              </button>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}