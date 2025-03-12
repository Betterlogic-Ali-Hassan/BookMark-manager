"use client";

import type { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import ExtensionCard from "@/components/extensionPage/ExtensionCard";
import ExtensionListViewCard from "../extensionPage/ExtensionListViewCard";
import type { ExtensionData } from "@/context/ExtensionContext";

interface CardRendererProps {
  data: Card;
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
    // Convert the Card object to ExtensionData.
    // Assuming Card has: id (number), title (string), icon (string)
    // and optionally an enabled property.
    const extensionData: ExtensionData = {
      id: data.id.toString(), // convert number to string
      name: data.title,
      enabled:
        (data as unknown as { enabled?: boolean }).enabled !== undefined
          ? (data as unknown as { enabled: boolean }).enabled
          : false,
      iconUrl: data.icon,
    };

    return isListView ? (
      <ExtensionCard extension={extensionData} key={data.id.toString()} />
    ) : (
      <ExtensionListViewCard extension={extensionData} key={data.id.toString()} />
    );
  }

  return isListView ? (
    <ThumbnailCard data={data} key={data.id.toString()} setActiveTab={setActiveTab} />
  ) : (
    <TabCard key={data.id.toString()} data={data} setActiveTab={setActiveTab} />
  );
}
