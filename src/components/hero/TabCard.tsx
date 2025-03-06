import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import { Card } from "@/types/TabCardType";
import MoreIconBtn from "../MoreIconBtn";
import { usePageContext } from "@/context/PageContext";

interface Props {
  data: Card;
  setActiveTab: (tab: number) => void;
}
const TabCard = ({ data, setActiveTab }: Props) => {
  const { id, path, tags, icon, title } = data;
  const { page } = usePageContext();
  const { toggleCard, showSelectionCard, selectedCards } = useBookmarks();
  const today = new Date().toDateString();
  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id, path, tags);
    setActiveTab(id);
  };

  const selected = selectedCards.includes(data.id);
  return (
    <div
      className={cn(
        " bg-white border-transparent dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-neutral-100  bookmark overflow-hidden select-none w-full relative border block rounded-md group",
        selected && "hover:bg-blue-200/20 border-blue-300/50 bg-blue-200/10 ",
        showSelectionCard && "cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <div className='flex items-center'>
        <div className='flex items-center w-full'>
          <a
            target='_blank'
            className={cn(
              "focus:outline-none focus-visible:ring-1 ring-inset    ring-blue-500 dark:ring-neutral-300rounded truncate grow flex items-center gap-3 px-5 lg:px-4 h-14 lg:h-12",
              showSelectionCard && "pointer-events-none",
              page === "history" && "max-w-[280px] min-w-[280px]"
            )}
            href={path}
          >
            <object
              type='image/png'
              className='w-[16px] h-[16px] flex-none rounded-sm overflow-hidden'
              data={icon}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-[16px] h-[16px] text-slate-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                ></path>
              </svg>
            </object>
            <div className='truncate text-sm font-medium text-neutral-900 dark:text-white pr-8 max-w-[150px]'>
              {title}
            </div>
          </a>
          {page === "history" && (
            <>
              <div className='pr-6 text-xs opacity-50  max-w-[300px]  min-w-[300px] tracking-wide'>
                <span className='truncate max-w-[170px] block'>{path}</span>
              </div>
              <div className='pr-6 text-xs opacity-50 truncate max-w-[140px] min-w-[140px] tracking-wide'>
                {today}
              </div>
            </>
          )}
        </div>
        <MoreIconBtn className='opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-neutral-50 dark:hover:bg-white/5' />
      </div>
    </div>
  );
};

export default TabCard;
