"use client";

import type { Card } from "@/types/TabCardType";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
import { usePageContext } from "@/context/PageContext";
import { useState, useMemo } from "react";

// Components
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import HourlyLog from "../HourlyLog";
import ExtensionCard from "../extensionPage/ExtensionCard";
import ExtensionListViewCard from "../extensionPage/ExtensionListViewCard";

interface TabsCardsProps {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}

const TabsCards = ({ setActiveTab, cards }: TabsCardsProps) => {
  const { isListView } = useThumbnailToggler();
  const [favoriteExe, setFavoriteExe] = useState<Card[]>([]);
  const { page } = usePageContext();
  const isShowHourlyLog = page === "history";
  const isExtensionsPage = page === "extensions";

  const cardGroups = useMemo(() => {
    if (!isShowHourlyLog) {
      return [cards];
    }
    return [
      cards.slice(0, 10),
      cards.slice(10, 30),
      cards.slice(30, 45),
      cards.slice(45),
    ];
  }, [cards, isShowHourlyLog]);

  const renderCard = (data: Card) => {
    if (isExtensionsPage) {
      return isListView ? (
        <ExtensionCard
          setFavoriteExe={setFavoriteExe}
          favoriteExe={favoriteExe}
          data={data}
          key={data.id}
          setActiveTab={setActiveTab}
        />
      ) : (
        <ExtensionListViewCard
          setFavoriteExe={setFavoriteExe}
          favoriteExe={favoriteExe}
          key={data.id}
          data={data}
          setActiveTab={setActiveTab}
        />
      );
    }

    return isListView ? (
      <ThumbnailCard data={data} key={data.id} setActiveTab={setActiveTab} />
    ) : (
      <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
    );
  };

  const containerClasses = cn(
    "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0",
    isListView && "grid grid-cols-3 gap-6 gap-x-4"
  );

  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      {isShowHourlyLog && <HourlyLog />}

      {isExtensionsPage && favoriteExe.length > 0 && (
        <div className='mb-12'>
          <div className={containerClasses}>{favoriteExe.map(renderCard)}</div>
        </div>
      )}

      <>
        {cardGroups.map((group, index) => (
          <div key={`group-${index}`} className={containerClasses}>
            {group.map(renderCard)}
            {isShowHourlyLog && index < cardGroups.length - 1 && <HourlyLog />}
          </div>
        ))}
      </>
    </div>
  );
};

export default TabsCards;
