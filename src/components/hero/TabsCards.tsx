import type { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
import HourlyLog from "../HourlyLog";
import { usePageContext } from "@/context/PageContext";

import ExtensionCard from "../extensionPage/ExtensionCard";
import { useState } from "react";

interface Props {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}

const TabsCards = ({ setActiveTab, cards }: Props) => {
  const { isListView } = useThumbnailToggler();
  const [favoriteExe, setFavoriteExe] = useState<Card[]>([]);
  const { page } = usePageContext();
  const isShowHourlyLog = page === "history";

  const renderCard = (data: Card) => {
    return isListView ? (
      <>
        {page === "extensions" ? (
          <ExtensionCard
            setFavoriteExe={setFavoriteExe}
            favoriteExe={favoriteExe}
            data={data}
            key={data.id}
            setActiveTab={setActiveTab}
          />
        ) : (
          <ThumbnailCard
            data={data}
            key={data.id}
            setActiveTab={setActiveTab}
          />
        )}
      </>
    ) : (
      <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
    );
  };

  // Container classes based on view type
  const containerClasses = cn(
    "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0",
    isListView && "grid grid-cols-3 gap-6 gap-x-4"
  );

  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      {isShowHourlyLog && <HourlyLog />}
      {page === "extensions" && (
        <>
          {favoriteExe.length > 0 && (
            <>
              <h2 className='text-2xl font-semibold mb-4'>
                Favorites Extension
              </h2>
              <div className={containerClasses}>
                {favoriteExe.map(renderCard)}
              </div>
            </>
          )}
          <h2 className='text-2xl font-semibold mb-4'>Extension List</h2>
        </>
      )}
      <div className={containerClasses}>
        {favoriteExe.length > 0 && favoriteExe.map(renderCard)}
        {cards.slice(0, 10).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(10, 30).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(30, 45).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(45).map(renderCard)}
      </div>
    </div>
  );
};

export default TabsCards;
