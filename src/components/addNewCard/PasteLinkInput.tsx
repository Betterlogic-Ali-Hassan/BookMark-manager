import { Loader2 } from "lucide-react";
import { useState } from "react";
import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";
interface Props {
  actionBtns?: boolean;
  className?: string;
}

const PasteLinkInput = ({ actionBtns, className }: Props) => {
  const { formData, updateFormData, nextStep, errors, resetForm } =
    useFormContext();
  const [loading, setLoading] = useState(false);
  const handleNextBtn = () => {
    nextStep();
  };

  const handleCancel = () => {
    resetForm();
  };
  const handlePasteUrl = async () => {
    setLoading(true);
    try {
      const pastedText = await navigator.clipboard.readText();
      updateFormData("url", pastedText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleUrlInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("url", e.target.value);
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
              value={formData.url}
              onChange={handleUrlInputValue}
              id='url'
              placeholder='https://example.com'
              className='input'
            />
            {errors.url && (
              <>
                <div className='flex pointer-events-none absolute inset-y-0 right-[84px] items-center pr-3'>
                  <svg
                    className='h-5 w-5  text-error'
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

          {errors.url && (
            <p className='mt-2 text-sm  text-error'>{errors.url}</p>
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
