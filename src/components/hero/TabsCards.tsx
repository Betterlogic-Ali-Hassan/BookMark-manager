"use client";

import { useState, useMemo, useCallback } from "react";
import type { Card } from "@/types/TabCardType";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
import { usePageContext } from "@/context/PageContext";
import HourlyLog from "../HourlyLog";
import CardGroup from "./CardGroup";
import InfiniteScrollSentinel from "./InfiniteScrollSentinel";

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
  const INITIAL_CARDS_COUNT = isExtensionsPage ? 20 : 100;
  const CARDS_PER_LOAD = isExtensionsPage ? 20 : 40;
  const [visibleCardsCount, setVisibleCardsCount] =
    useState(INITIAL_CARDS_COUNT);

  const loadMoreCards = useCallback(() => {
    setVisibleCardsCount((prevCount) =>
      Math.min(prevCount + CARDS_PER_LOAD, cards.length)
    );
  }, [cards.length]);

  const visibleCards = useMemo(() => {
    return cards.slice(0, visibleCardsCount);
  }, [cards, visibleCardsCount]);

  const cardGroups = useMemo(() => {
    if (!isShowHourlyLog) {
      return [visibleCards];
    }

    const groups = [];
    let currentIndex = 0;

    while (currentIndex < visibleCards.length) {
      if (currentIndex === 0) {
        groups.push(visibleCards.slice(0, Math.min(10, visibleCards.length)));
        currentIndex = 10;
      } else if (currentIndex === 10) {
        groups.push(visibleCards.slice(10, Math.min(30, visibleCards.length)));
        currentIndex = 30;
      } else if (currentIndex === 30) {
        groups.push(visibleCards.slice(30, Math.min(45, visibleCards.length)));
        currentIndex = 45;
      } else {
        groups.push(visibleCards.slice(currentIndex));
        break;
      }
    }

    return groups.filter((group) => group.length > 0);
  }, [visibleCards, isShowHourlyLog]);

  // Check if we've loaded all cards
  const hasMoreCards = visibleCardsCount < cards.length;

  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      {isShowHourlyLog && <HourlyLog />}

      {isExtensionsPage && favoriteExe.length > 0 && (
        <div className='mb-12'>
          <CardGroup
            cards={favoriteExe}
            isListView={isListView}
            isExtensionsPage={isExtensionsPage}
            isShowHourlyLog={false}
            showHourlyLogAfter={false}
            setActiveTab={setActiveTab}
            favoriteExe={favoriteExe}
            setFavoriteExe={setFavoriteExe}
          />
        </div>
      )}

      {cardGroups.map((group, index) => (
        <CardGroup
          key={`group-${index}`}
          cards={group}
          isListView={isListView}
          isExtensionsPage={isExtensionsPage}
          isShowHourlyLog={isShowHourlyLog}
          showHourlyLogAfter={index < cardGroups.length - 1}
          setActiveTab={setActiveTab}
          favoriteExe={favoriteExe}
          setFavoriteExe={setFavoriteExe}
        />
      ))}

      <InfiniteScrollSentinel
        onLoadMore={loadMoreCards}
        hasMore={hasMoreCards}
      />
    </div>
  );
};

export default TabsCards;
