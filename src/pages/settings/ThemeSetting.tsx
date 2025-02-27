const ThemeSetting = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Appearance</h2>
        <label htmlFor='color-theme-select' className='control-label mb-2'>
          Color Theme
        </label>
        <fieldset>
          <legend className='sr-only'>Color Theme</legend>
          <div className='space-y-2'>
            <label
              htmlFor='system'
              className='relative cursor-pointer flex items-start border rounded-md pt-2 pb-2.5 px-4 border-transparent hover:bg-neutral-50 dark:hover:bg-white/5'
            >
              <div className='flex h-6 items-center'>
                <input
                  id='system'
                  aria-describedby='system-description'
                  name='theme'
                  type='radio'
                  className='h-4 w-4 border-neutral-300 text-blue-600 dark:text-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400'
                  value='system'
                />
              </div>
              <div className='ml-3 text-sm leading-6'>
                <div className='font-medium text-neutral-900 dark:text-white'>
                  System default
                </div>
                <div
                  id='system-description'
                  className='text-neutral-500 dark:text-neutral-400'
                >
                  The default color theme of your browser or operating system
                </div>
              </div>
            </label>
            <label
              htmlFor='dark'
              className='relative cursor-pointer flex items-start border rounded-md pt-2 pb-2.5 px-4 border-blue-600 dark:border-blue-400 bg-neutral-50 dark:bg-white/5'
            >
              <div className='flex h-6 items-center'>
                <input
                  id='dark'
                  aria-describedby='dark-description'
                  name='theme'
                  type='radio'
                  className='h-4 w-4 border-neutral-300 text-blue-600 dark:text-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400'
                  value='dark'
                />
              </div>
              <div className='ml-3 text-sm leading-6'>
                <div className='font-medium text-neutral-900 dark:text-white'>
                  Dark
                </div>
                <div
                  id='dark-description'
                  className='text-neutral-500 dark:text-neutral-400'
                >
                  A dark color theme
                </div>
              </div>
            </label>
            <label
              htmlFor='light'
              className='relative cursor-pointer flex items-start border rounded-md pt-2 pb-2.5 px-4 border-transparent hover:bg-neutral-50 dark:hover:bg-white/5'
            >
              <div className='flex h-6 items-center'>
                <input
                  id='light'
                  aria-describedby='light-description'
                  name='theme'
                  type='radio'
                  className='h-4 w-4 border-neutral-300 text-blue-600 dark:text-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400'
                  value='light'
                />
              </div>
              <div className='ml-3 text-sm leading-6'>
                <div className='font-medium text-neutral-900 dark:text-white'>
                  Light
                </div>
                <div
                  id='light-description'
                  className='text-neutral-500 dark:text-neutral-400'
                >
                  A light color theme
                </div>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ThemeSetting;
