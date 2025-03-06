import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePageContext } from "@/context/PageContext";
import { cn } from "@/lib/utils";
interface Props {
  data: {
    icon: React.ReactNode;
    tooltip: string;
    link: string;
  };
}
const SidebarItem = ({ data }: Props) => {
  const { page, setPage } = usePageContext();
  const { icon, tooltip, link } = data;
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
          className='flex h-16 w-full items-center justify-center'
          onClick={handelClick(link)}
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
