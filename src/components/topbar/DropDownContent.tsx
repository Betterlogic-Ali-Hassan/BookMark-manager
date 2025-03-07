import { useBookmarks } from "@/context/BookmarkContext";
import SelectIcon from "../svgs/SelectIcon";
import { CrossIcon } from "lucide-react";

const DropDownContent = () => {
  const {
    setShowSelectionCard,
    selectAll,
    setShowCardDetail,
    clearSelection,
    showSelectionCard,
  } = useBookmarks();
  const handleSelectAll = () => {
    setShowSelectionCard(true);
    selectAll();
    setShowCardDetail(false);
  };
  const handleShowSelectionCard = () => {
    setShowSelectionCard(true);
    setShowCardDetail(false);
  };
  const handleCloseSelectionCard = () => {
    setShowSelectionCard(false);
    clearSelection();
  };
  return (
    <div className='absolute right-2 top-10 lg:right-1 lg:top-7 z-30 w-48 origin-top-right rounded bg-card  py-1 shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none'>
      {!showSelectionCard && (
        <button
          className='px-4 py-2 text-sm text-text  text-start w-full flex items-center gap-3 hover:bg-hover'
          onClick={handleShowSelectionCard}
        >
          <SelectIcon />
          <span>Select multiple</span>
        </button>
      )}

      <button
        className='px-4 py-2 text-sm text-text  text-start w-full flex items-center gap-3 hover:bg-hover'
        onClick={handleSelectAll}
      >
        <SelectIcon />
        <span>Select all</span>
      </button>
      {showSelectionCard && (
        <button
          className='px-4 py-2 text-sm text-text  text-start w-full flex items-center gap-3 hover:bg-hover'
          onClick={handleCloseSelectionCard}
        >
          <CrossIcon />
          <span>Cancel selection</span>
        </button>
      )}
    </div>
  );
};

export default DropDownContent;
