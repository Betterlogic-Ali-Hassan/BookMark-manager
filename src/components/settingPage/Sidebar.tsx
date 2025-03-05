import { sidebarItem } from "@/constant/sidebarItems";

import { cn } from "@/lib/utils";
interface Props {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}
const Sidebar = ({ currentPage, setCurrentPage }: Props) => {
  const goToPage = (page: string) => {
    return () => setCurrentPage(page);
  };
  return (
    <div className='flex gap-1 w-screen md:w-48 md:py-2 overflow-x-auto no-scrollbar md:dark:bg-neutral-800 md:bg-neutral-50 md:flex-col dark:border-neutral-700 border-neutral-200 md:rounded-l-lg md:flex-none border-b md:border-b-0'>
      {sidebarItem.map((item, i) => (
        <button
          onClick={goToPage(item.link)}
          className={cn(
            "flex items-center gap-4 border-b-2 md:border-none whitespace-nowrap py-4 px-6 font-semibold md:text-left hover:bg-black/5 hover:text-neutral-900 hover:dark:text-white hover:dark:bg-black/30  ",
            currentPage === item.link &&
              "border-blue-600 dark:border-white dark:bg-black/30 dark:text-white bg-black/5 text-neutral-900"
          )}
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
