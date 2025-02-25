import { cn } from "@/lib/utils";

interface Props {
  showTextBox: boolean;
  showLinkInput: boolean;
  showTagBox: boolean;
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
  setShowTagBox: (show: boolean) => void;
}
const Stepper = ({
  showTagBox,
  showLinkInput,
  showTextBox,
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
}: Props) => {
  const isFirstActive = showLinkInput && !showTextBox && !showTagBox;
  const isSecondActive = !showLinkInput && showTextBox && !showTagBox;
  const isThirdActive = !showLinkInput && !showTextBox && showTagBox;
  const isFirstStepCompleted = !showLinkInput && (showTextBox || showTagBox);
  const isSecondStepCompleted = !showLinkInput && !showTextBox && showTagBox;
  const handleFirstStep = () => {
    setShowLinkInput(true);
    setShowTextBox(false);
    setShowTagBox(false);
  };
  const handleSecondStep = () => {
    setShowLinkInput(false);
    setShowTextBox(true);
    setShowTagBox(false);
  };
  const handleThirdStep = () => {
    setShowLinkInput(false);
    setShowTextBox(false);
    setShowTagBox(true);
  };
  return (
    <nav className='mx-auto' aria-label='Progress'>
      <ol className='flex items-center'>
        <li
          className='relative pr-8 sm:pr-20 last:pr-0 last:sm:pr-0'
          onClick={handleFirstStep}
        >
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='h-0.5 w-full bg-neutral-300 dark:bg-neutral-700'></div>
          </div>
          <button
            className={cn(
              "relative flex h-8 w-8 items-center justify-center rounded-full group border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400",
              isFirstStepCompleted &&
                "dark:bg-blue-400 bg-blue-600 border-blue-600 dark:border-blue-400 ",
              isFirstActive && "border-blue-600 dark:border-blue-400"
            )}
          >
            {isFirstStepCompleted ? (
              <svg
                className='h-5 w-5 text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            ) : (
              <>
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700",
                    isFirstActive &&
                      "bg-blue-600 dark:bg-blue-400 dark:group-hover:bg-blue-400"
                  )}
                ></span>
                <span className='sr-only'>Link</span>
              </>
            )}
          </button>
        </li>
        <li
          className='relative pr-8 sm:pr-20 last:pr-0 last:sm:pr-0'
          onClick={handleSecondStep}
        >
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='h-0.5 w-full bg-neutral-300 dark:bg-neutral-700'></div>
          </div>
          <button
            className={cn(
              "relative flex h-8 w-8 items-center justify-center rounded-full group border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400",
              isSecondStepCompleted &&
                "dark:bg-blue-400 bg-blue-600 border-blue-600 dark:border-blue-400",
              isSecondActive && "border-blue-600 dark:border-blue-400"
            )}
          >
            {isSecondStepCompleted ? (
              <svg
                className='h-5 w-5 text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            ) : (
              <>
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700",
                    isSecondActive &&
                      "bg-blue-600 dark:bg-blue-400 dark:group-hover:bg-blue-400"
                  )}
                ></span>
                <span className='sr-only'>Info</span>
              </>
            )}
          </button>
        </li>
        <li
          className='relative pr-8 sm:pr-20 last:pr-0 last:sm:pr-0'
          onClick={handleThirdStep}
        >
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='h-0.5 w-full bg-neutral-300 dark:bg-neutral-700'></div>
          </div>
          <button
            className={cn(
              "relative flex h-8 w-8 items-center justify-center rounded-full group border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400",
              isThirdActive && "border-blue-600 dark:border-blue-400"
            )}
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700",
                isThirdActive &&
                  "bg-blue-600 dark:bg-blue-400 dark:group-hover:bg-blue-400"
              )}
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Context</span>
          </button>
        </li>
      </ol>
    </nav>
  );
};

export default Stepper;
