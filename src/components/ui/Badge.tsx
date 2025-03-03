const Badge = ({ text }: { text: string }) => {
  return (
    <button className='inline-block px-2 py-1 text-xs font-semibold bg-neutral-200 dark:bg-neutral-700 rounded-full dark:hover:text-white hover:text-black'>
      {text}
    </button>
  );
};

export default Badge;
