import { sidebarData, sidebarDataBottom } from "@/constant/HomeSidebarData";
import Logo from "./Logo";

import SidebarItem from "./SidebarItem";

import MobileCategoriesFilter from "../hero/MobileCategoriesFilter";
import MobileMenu from "./MobileMenu";
import DialogBox from "../DialogBox";
import SettingIcon from "../svgs/SettingIcon";
import Settings from "@/pages/settings/Settings";

const HomeSidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen'>
      <div className='border-border  pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-background transition-all duration-300'>
        <div className='flex h-16 w-full items-center justify-center'>
          <Logo />
        </div>
        <div>
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
        <div className='mt-auto'>
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
      </div>
    </div>
  );
};

export default HomeSidebar;
