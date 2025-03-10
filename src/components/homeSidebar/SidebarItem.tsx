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
            "flex h-16 w-full items-center justify-center",
            className
          )}
          onClick={handelClick(link ? link : page)}
        >
          <span></span>
          <div
            className={cn(
              " text-text hover:bg-hover  flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
              selected && "bg-card "
            )}
          >
            {icon}
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
