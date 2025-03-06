const SettingPageFooter = () => {
  return (
    <div className=' mt-auto flex items-center justify-end gap-x-3 border-t border-border  px-4 py-4 sm:px-8'>
      <a href='#' className='flex gap-2 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5 text-foreground'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
          ></path>
        </svg>
        Docs
      </a>
      <button className='btn secondary ml-auto inline-flex rounded '>
        Done
      </button>
    </div>
  );
};

export default SettingPageFooter;
