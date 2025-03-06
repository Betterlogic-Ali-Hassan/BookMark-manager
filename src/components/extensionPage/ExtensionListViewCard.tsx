"use client";

import type React from "react";

import type { Card } from "@/types/TabCardType";
import { Switch } from "../ui/switch";
import { useBookmarks } from "@/context/BookmarkContext";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  data: Card;
  setActiveTab: (tab: number) => void;
  setFavoriteExe: (callback: (prev: Card[]) => Card[]) => void;
  favoriteExe: Card[];
}

const ExtensionListViewCard = ({
  data,
  setActiveTab,
  setFavoriteExe,
  favoriteExe,
}: ExtensionCardProps) => {
  const { title, des, icon, tags, id, path } = data;
  const { toggleCard, showSelectionCard } = useBookmarks();

  const isFavorite = favoriteExe.some((card) => card.id === data.id);

  const addFavoriteExe = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteExe((prev) =>
      isFavorite ? prev.filter((card) => card.id !== data.id) : [...prev, data]
    );
  };

  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id, path, tags);
    setActiveTab(id);
  };

  return (
    <div
      className='p-6 border-border border group rounded-lg bg-card flex gap-12 mb-4 relative cursor-pointer'
      onClick={handleToggle}
    >
      <div className='h-[36px] w-[36px]'>
        <img src={icon || "/placeholder.svg"} alt={title} />
      </div>
      <div className='grow'>
        <h3 className='font-semibold'>{title}</h3>
        <a
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm hover:underline text-brand hover:text-brand-hover'
          onClick={(e) => e.stopPropagation()}
        >
          {path}
        </a>
        <p className='mt-6'>{des}</p>
        <div className='flex items-center justify-between mt-6'>
          <div className='flex items-center gap-4'>
            {tags.map((tag) => (
              <button className='btn rounded' key={tag.id}>
                {tag.name}
              </button>
            ))}
          </div>
          <Switch />
        </div>
      </div>
      <span
        className={cn(
          "cursor-pointer hidden group-hover:block text-text absolute top-6 right-6",
          isFavorite && "block"
        )}
        onClick={addFavoriteExe}
      >
        {isFavorite ? <BsPinFill size={20} /> : <BsPin size={20} />}
      </span>
    </div>
  );
};

export default ExtensionListViewCard;
