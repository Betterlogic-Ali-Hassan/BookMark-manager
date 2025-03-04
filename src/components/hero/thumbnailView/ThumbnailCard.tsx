// import Badge from "@/components/ui/Badge";
import { Card } from "@/types/TabCardType";
// import ActionsBtns from "../tabCardDetail/ActionsBtns";

interface Props {
  data: Card;
}
const ThumbnailCard = ({ data }: Props) => {
  return (
    // <div className=' bg-white   h-fit rounded-[16px] border border-[#d4d4d4] flex flex-col justify-between hover:border-[#999] transition duration-200'>
    //   <a className='p-6' href={data.path}>
    //     <div>
    //       <div className='h-[36px] w-[36px] flex items-center justify-center rounded-full border border-black'>
    //         <img
    //           src={data.icon}
    //           alt={data.title}
    //           className='h-[22px] w-[22px]'
    //         />
    //       </div>
    //       <h1 className='text-base font-semibold my-3 '>{data.title}</h1>
    //       <p className='text-sm mb-2'>{data.des}</p>
    //       {/* <div className='flex items-center gap-2 flex-wrap'>
    //         {data.tags.map((tag) => (
    //           <Badge text={tag.name} key={tag.id} />
    //         ))}
    //       </div> */}
    //     </div>
    //   </a>
    //   <div>
    //     <div className='mb-3 px-3'>
    //       <img
    //         src='https://economictimes.indiatimes.com/thumb/msid-95395602,width-1599,height-1066,resizemode-4,imgsize-39490/file-photo-the-company-logo-for-salesforce-com-is-displayed-on-the-salesforce-tower-in-new-york.jpg?from=mdr'
    //         alt='thumbnailImage'
    //         className='rounded-[16px]'
    //       />
    //     </div>
    //     {/* <div className='border-t'>
    //       <div className='px-6 py-2 '>
    //         <ActionsBtns url={data.path} />
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
    <div className='h-fit'>
      <a
        href={data.path}
        className='flex flex-col h-[326px] w-[296px] bg-[#1a1e28] rounded-[16px] gap-y-4 border border-[#a8b3cf44] hover:border-[#a8b3cf88] transition duration-200'
      >
        <div className='p-6 pb-[5px] w-fit h-auto flex flex-col'>
          <div>
            <img
              src={data.icon}
              alt='icon'
              className='h-[24px] w-[24px] rounded-full border-[#ffffff38] border'
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
