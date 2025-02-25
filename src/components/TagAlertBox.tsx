import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import TagBox from "./TagBox";
import { categoriesData } from "@/constant/categoriesData";

const TagAlertBox = ({ disabled }: { disabled?: boolean }) => {
  const tagData = categoriesData.slice(0, 5);
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className='hover:bg-white/5 w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
        disabled={disabled}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-5 w-5 text-neutral-400 shrink-0'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
          ></path>
        </svg>
        Edit tags
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-3xl  transform overflow-hidden rounded-md bg-neutral-800 border-transparent px-4 pb-4 pt-5 text-left shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <TagBox categoriesData={tagData} />
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex items-center gap-3 mt-6 border-t border-t-neutral-700 pt-4'>
          <div className='hidden sm:flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full bg-blue-400 h-4 w-4 border border-none'></span>
            <span>assigned</span>
          </div>
          <div className='hidden sm:flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full bg-white/10 h-4 w-4 border border-none'></span>
            <span>not assigned</span>
          </div>
          <div className='flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full partially-assigned-bg h-4 w-4 border border-none'></span>
            <span>partially assigned</span>
          </div>
          <div className='grow'></div>
          <div className='gap-3 flex'>
            <AlertDialogAction className='cancel-btn'>Cancel</AlertDialogAction>
            <AlertDialogCancel className='done-btn'>Save</AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TagAlertBox;
