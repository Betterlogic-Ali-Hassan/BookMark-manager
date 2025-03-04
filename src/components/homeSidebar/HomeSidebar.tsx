import { sidebarData, sidebarDataBottom } from "@/constant/HomeSidebarData";
import Logo from "./Logo";

import SidebarItem from "./SidebarItem";

const HomeSidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen'>
      <div className='border-[#d4d4d4] dark:border-neutral-800 dark:bg-black pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-[#E5E5E5] transition-all duration-300'>
        <div className='flex h-16 w-full items-center justify-center'>
          <Logo />
        </div>
        <div>
          {sidebarData.map((item, i) => (
            <SidebarItem data={item} key={i} />
          ))}
        </div>
        <div className='mt-auto'>
          {sidebarDataBottom.map((item, i) => (
            <SidebarItem data={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
