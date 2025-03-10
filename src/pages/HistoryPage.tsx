import TabsArea from "@/components/hero/TabsArea";
import History from "@/components/historyPage/History";
import MainLayout from "./layout/MainLayout";

export default function HistoryPage() {
  return (
    <MainLayout className='no-scrollbar'>
      <History />
      <>
        <div className='w-[260px]'></div>
        <TabsArea />
      </>
    </MainLayout>
  );
}
