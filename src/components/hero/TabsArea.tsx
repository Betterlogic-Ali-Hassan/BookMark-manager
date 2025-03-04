import { useState } from "react";
import TabCardDetail from "./tabCardDetail/TabCardDetail";
import TabsCards from "./TabsCards";
import { useBookmarks } from "@/context/BookmarkContext";

const TabsArea = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { cards } = useBookmarks();
  return (
    <div className='block lg:grid lg:col-span-2  overflow-y-auto no-scrollbar lg:overflow-y-scroll overflow-x-hidden grow pb-4 lg:pb-6'>
      <TabsCards setActiveTab={setActiveTab} cards={cards} />
      <TabCardDetail activeTab={activeTab} cards={cards} />
    </div>
  );
};

export default TabsArea;
