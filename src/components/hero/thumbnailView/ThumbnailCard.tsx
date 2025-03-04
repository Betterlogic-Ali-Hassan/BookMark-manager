// import Badge from "@/components/ui/Badge";
import { Card } from "@/types/TabCardType";
// import ActionsBtns from "../tabCardDetail/ActionsBtns";

interface Props {
  data: Card;
}
const ThumbnailCard = ({ data }: Props) => {
  const { icon } = data;
  return (
    <div className='h-fit'>
      <a
        href={data.path}
        className='flex flex-col h-[326px] w-[296px] bg-white dark:bg-[#1a1e28] rounded-[16px] gap-y-4 border border-[#d4d4d4] hover:border-[#999] dark:border-[#a8b3cf44] dark:hover:border-[#a8b3cf88] transition duration-200'
      >
        <div className='p-6 pb-[5px] w-fit h-auto flex flex-col'>
          <div>
            <img
              src={icon}
              alt='icon'
              className='h-[24px] w-[24px] rounded-full border-[#444] dark:border-[#ffffff38] border'
            />
            <h1 className='text-base font-semibold mt-4 h-[60px] flex line-clamp-3 -tracking-[0.21px] mb-[10.72px]'>
              MicroStrategy Nearly Even on Bitcoin Buys After Latest Rally
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
        <div className='max-w-[286px] w-full max-h-[152px] rounded-[16px] items-end mx-auto -mt-[4px] -mb-[8px]'>
          <img
            src='/thumbnail.jpeg'
            alt='img'
            className='max-w-[280px] w-full h-[152px] p-[3px] rounded-[16px]'
          />
        </div>
      </a>
    </div>
  );
};

export default ThumbnailCard;
