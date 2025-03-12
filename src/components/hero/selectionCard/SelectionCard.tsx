import AlertDialogBox from "@/components/AlertDialogBox";
import CopytoClipboard from "@/components/svgs/CopytoClipboard";
import CrossIcon from "@/components/svgs/CrossIcon";
import OpenIcon from "@/components/svgs/OpenIcon";
import TagAlertBox from "@/components/TagAlertBox";
import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";

import { cn, useHandleDelete } from "@/lib/utils";
import { toast } from "react-toastify";

const SelectionCard = () => {
  const {
    selectedCardUrls,
    clearSelection,
    setShowSelectionCard,
    selectedCards,
    setSelectedCards,
    showSelectionCard,
  } = useBookmarks();
  const { page } = usePageContext();
  const handleCopy = () => {
    if ((selectedCardUrls?.length || 0) > 0) {
      const urlsToCopy = selectedCardUrls && selectedCardUrls.join("\n");
      navigator.clipboard.writeText(urlsToCopy ? urlsToCopy : "");
      toast.success("URLs Copied");
    } else {
      toast.error("No URL Selected");
    }
  };

  const handleOpenLinks = () => {
    if ((selectedCardUrls?.length || 0) > 0) {
      (selectedCardUrls || []).forEach((url) => window.open(url, "_blank"));
    } else {
      toast.error("No URL Selected");
    }
  };
  const handleCancel = () => {
    clearSelection();
    setShowSelectionCard(false);
  };

  const isDisabled = selectedCards.length === 0;
  const notShowEditBtn = page === "history";
  const handleDelete = useHandleDelete();

  const onDelete = () => {
    setShowSelectionCard(false);
    setSelectedCards([]);
    handleDelete(selectedCards);
  };
  return (
    <div
      className={cn(
        "hidden lg:block relative  opacity-0 translate-x-[100%] transition-all duration-300",
        showSelectionCard && "opacity-100 translate-x-0"
      )}
    >
      <div className='sticky top-0 left-0 w-full max-w-md min-w-72 text-white ml-2'>
        <div>
          <div className='text-sm flex flex-col items-start text-text z-30 rounded-md bg-card overflow-hidden'>
            <div className='rounded-t-md py-2.5 px-4 font-medium  text-text  bg-selected-hover w-full whitespace-nowrap flex items-center justify-between'>
              <span>{selectedCards.length} selected</span>
              <button
                className='text-foreground hover:text-text '
                onClick={handleCancel}
              >
                <CrossIcon />
              </button>
            </div>
            {!notShowEditBtn && <TagAlertBox disabled={isDisabled} />}

            <button
              className='hover:bg-hover  w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
              onClick={handleOpenLinks}
            >
              <OpenIcon />
              Open
            </button>
            <button
              className='hover:bg-hover  w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
              onClick={handleCopy}
            >
              <CopytoClipboard />
              Copy URLs
            </button>

            <AlertDialogBox
              onClick={onDelete}
              disabled={isDisabled}
              className='hover:bg-hover  w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-foreground [&_svg]:text-foreground'
              allowText
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
