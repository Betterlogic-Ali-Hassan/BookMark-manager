import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
      <AlertDialogContent className='max-w-lg gap-0 transform overflow-hidden rounded-md bg-white dark:bg-neutral-800 px-4 pb-4 pt-5 text-left shadow-xl dark:shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <h2 className='mb-6 text-xl'>Rename Tag</h2>
            <div className='mb-6'>
              <div className='rounded-md p-4 bg-yellow-50 dark:bg-white/10 border border-transparent dark:border-yellow-300'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6 text-yellow-400 dark:text-yellow-300'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm text-neutral-700 dark:text-neutral-200'>
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
