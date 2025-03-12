import { useState } from "react";
import TabCardDetail from "./tabCardDetail/TabCardDetail";
import TabsCards from "./TabsCards";
import { useBookmarks } from "@/context/BookmarkContext";
import DataNotFound from "../DataNotFound";

const TabsArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { cards } = useBookmarks();
  console.log(cards);

  return (
    <div className='block lg:grid lg:col-span-2 lg:grid-cols-subgrid  overflow-y-auto no-scrollbar lg:overflow-y-scroll overflow-x-hidden grow pb-4 lg:pb-6 max-lg:pl-[100px] max-lg:pt-2'>
      {cards.length > 0 ? (
        <>
          <TabsCards setActiveTab={setActiveTab} cards={cards} />
          <TabCardDetail activeTab={activeTab} cards={cards} />
        </>
      ) : (
        <DataNotFound />
      )}
    </div>
  );
};

export default TabsArea;
