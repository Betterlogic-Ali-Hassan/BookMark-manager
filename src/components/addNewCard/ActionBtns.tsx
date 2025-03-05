"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface ActionButtonsProps {
  showPrevButton?: boolean;
  onNextClick?: () => void;
  onPrevClick?: () => void;
  onCancel?: () => void;
  isSaveButton?: boolean;
  isLoading?: boolean;
}

export default function ActionButtons({
  showPrevButton = true,
  onNextClick,
  onPrevClick,
  onCancel,
  isSaveButton = false,
  isLoading = false,
}: ActionButtonsProps) {
  return (
    <div className='flex items-center justify-end gap-x-6 border-t border-neutral-900/10 dark:border-white/10 px-4 py-4 sm:px-8'>
      {showPrevButton && (
        <button
          type='button'
          className='text-sm font-semibold rounded-sm flex items-center gap-x-1 text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors'
          onClick={onPrevClick}
        >
          <ChevronLeft className='w-5 h-5 text-neutral-400' />
          Previous
        </button>
      )}
      <div className='flex gap-3 ml-auto'>
        <button
          type='button'
          className='text-sm font-semibold rounded-sm px-3 py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='button'
          className='text-sm font-semibold flex items-center gap-x-1 rounded-sm px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          onClick={onNextClick}
          disabled={isLoading}
        >
          {isSaveButton ? (
            <>
              {isLoading && <Loader2 size={20} className='animate-spin' />}
              Save
            </>
          ) : (
            <>
              Next
              <ChevronRight className='w-5 h-5' />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
