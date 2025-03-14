import { sidebarData, sidebarDataBottom } from "@/constant/HomeSidebarData";
import SidebarItem from "./SidebarItem";
import MobileCategoriesFilter from "../hero/MobileCategoriesFilter";
import MobileMenu from "./MobileMenu";
import DialogBox from "@/modals/DialogBox";
import SettingIcon from "../svgs/SettingIcon";
import Settings from "@/pages/settings/Settings";
import Logo from "./Logo";

const HomeSidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen '>
      <div className='relative flex h-full w-16 flex-1 flex-col items-center border-r border-border px-2 pt-8 '>
        <Logo />
        <span
          aria-hidden='true'
          className='block h-px w-px'
          style={{ marginLeft: "0.25rem", marginTop: "2rem" }}
        />
        <div className='h-full max-h-full w-full overflow-y-auto py-2  no-scrollbar '>
          <div className='relative flex w-full list-none flex-col gap-1 overflow-clip py-1 h-full'>
            <nav className='flex w-full flex-col items-center gap-1 outline-none justify-between h-full'>
              <li className='relative mb-2 w-full max-w-[44px] p-0'>
                <ul className='flex flex-col gap-2 pt-1' data-has-title='true'>
                  {sidebarData.map((item, i) => (
                    <SidebarItem {...item} key={i} />
                  ))}
                  <SidebarItem
                    icon={<MobileCategoriesFilter />}
                    tooltip='Filters'
                    className='lg:hidden flex mt-2'
                  />
                  <SidebarItem
                    icon={<MobileMenu />}
                    tooltip='Menu'
                    className='lg:hidden flex'
                  />
                </ul>
              </li>

              <li className='relative mb-2 w-full max-w-[44px] p-0 mt-auto'>
                <ul className='flex flex-col gap-1 pt-1' data-has-title='true'>
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
                </ul>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
