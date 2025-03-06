import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";
import Button from "../ui/button";

const AddNewCardBtn = () => {
  const { setPage } = usePageContext();
  const { setShowCardDetail, setShowSelectionCard } = useBookmarks();
  const handleLinkClick = () => {
    setShowCardDetail(false);
    setShowSelectionCard(false);
    setPage("new");
  };
  return (
    <Button onClick={handleLinkClick}>
      <svg
        className='-ml-0.5 mr-1.5 h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z'></path>
      </svg>
      New
    </Button>
  );
};

export default AddNewCardBtn;
