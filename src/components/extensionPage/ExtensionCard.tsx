"use client";

import type React from "react";

import { useBookmarks } from "@/context/BookmarkContext";
import type { Card } from "@/types/TabCardType";
import { Switch } from "../ui/switch";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  data: Card;
  setActiveTab: (tab: number) => void;
  setFavoriteExe: (callback: (prev: Card[]) => Card[]) => void;
  favoriteExe: Card[];
}

const ExtensionCard = ({
  data,
  setActiveTab,
  setFavoriteExe,
  favoriteExe,
}: ExtensionCardProps) => {
  const { title, id, path, tags } = data;
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
      className='bg-card rounded-[24px] max-w-[284px] group p-6 flex flex-col items-start gap-6 cursor-pointer'
      onClick={handleToggle}
    >
      <div className='flex justify-between w-full h-[60px]'>
        <img
          src='https://framerusercontent.com/images/T9qkapeFrr98u1zDjP8vbEdaUs.png'
          alt={title}
          className='h-[60px] w-[60px]'
        />
        <div className='flex gap-5'>
          <span
            className={cn(
              "cursor-pointer text-text hidden group-hover:block",
              isFavorite && "block"
            )}
            onClick={addFavoriteExe}
          >
            {isFavorite ? <BsPinFill size={20} /> : <BsPin size={20} />}
          </span>
          <Switch />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-foreground'>
          A simple journaling app for capturing daily memories with text, photo,
          stickers and video.
        </p>
      </div>
    </div>
  );
};

export default ExtensionCard;
