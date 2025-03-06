import AddNewCardBtn from "./AddNewCardBtn";
import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";
import SearchIcon from "../svgs/SearchIcon";

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
          <SearchIcon />
          <span>Search</span>
          <span className='ml-auto inline-block'>Ctrl + K</span>
        </button>
        {page === "home" ? <AddNewCardBtn /> : null}
      </div>
    </div>
  );
};

export default Searchbar;
