import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePageContext } from "@/context/PageContext";
import { cn } from "@/lib/utils";
interface Props {
  icon: React.ReactNode;
  tooltip: string;
  link?: string;
  className?: string;
}
const SidebarItem = ({ icon, tooltip, link, className }: Props) => {
  const { page, setPage } = usePageContext();
  const selected = page === link;
  const handelClick = (link: string) => {
    return () => {
      setPage(link);
    };
  };
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-[14px] p-0 transition-colors ",
            "hover:bg-[#27272a] hover:text-default-foreground",
            "focus:bg-default/40 focus:text-default-foreground outline-none",
            selected && "bg-[#27272a]",
            className
          )}
          onClick={handelClick(link ? link : page)}
        >
          <div className='flex w-full items-center justify-center'>
            <div>{icon}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent side='right' className='bg-text  text-card '>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarItem;
