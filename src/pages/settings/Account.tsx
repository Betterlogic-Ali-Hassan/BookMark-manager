const Account = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Account</h2>
        <table className='table-auto'>
          <tbody>
            <tr>
              <td className='pr-4 py-1'>Email:</td>
              <td>JonDoe@gmail.com</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Plan:</td>
              <td>Free</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Bookmarks:</td>
              <td>0</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Tags:</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <div className='mt-6'>
          <div className='rounded-md p-4 bg-blue-50 dark:bg-white/10 border border-transparent dark:border-blue-300'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-6 w-6 text-blue-400 dark:text-blue-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                  ></path>
                </svg>
              </div>
              <div className='ml-3'>
                <div className='text-blue-700 dark:text-blue-200'>
                  <p>
                    Upgrade your account to an annual subscription to use all
                    features and get unlimited bookmarks.
                  </p>
                  <div className='mt-3'>
                    <button className='btn flex items-center gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
                        ></path>
                      </svg>
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <button className='btn secondary'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
