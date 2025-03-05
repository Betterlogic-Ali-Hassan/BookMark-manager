interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
}
const DateSliderBtn = ({ icon, onClick }: Props) => {
  return (
    <button
      className='h-[42px] max-w-[25px] w-full flex items-center justify-center rounded border-neutral-300 dark:border-neutral-800  bg-white dark:bg-[#111] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-200'
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default DateSliderBtn;
