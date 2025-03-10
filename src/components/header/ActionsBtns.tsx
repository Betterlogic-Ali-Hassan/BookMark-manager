"use client";
import { usePageContext } from "@/context/PageContext";
import { btns } from "@/constant/headerActionBtns";

import DialogBox from "../DialogBox";
import SettingIcon from "../svgs/SettingIcon";
import Settings from "@/pages/settings/Settings";

const ActionButtons = () => {
  const { setPage } = usePageContext();

  const navigateTo = (page: string) => {
    return () => setPage(page);
  };

  return (
    <nav
      className='hidden lg:flex items-center justify-end gap-4 pr-4'
      aria-label='Action navigation'
    >
      <DialogBox trigger={<SettingIcon />}>
        <Settings />
      </DialogBox>
      {btns.map((button, index) => (
        <button
          key={index}
          className='text-sm text-foreground hover:text-text transition-colors'
          onClick={navigateTo(button.action)}
          aria-label={button.label}
        >
          {button.icon}
        </button>
      ))}
    </nav>
  );
};

export default ActionButtons;
