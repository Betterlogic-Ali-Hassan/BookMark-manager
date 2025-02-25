import ActionBtns from "./ActionBtns";
interface Props {
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
  setShowTagBox: (show: boolean) => void;
}
const TextBox = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
}: Props) => {
  const handleNextBtn = () => {
    setShowLinkInput(false);
    setShowTextBox(false);
    setShowTagBox(true);
  };
  const handlePrevBtn = () => {
    setShowLinkInput(true);
    setShowTextBox(false);
    setShowTagBox(false);
  };
  return (
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      <div className='px-4 py-6 sm:p-8'>
        <div className='mb-2'>
          <div className='h-24'>
            <label htmlFor='title' className='text-sm font-semibold'>
              Title
            </label>
            <div className='relative mt-2'>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Title'
                className='input  rounded '
              />
            </div>
          </div>
        </div>
        <label htmlFor='description' className='text-sm font-semibold '>
          Description (optional)
        </label>
        <div className='relative mt-2'>
          <textarea
            name='description'
            id='description'
            placeholder='Description'
            className='input   rounded min-h-[108px] '
          ></textarea>
        </div>
        <div className='h-7'></div>
      </div>
      <ActionBtns nextBtnClick={handleNextBtn} prevBtnClick={handlePrevBtn} />
    </div>
  );
};

export default TextBox;
