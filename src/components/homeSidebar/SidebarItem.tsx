import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
interface Props {
  data: {
    icon: React.ReactNode;
    tooltip: string;
  };
}
const SidebarItem = ({ data }: Props) => {
  const { icon, tooltip } = data;
  const selected = tooltip === "Dashboards";
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className='flex h-16 w-full items-center justify-center'>
          <span></span>
          <button
            type='button'
            className={cn(
              " text-primary-500 dark:bg-primary-500/10 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
              selected && "bg-white dark:bg-neutral-700"
            )}
          >
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent
          side='right'
          className='bg-black dark:bg-white text-white dark:text-black'
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarItem;
