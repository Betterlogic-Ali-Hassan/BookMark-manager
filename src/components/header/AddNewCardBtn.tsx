import { useBookmarks } from "@/context/BookmarkContext";
import { Link } from "react-router-dom";

const AddNewCardBtn = () => {
  const { setShowCardDetail, setShowSelectionCard } = useBookmarks();
  const handleLinkClick = () => {
    setShowCardDetail(false);
    setShowSelectionCard(false);
  };
  return (
    <Link
      onClick={handleLinkClick}
      to='/new'
      className='rounded bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm dark:shadow-none ring-1 dark:ring-0 ring-inset ring-neutral-300 hover:bg-neutral-50 disabled:hover:bg-white dark:hover:bg-white/20 dark:disabled:hover:bg-white/10 disabled:cursor-not-allowed dark:text-neutral-200 dark:hover:text-white whitespace-nowrap flex items-center'
    >
      <svg
        className='-ml-0.5 mr-1.5 h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z'></path>
      </svg>
      New
    </Link>
  );
};

export default AddNewCardBtn;
