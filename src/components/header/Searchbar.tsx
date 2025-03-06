import AddNewCardBtn from "./AddNewCardBtn";
import { useBookmarks } from "@/context/BookmarkContext";
// import { DatePicker } from "./DatePicker";
import { usePageContext } from "@/context/PageContext";

const Searchbar = () => {
  const { page, setPage } = usePageContext();
  const { setShowSelectionCard } = useBookmarks();
  const handleShowSelectionCard = () => {
    setShowSelectionCard(false);
    setPage("search");
  };
  return (
    <div className='hidden lg:flex gap-4 justify-between items-center py-2  '>
      <div className='flex gap-2 grow'>
        <button
          onClick={handleShowSelectionCard}
          className='grow flex items-center gap-2  w-full rounded border-0 bg-card  py-1.5 px-4 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-brand text-sm leading-6 whitespace-nowrap text-foreground min-h-[40px]'
        >
          <svg
            className='h-5 w-5 text-foreground'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span>Search</span>
          <span className='ml-auto inline-block'>Ctrl + K</span>
        </button>
        {page === "home" ? <AddNewCardBtn /> : null}
        {/* <DatePicker /> */}
      </div>
    </div>
  );
};

export default Searchbar;
