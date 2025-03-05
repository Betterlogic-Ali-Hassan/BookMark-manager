const ActionBtn = ({ text }: { text: string }) => {
  return (
    <button className='border-neutral-300 dark:border-neutral-800  rounded-[20px] border-dotted border-2 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-neutral-100 px-[18px] py-2 font-semibold text-[10px] '>
      {text}
    </button>
  );
};

export default ActionBtn;
