import { sidebarItem } from "@/constant/sidebarItems";

const Sidebar = () => {
  return (
    <div className='flex gap-1 w-screen md:w-48 md:py-2 overflow-x-auto no-scrollbar md:dark:bg-neutral-800 md:bg-neutral-50 md:flex-col dark:border-neutral-700 border-neutral-200 md:rounded-l-lg md:flex-none border-b md:border-b-0'>
      {sidebarItem.map((item, i) => (
        <button
          className='flex items-center gap-4 border-b-2 md:border-none whitespace-nowrap py-4 px-6 font-semibold md:text-left border-blue-600 dark:border-white dark:bg-black/30 dark:text-white bg-black/5 text-neutral-900}'
          key={i}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
