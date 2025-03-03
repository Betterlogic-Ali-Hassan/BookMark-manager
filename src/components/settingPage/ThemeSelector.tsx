import { cn } from "@/lib/utils";
import { useTheme } from "../theme-provider";

interface Props {
  label: string;
  des: string;
  value: "light" | "dark" | "system";
}
const ThemeSelector = ({ label, des, value }: Props) => {
  const { theme, setTheme } = useTheme();
  const isSelected = theme === value;
  const handleChangeTheme = () => {
    setTheme(value);
  };
  return (
    <label
      htmlFor={label}
      className={cn(
        "relative cursor-pointer flex items-start border rounded-md pt-2 pb-2.5 px-4 border-transparent hover:bg-neutral-50 dark:hover:bg-white/5",
        isSelected &&
          "border-blue-600 dark:border-blue-400 bg-neutral-50 dark:bg-white/5"
      )}
    >
      <div className='flex h-6 items-center'>
        <input
          id={label}
          aria-describedby='system-description'
          name='theme'
          type='radio'
          checked={isSelected}
          className='h-4 w-4 border-neutral-300 text-blue-600 dark:text-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400'
          value={value}
          onChange={handleChangeTheme}
        />
      </div>
      <div className='ml-3 text-sm leading-6'>
        <div className='font-medium text-neutral-900 dark:text-white'>
          {label}
        </div>
        <div
          id='system-description'
          className='text-neutral-500 dark:text-neutral-400'
        >
          {des}
        </div>
      </div>
    </label>
  );
};

export default ThemeSelector;
