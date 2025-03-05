import { cn } from "@/lib/utils";

interface Props {
  text: number;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}

const HoursBall = ({ text, isSelected, isDisabled, onSelect }: Props) => {
  return (
    <div
      className={cn(
        "max-w-[25px] flex items-center justify-center transition duration-200 cursor-pointer min-w-[25px] h-[25px] rounded-full bg-white dark:bg-neutral-900 dark:hover:bg-neutral-900 hover:bg-neutral-100 text-[11px]",
        isSelected &&
          "bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white  hover:bg-black",
        isDisabled &&
          "opacity-50 cursor-not-allowed hover:bg-white dark:hover:bg-[#111] hover:text-black dark:hover:text-white"
      )}
      onClick={!isDisabled ? onSelect : undefined}
    >
      {text}
    </div>
  );
};

export default HoursBall;
