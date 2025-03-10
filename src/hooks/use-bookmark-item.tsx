"use client";

import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";
import { Card } from "@/types/TabCardType";

export function useBookmarkItem(
  data: Card,
  setActiveTab?: (id: number) => void
) {
  const { id, path, tags, icon, title, des } = data;
  const { page } = usePageContext();
  const { toggleCard, showSelectionCard, selectedCards, toggleCategory } =
    useBookmarks();

  const today = new Date().toDateString();

  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id, path, tags);
    if (setActiveTab) setActiveTab(id);
  };

  const selected = selectedCards.includes(data.id);

  return {
    id,
    path,
    tags,
    icon,
    title,
    des,
    page,
    today,
    handleToggle,
    selected,
    showSelectionCard,
    toggleCategory,
  };
}
