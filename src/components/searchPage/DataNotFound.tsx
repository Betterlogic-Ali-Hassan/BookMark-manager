const DataNotFound = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <div className='text-center pt-10'>
      <svg
        className='mx-auto h-12 w-12 text-foreground'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5'
        ></path>
      </svg>{" "}
      <p className='mt-3 text-sm text-foreground  truncate'>
        Nothing found for <br />"
        <span className='text-text  font-semibold'>{searchTerm}</span>
        ".
      </p>
    </div>
  );
};

export default DataNotFound;
