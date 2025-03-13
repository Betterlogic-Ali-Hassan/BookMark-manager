// import { sidebarData, sidebarDataBottom } from "@/constant/HomeSidebarData";
// import Logo from "./Logo";

import SidebarNavigation from "./SidebarDemo";

// import SidebarItem from "./SidebarItem";

// import MobileCategoriesFilter from "../hero/MobileCategoriesFilter";
// import MobileMenu from "./MobileMenu";
// import DialogBox from "../DialogBox";
// import SettingIcon from "../svgs/SettingIcon";
// import Settings from "@/pages/settings/Settings";
// import SidebarNavigation from "./SidebarDemo";

const HomeSidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen '>
      {/* <div className='border-border py-8 px-2 w-16  pointer-events-auto relative z-20 flex h-full flex-col border-r bg-background transition-all duration-300'>
        <div className='flex h-16 w-full items-center justify-center'>
          <Logo />
        </div>
        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-transparent'></span>
        <div className='flex flex-col gap-2'>
          {sidebarData.map((item, i) => (
            <SidebarItem {...item} key={i} />
          ))}
          <SidebarItem
            icon={<MobileCategoriesFilter />}
            tooltip='Filters'
            className='lg:hidden flex'
          />
          <SidebarItem
            icon={<MobileMenu />}
            tooltip='Menu'
            className='lg:hidden flex'
          />
        </div>
        <div className='mt-auto '>
          {sidebarDataBottom.map((item, i) => (
            <SidebarItem {...item} key={i} />
          ))}
          <SidebarItem
            icon={
              <DialogBox trigger={<SettingIcon />}>
                <Settings />
              </DialogBox>
            }
            tooltip='Settings'
          />
        </div>
      </div> */}
      <SidebarNavigation />
    </div>
  );
};

export default HomeSidebar;
