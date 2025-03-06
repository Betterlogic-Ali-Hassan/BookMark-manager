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
import ArrowLeft from "@/components/svgs/ArrowLeft";

const Settings = () => {
  const { setPage } = usePageContext();
  const [currentPage, setCurrentPage] = useState("tag");
  const handleBack = () => {
    setPage("home");
  };
  return (
    <div className='bg-background min-h-screen p-0 md:px-8 md:pb-8 flex flex-col items-center text-sm'>
      <div className='w-full max-w-4xl bg-card  md:bg-transparent md:dark:bg-transparent'>
        <button className='px-4 py-6 md:p-8 text-text flex items-center gap-3'>
          <span onClick={handleBack}>
            <ArrowLeft />
          </span>
          <span className='text-xl leading-1 font-semibold'>Settings</span>
        </button>
        <div className='bg-card  text-text shadow-sm dark:bg-shadow-none ring-1 ring-border  md:rounded-lg dark:border-y dark:md:border border-border   md:flex'>
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
