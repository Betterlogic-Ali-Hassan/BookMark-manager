import { cn } from "@/lib/utils";
import type { DateItem } from "@/types/date-slider";

interface DateButtonProps {
  dateItem: DateItem;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

const DateSliderItem = ({
  dateItem,
  isSelected,
  onSelect,
}: DateButtonProps) => {
  const { date, label, subLabel } = dateItem;
  const handleSelectedItem = (date: Date) => {
    return () => {
      onSelect(date);
    };
  };
  return (
    <div
      className={cn(
        "text-xs flex items-center flex-col justify-center leading-[1] pt-[7px] pb-2 px-2 capitalize border-neutral-300 dark:border-neutral-800 lg:w-[83px] w-[73px] h-[44px] hover:bg-black dark:bg-[#111] dark:hover:bg-white transition duration-200 bg-white rounded cursor-pointer hover:text-white dark:hover:text-black",
        isSelected && "bg-black text-white dark:bg-white dark:text-black"
      )}
      onClick={handleSelectedItem(date)}
    >
      <strong>{label}</strong>
      <span className='text-[10px] mt-1'>{subLabel}</span>
    </div>
  );
};

export default DateSliderItem;
