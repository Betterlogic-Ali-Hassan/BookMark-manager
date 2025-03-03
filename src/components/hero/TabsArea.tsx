import { useState } from "react";
import TabCardDetail from "./tabCardDetail/TabCardDetail";
import TabsCards from "./TabsCards";
import { tabsData } from "@/constant/tabsData";

const TabsArea = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='block lg:grid lg:col-span-2 lg:grid-cols-subgrid overflow-y-auto no-scrollbar lg:overflow-y-scroll overflow-x-hidden grow pb-4 lg:pb-6'>
      <TabsCards setActiveTab={setActiveTab} cards={tabsData} />
      <TabCardDetail activeTab={activeTab} cards={tabsData} />
    </div>
  );
};

export default TabsArea;
