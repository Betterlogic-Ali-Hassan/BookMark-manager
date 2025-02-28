import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
interface Props {
  setShowLinkInput?: (show: boolean) => void;
  setShowTextBox?: (show: boolean) => void;
  actionBtns?: boolean;
  className?: string;
}

const PasteLinkInput = ({
  setShowLinkInput,
  setShowTextBox,
  actionBtns,
  className,
}: Props) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("inputText") || ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const urlRegex =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;

  const handleNextBtn = () => {
    if (!urlRegex.test(inputValue)) {
      setError("URL is invalid");
      return;
    }
    if (urlRegex.test(inputValue)) {
      setError("");
      if (setShowLinkInput && setShowTextBox) {
        setShowLinkInput(false);
        setShowTextBox(true);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("inputText", inputValue);
  }, [inputValue]);
  const handleCancel = () => {
    setInputValue("");
    setError("");
    localStorage.removeItem("inputText");
  };
  const handlePasteUrl = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const pastedText = await navigator.clipboard.readText();
        setInputValue(pastedText);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };
  return (
    <>
      <div className={cn("px-4 py-6 sm:p-8", className)}>
        <div className='h-24'>
          <label htmlFor='url' className='text-sm font-semibold'>
            URL
          </label>
          <div className='flex relative rounded mt-2'>
            <input
              type='url'
              name='url'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              id='url'
              placeholder='https://example.com'
              className='input'
            />
            {error !== "" && (
              <>
                <div className='flex pointer-events-none absolute inset-y-0 right-[84px] items-center pr-3'>
                  <svg
                    className='h-5 w-5 text-red-500 dark:text-red-300'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              </>
            )}
            <button type='button' className='btn' onClick={handlePasteUrl}>
              {!loading ? (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 text-neutral-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
                    ></path>
                  </svg>
                  Paste
                </>
              ) : (
                <Loader2 size={20} className='animate-spin' />
              )}
            </button>
          </div>

          {error !== "" && (
            <p className='mt-2 text-sm text-red-600 dark:text-red-300'>
              {error}
            </p>
          )}
        </div>
      </div>
      {!actionBtns && (
        <ActionBtns
          noprevbtn
          nextBtnClick={handleNextBtn}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default PasteLinkInput;
