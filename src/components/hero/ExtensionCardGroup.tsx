"use client";

import { useState } from "react";
import type { Card } from "@/types/TabCardType";
import CardRenderer from "./CardRenderer";
import InfiniteScrollSentinel from "./InfiniteScrollSentinel";

interface ExtensionCardsGroupProps {
  cards: Card[];
  isListView: boolean;
  setActiveTab: (tab: number) => void;
  // Remove favoriteExe and setFavoriteExe since they're not used in extension mode.
}

const CARDS_PER_LOAD = 20;

export default function ExtensionCardsGroup({
  cards,
  isListView,
  setActiveTab,
}: ExtensionCardsGroupProps) {
  const [visibleCardsCount, setVisibleCardsCount] = useState(CARDS_PER_LOAD);
  const loadMoreCards = () => {
    setVisibleCardsCount((prevCount) =>
      Math.min(prevCount + CARDS_PER_LOAD, cards.length)
    );
  };

  const visibleCards = cards.slice(0, visibleCardsCount);
  const hasMoreCards = visibleCardsCount < cards.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-4">
        {visibleCards.map((card) => (
          <CardRenderer
            key={card.id}
            data={card}
            isListView={isListView}
            isExtensionsPage={true}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <InfiniteScrollSentinel onLoadMore={loadMoreCards} hasMore={hasMoreCards} />
    </>
  );
}
