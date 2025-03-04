import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}
const MoreIconBtn = ({ className }: Props) => {
  const { showSelectionCard, setShowCardDetail } = useBookmarks();
  const handleCardDetail = () => {
    setShowCardDetail(true);
  };
  return (
    <>
      {!showSelectionCard && (
        <button
          className={cn(
            " focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-300 rounded-r px-4 lg:px-3 h-14 lg:h-12 text-neutral-400 hover:text-neutral-700 dark:hover:text-white   ",
            className
          )}
          onClick={handleCardDetail}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default MoreIconBtn;
