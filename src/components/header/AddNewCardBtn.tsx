import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";
import Button from "../ui/button";
import { PlusIcon } from "../svgs/PlusIcon";

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
      <PlusIcon className='h-5 w-5 text-text mr-2' />
      New
    </Button>
  );
};

export default AddNewCardBtn;
