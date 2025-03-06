import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import WarnIcon from "./svgs/WarnIcon";

const NoTagAlertBox = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className='btn secondary rounded flex items-center gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-5 h-5 text-neutral-400'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
          ></path>
        </svg>
        Rename Tag
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-lg gap-0 transform overflow-hidden rounded-md bg-card  px-4 pb-4 pt-5 text-left shadow-xl dark:shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <h2 className='mb-6 text-xl'>Rename Tag</h2>
            <div className='mb-6'>
              <div className='rounded-md p-4 bg-warn border border-warn-border '>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <WarnIcon />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm text-text'>
                      There are no tags to rename.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex gap-3 mt-2 items-center justify-end'>
          <AlertDialogCancel className='btn secondary'>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NoTagAlertBox;
