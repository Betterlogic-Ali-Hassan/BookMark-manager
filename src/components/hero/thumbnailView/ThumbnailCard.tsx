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
          "flex flex-col h-[326px] max-w-[296px] bg-white dark:bg-[#1a1e28] rounded-[16px] gap-y-4 justify-between border border-[#d4d4d4] hover:border-[#999] dark:border-[#a8b3cf44] dark:hover:border-[#a8b3cf88] transition duration-200 pb-4 ",
          selected && "hover:bg-blue-200/20 border-blue-300/50 bg-blue-200/10",
          showSelectionCard && "pointer-events-none"
        )}
      >
        <div className='p-6 pb-[5px] w-fit h-auto flex flex-col'>
          <div>
            <img
              src={icon}
              alt='icon'
              className='h-[24px] w-[24px] rounded-full border-[#444] dark:border-[#ffffff38] border'
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
