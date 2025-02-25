import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  noprevbtn?: boolean;
  nextBtnClick?: () => void;
  saveBtn?: boolean;
  prevBtnClick?: () => void;
  loading?: boolean;
}
const ActionBtns = ({
  noprevbtn,
  nextBtnClick,
  prevBtnClick,
  saveBtn,
  loading,
}: Props) => {
  const navigate = useNavigate();
  const cancelBtnClick = () => {
    navigate("/");
  };
  return (
    <div className='flex items-center justify-end gap-x-6 border-t border-neutral-900/10 dark:border-white/10 px-4 py-4 sm:px-8'>
      {!noprevbtn && (
        <button
          className='cancel-btn text-sm font-semibold rounded-sm flex items-center gap-x-1'
          onClick={prevBtnClick}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 text-neutral-400'
          >
            <path
              fill-rule='evenodd'
              d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
              clip-rule='evenodd'
            ></path>
          </svg>
          Previous
        </button>
      )}
      <div className='flex gap-3 ml-auto'>
        <button
          className='cancel-btn text-sm font-semibold rounded-sm'
          onClick={cancelBtnClick}
        >
          Cancel
        </button>
        <button
          className='done-btn text-sm font-semibold flex items-center gap-x-1 rounded-sm'
          onClick={nextBtnClick}
        >
          {saveBtn ? (
            <>
              {loading && <Loader2 size={20} className='animate-spin' />}
              Save
            </>
          ) : (
            <>
              {" "}
              Next
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ActionBtns;
