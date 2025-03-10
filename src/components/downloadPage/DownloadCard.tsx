import { useBookmarkItem } from "@/hooks/use-bookmark-item";
import { Card } from "@/types/TabCardType";
interface DownloadCardProps {
  data: Card;
  setActiveTab: (tab: number) => void;
}
const DownloadCard = ({ data, setActiveTab }: DownloadCardProps) => {
  const { title, icon, path } = useBookmarkItem(data, setActiveTab);
  return (
    <div className='p-6 border-border border group rounded-lg bg-card flex gap-6 mb-4 relative cursor-pointer'>
      <div className='h-[36px] w-[36px]'>
        <img src={icon} alt={title} className='w-full h-full mb-1' />
      </div>
      <div className='grow'>
        <h3 className='font-semibold text-text'>{title}</h3>
        <a
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm hover:underline text-brand hover:text-brand-hover'
          onClick={(e) => e.stopPropagation()}
        >
          {path}
        </a>
        <button className='btn rounded mt-4'>Show folder</button>
      </div>
    </div>
  );
};

export default DownloadCard;
