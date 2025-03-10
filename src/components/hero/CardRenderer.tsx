"use client";

import type React from "react";
import type { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import ExtensionCard from "../extensionPage/ExtensionCard";
import ExtensionListViewCard from "../extensionPage/ExtensionListViewCard";
import DownloadCard from "../downloadPage/DownloadCard";

interface CardRendererProps {
  data: Card;
  isListView: boolean;
  isExtensionsPage: boolean;
  isDownloadPage: boolean;
  setActiveTab: (tab: number) => void;
  favoriteExe: Card[];
  setFavoriteExe: React.Dispatch<React.SetStateAction<Card[]>>;
}

export default function CardRenderer({
  data,
  isListView,
  isExtensionsPage,
  setActiveTab,
  favoriteExe,
  setFavoriteExe,
  isDownloadPage,
}: CardRendererProps) {
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
  if (isDownloadPage) {
    return (
      <DownloadCard data={data} key={data.id} setActiveTab={setActiveTab} />
    );
  }

  return isListView ? (
    <ThumbnailCard data={data} key={data.id} setActiveTab={setActiveTab} />
  ) : (
    <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
  );
}
