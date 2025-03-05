const ActionBtn = ({ text }: { text: string }) => {
  return (
    <button className='border-neutral-300 dark:border-neutral-800  rounded-[20px] border-dotted border-2 bg-white dark:bg-black px-[18px] py-2 font-semibold text-[10px] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'>
      {text}
    </button>
  );
};

export default ActionBtn;
