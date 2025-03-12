import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";
import CrossIcon from "@/components/svgs/CrossIcon";
import EditBookmarkIcon from "@/components/svgs/EditBookmarkIcon";
import { DialogClose } from "@/components/ui/dialog";

const EditBookmark = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-3xl'>
        <div className='flex items-center justify-between'>
          <h2 className='px-4 py-6 sm:p-8 text-xl font-semibold leading-7 text-text flex items-center gap-3 text-white'>
            <EditBookmarkIcon />
            Edit Bookmark
          </h2>
          <DialogClose className='bg-card p-3  rounded-full text-text max-w-fit   opacity-80 hover:opacity-100 '>
            <CrossIcon />
          </DialogClose>
        </div>
        <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
          <PasteLinkInput
            actionBtns
            className='sm:px-8 sm:pb-0 pt-4 '
            notAllowTitle
          />
          <TextBoxInputs
            actionBtns
            className='sm:px-8 sm:py-0 sm:pt-2'
            notAllowTitle
          />
          <TagBoxContent actionBtns className='sm:px-8 sm:pt-2' />
          <EditActionBtns />
        </div>
      </div>
    </div>
  );
};

export default EditBookmark;
