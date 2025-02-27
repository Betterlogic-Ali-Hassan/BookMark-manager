const ExtensionBtn = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div>
      <a
        target='_blank'
        className='no-underline flex flex-shrink items-center justify-center border rounded-md px-8 py-3 gap-3 border-neutral-300 dark:border-white/20 hover:bg-blue-500/5 dark:hover:bg-white/10 dark:bg-white/5'
        href='#'
      >
        <img src={icon} alt={name} className='w-8 h-8' />
        <span>{name}</span>
      </a>
    </div>
  );
};

export default ExtensionBtn;
