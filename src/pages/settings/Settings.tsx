import SettingPageFooter from "@/components/settingPage/SettingPageFooter";
import Sidebar from "@/components/settingPage/Sidebar";
import { usePageContext } from "@/context/PageContext";

import Tips from "./Tips";
import Account from "./Account";
import TagSetting from "./TagSetting";
import ThemeSetting from "./ThemeSetting";
import ImportSetting from "./ImportSetting";
import ExportSettings from "./ExportSettings";
import Integration from "./Integration";
import { useState } from "react";

const Settings = () => {
  const { setPage } = usePageContext();
  const [currentPage, setCurrentPage] = useState("tag");
  const handleBack = () => {
    setPage("home");
  };
  return (
    <div className='bg-neutral-200 dark:bg-black min-h-screen p-0 md:px-8 md:pb-8 flex flex-col items-center text-sm'>
      <div className='w-full max-w-4xl bg-white dark:bg-neutral-900 md:bg-transparent md:dark:bg-transparent'>
        <button className='px-4 py-6 md:p-8 text-neutral-900 dark:text-white flex items-center gap-3'>
          <svg
            onClick={handleBack}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            ></path>
          </svg>
          <span className='text-xl leading-1 font-semibold'>Settings</span>
        </button>
        <div className='bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 md:rounded-lg dark:border-y dark:md:border dark:border-neutral-800 dark:md:border-neutral-700 md:flex'>
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className='md:grow flex flex-col'>
            {currentPage === "tips" && <Tips />}
            {currentPage === "tag" && <TagSetting />}
            {currentPage === "theme" && <ThemeSetting />}
            {currentPage === "import" && <ImportSetting />}
            {currentPage === "export" && <ExportSettings />}
            {currentPage === "integration" && <Integration />}
            {currentPage === "account" && <Account />}
            <SettingPageFooter />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
