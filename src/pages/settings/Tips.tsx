const Tips = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Browser Extension</h2>
        <p className='hidden md:block mb-4'>
          Install the browser extension to quickly save bookmarks from any
          website.
        </p>
        <p className='block md:hidden'>
          Install the browser extension on your desktop to quickly save
          bookmarks from any website.
        </p>
        <div className='md:hidden'>
          <a
            className='text-blue-500 dark:text-blue-300 whitespace-nowrap flex gap-1.5 items-center'
            href='/docs/getting-started/#installing-the-browser-extension'
            title='Visit the documentation'
          >
            Learn more
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </div>
        <div className='hidden md:grid grid-cols-2 gap-3 mt-4'>
          <a
            target='_blank'
            title='Go to Chrome Web Store'
            className='no-underline flex flex-shrink items-center justify-center border rounded-md px-8 py-3 gap-3 border-neutral-300 dark:border-white/20 hover:bg-blue-500/5 dark:hover:bg-white/10 dark:bg-white/5'
            href='https://chrome.google.com/webstore/detail/obdikhdfjocemafhpnidegmdfhbibdkf'
          >
            <img
              src='/brand/Google/Chrome.svg'
              alt='Chrome'
              className='w-8 h-8'
            />
            <span>Chrome Extension</span>
          </a>
          <span className='no-underline flex flex-shrink items-center justify-center border rounded-md px-8 py-3 gap-3 border-neutral-300 dark:border-white/20 dark:bg-white/5'>
            <img
              src='/brand/Apple/Safari.svg'
              alt='Safari'
              className='w-8 h-8'
            />
            <span>Safari (coming soon)</span>
          </span>
          <a
            target='_blank'
            title='Go to Edge Add-ons'
            className='no-underline flex flex-shrink items-center justify-center border rounded-md px-8 py-3 gap-3 border-neutral-300 dark:border-white/20 hover:bg-blue-500/5 dark:hover:bg-white/10 dark:bg-white/5'
            href='https://microsoftedge.microsoft.com/addons/detail/bookmark-manager/gpbcnlcokalkplkflnihocjkglnmdkfj'
          >
            <img
              src='/brand/Microsoft/Edge.svg'
              alt='Microsoft Edge'
              className='w-8 h-8'
            />
            <span>Edge Extension</span>
          </a>
          <a
            target='_blank'
            title='Go to Firefox Add-ons'
            className='no-underline flex flex-shrink items-center justify-center border rounded-md px-8 py-3 gap-3 border-neutral-300 dark:border-white/20 hover:bg-blue-500/5 dark:hover:bg-white/10 dark:bg-white/5'
            href='https://addons.mozilla.org/firefox/addon/bookmark-manager-com/'
          >
            <img
              src='/brand/Mozilla/Firefox.svg'
              alt='Firefox'
              className='w-8 h-8'
            />
            <span>Firefox Add-On</span>
          </a>
        </div>
        <h2 className='text-xl font-semibold mb-6 mt-8'>Mobile App</h2>
        <p>
          Install the mobile app to save and access bookmarks from your phone.
        </p>
        <div className='flex gap-3 mt-3'>
          <a
            target='_blank'
            href='https://play.google.com/store/apps/details?id=com.bookmarkmanager.twa'
          >
            <img
              src='/brand/Google/GetItOnGooglePlay.png'
              alt='Get It On Google Play'
              className='h-12 m-0'
            />
          </a>
        </div>
        <h2 className='text-xl font-semibold mb-6 mt-8'>Desktop App</h2>
        <p>
          Install the desktop app for quick access to your bookmark manager.
          <a
            className='text-blue-500 dark:text-blue-300 whitespace-nowrap flex gap-1.5 items-center'
            href='/docs/getting-started#installing-on-desktop'
            title='Visit the documentation'
          >
            Learn more
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </p>
        <h2 className='text-xl font-semibold mb-6 mt-8'>
          Documentation &amp; Support
        </h2>
        <p className='mb-4'>
          Visit the documentation to learn more.
          <a
            className='text-blue-500 dark:text-blue-300 whitespace-nowrap flex gap-1.5 items-center'
            href='/docs'
            title='Visit the documentation'
          >
            Documentation
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </p>
        <p>
          If you have any issues, feedback, or questions, please contact us at
          <a
            className='text-blue-500 dark:text-blue-300'
            href='mailto:kevin@bookmarkmanager.com'
          >
            kevin@bookmarkmanager.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Tips;
