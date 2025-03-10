import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";
import CrossIcon from "@/components/svgs/CrossIcon";
import EditBookmarkIcon from "@/components/svgs/EditBookmarkIcon";
import { DialogClose } from "@/components/ui/dialog";

const EditBookmark = () => {
  return (
    <div className='bg-neutral-200 dark:bg-black min-h-screen p-0 sm:px-8 sm:pb-8 flex flex-col items-center'>
      <div className='w-full max-w-3xl'>
        <div className='flex items-center justify-between'>
          <h2 className='px-4 py-6 sm:p-8 text-xl font-semibold leading-7 text-neutral-900 dark:text-white flex items-center gap-3'>
            <EditBookmarkIcon />
            Edit Bookmark
          </h2>
          <DialogClose className='bg-card p-3  rounded-full text-text max-w-fit   opacity-80 hover:opacity-100 '>
            <CrossIcon />
          </DialogClose>
        </div>
        <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
          <PasteLinkInput actionBtns className='sm:px-8 sm:pb-0 pt-6 ' />
          <TextBoxInputs actionBtns className='sm:px-8 sm:py-0 sm:pt-4' />
          <TagBoxContent actionBtns className='sm:px-8 sm:pt-4' />
          <EditActionBtns />
        </div>
      </div>
    </div>
  );
};

export default EditBookmark;
