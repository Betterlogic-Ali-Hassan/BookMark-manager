"use client";

import type { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import ExtensionCard from "@/components/extensionPage/ExtensionCard";
import ExtensionListViewCard from "../extensionPage/ExtensionListViewCard";
import type { ExtensionData } from "@/context/ExtensionContext";

interface CardRendererProps {
  data: Card | ExtensionData;
  isListView: boolean;
  isExtensionsPage: boolean;
  setActiveTab: (tab: number) => void;
}

export default function CardRenderer({
  data,
  isListView,
  isExtensionsPage,
  setActiveTab,
}: CardRendererProps) {
  if (isExtensionsPage) {
    if ("name" in data) {
      return isListView ? (
        <ExtensionListViewCard extension={data as ExtensionData} key={(data as ExtensionData).id} />
      ) : (
        <ExtensionCard extension={data as ExtensionData} key={(data as ExtensionData).id} />
      );
    }

    console.warn("Unexpected data format in Extension Page:", data);
    return null;
  }

  return isListView ? (
    <ThumbnailCard data={data as Card} key={(data as Card).id.toString()} setActiveTab={setActiveTab} />
  ) : (
    <TabCard key={(data as Card).id.toString()} data={data as Card} setActiveTab={setActiveTab} />
  );
}
