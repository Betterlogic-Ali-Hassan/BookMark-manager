import Header from "@/components/header/Header";

import TabsArea from "@/components/hero/TabsArea";
import History from "@/components/historyPage/History";
import HomeSidebar from "@/components/homeSidebar/HomeSidebar";
import KeyboardShortcut from "@/components/KeyBoardShortCut";
import { ThumbnailTogglerProvider } from "@/context/ThumbnailTogglerContext";

const HistoryPage = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,51.8rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative min-h-screen w-screen bg-neutral-200 dark:bg-black'>
      <KeyboardShortcut />
      <Header />
      <ThumbnailTogglerProvider>
        <History />
        <>
          <div></div>
          <TabsArea />
        </>
      </ThumbnailTogglerProvider>
      <HomeSidebar />
    </div>
  );
};

export default HistoryPage;
