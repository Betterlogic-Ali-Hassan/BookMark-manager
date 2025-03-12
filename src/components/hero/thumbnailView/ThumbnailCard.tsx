// import Badge from "@/components/ui/Badge";
import MoreIconBtn from "@/components/MoreIconBtn";
import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import { Card } from "@/types/TabCardType";
// import ActionsBtns from "../tabCardDetail/ActionsBtns";

interface Props {
  data: Card;
  setActiveTab: (tab: number) => void;
}
const ThumbnailCard = ({ data, setActiveTab }: Props) => {
  const { icon, des, id, path, tags } = data;
  const { toggleCard, showSelectionCard, selectedCards } = useBookmarks();
  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id, path, tags);
    setActiveTab(id);
  };

  const selected = selectedCards.includes(id);
  return (
    <div
      className={cn(
        "h-fit select-none relative",
        showSelectionCard && "cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <a
        href={data.path}
        className={cn(
          "flex flex-col h-[326px] max-w-[296px] bg-card rounded-[16px] gap-y-4 justify-between border border-border hover:border-text  transition duration-200 pb-4 ",
          selected &&
            "hover:bg-selected-hover border-selected-border bg-selected-bg",
          showSelectionCard && "pointer-events-none"
        )}
      >
        <div className='p-6 pb-[5px] w-fit h-auto flex flex-col'>
          <div>
          <img
              src={icon}
              alt="Favicon"
              className="w-[16px] h-[16px]"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null; // Prevent infinite loop
                (e.target as HTMLImageElement).outerHTML = `
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-[16px] h-[16px] text-foreground'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            ></path>
          </svg>
        `;
              }}
            />
            <h1 className='text-[14.5px] font-semibold mt-4  line-clamp-2  -tracking-[0.21px] mb-4 '>
              {des}
            </h1>
            <div className='gap-x-4 flex w-full h-auto items-center'>
              <div className='text-xs leading-[18px] text-[#a8b4cf]'>
                almost 2 years ago
              </div>
              <div className='w-1 h-1 bg-[#a8b4cf] rounded-full'></div>
              <div className='text-xs leading-[18px] text-[#a8b4cf]'>
                1m read
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[286px] w-full max-h-[152px] rounded-[16px] items-end mx-auto -mt-[4px] -mb-[8px] '>
          <img
            src='/thumbnail.jpeg'
            alt='img'
            className='max-w-[280px] w-full h-[152px] p-[6px] rounded-[16px]'
          />
        </div>
      </a>
      <div className='absolute top-1 right-1  '>
        <MoreIconBtn />
      </div>
    </div>
  );
};

export default ThumbnailCard;
