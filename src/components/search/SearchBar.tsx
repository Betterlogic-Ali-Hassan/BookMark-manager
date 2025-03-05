import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";

const SearchBar = () => {
  const { setPage } = usePageContext();
  const { searchTerm, setSearchTerm } = useBookmarks();
  const goHome = () => setPage("home");
  return (
    <div className='sticky w-full z-30 bg-neutral-200 dark:bg-black top-0 py-2 pr-2'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='flex items-center'>
        <button
          onClick={goHome}
          className='px-4 py-1.5 focus:outline-none focus-visible:ring-1 ring-0 ring-inset rounded ring-neutral-700 dark:ring-neutral-300'
          aria-label='Go back'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6 dark:text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            ></path>
          </svg>
        </button>
        <div className='relative grow'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              className='h-5 w-5 text-neutral-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            id='search'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-white/50 dark:focus:ring-blue-400 dark:disabled:bg-white/20 dark:disabled:text-white/70 dark:disabled:ring-white/20 block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 text-sm leading-6'
            placeholder='Search'
            type='search'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
