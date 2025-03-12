"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { Card } from "@/types/TabCardType";
import type { ExtensionData } from "@/context/ExtensionContext";
import HourlyLog from "../HourlyLog";
import CardRenderer from "./CardRenderer";

interface CardGroupProps {
  cards: Card[] | ExtensionData[]; // ✅ Add this to allow passing bookmarks/extensions
  isListView: boolean;
  isExtensionsPage: boolean;
  isShowHourlyLog: boolean;
  showHourlyLogAfter: boolean;
  setActiveTab: (tab: number) => void;
  favoriteExe: Card[];
  setFavoriteExe: React.Dispatch<React.SetStateAction<Card[]>>;
}

export default function CardGroup({
  cards,
  isListView,
  isExtensionsPage,
  isShowHourlyLog,
  showHourlyLogAfter,
  setActiveTab,
  favoriteExe,
  setFavoriteExe,
}: CardGroupProps) {
  const containerClasses = cn(
    "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0",
    isListView && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-4"
  );

  return (
    <div className={containerClasses}>
      {cards.map((item) => (
        <CardRenderer
          key={item.id}
          data={item}
          isListView={isListView}
          isExtensionsPage={isExtensionsPage}
          setActiveTab={setActiveTab}
          {...(!isExtensionsPage ? { favoriteExe, setFavoriteExe } : {})} // Only pass favoriteExe for bookmarks
        />
      ))}
      {isShowHourlyLog && showHourlyLogAfter && <HourlyLog />}
    </div>
  );
}
