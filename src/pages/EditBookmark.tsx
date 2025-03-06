import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";

const EditBookmark = () => {
  return (
    <div className='bg-neutral-200 dark:bg-black min-h-screen p-0 sm:px-8 sm:pb-8 flex flex-col items-center'>
      <div className='w-full max-w-3xl'>
        <h2 className='px-4 py-6 sm:p-8 text-xl font-semibold leading-7 text-neutral-900 dark:text-white flex items-center gap-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6 text-neutral-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
            ></path>
          </svg>{" "}
          Edit Bookmark
        </h2>
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
