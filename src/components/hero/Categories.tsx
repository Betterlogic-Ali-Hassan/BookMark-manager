"use client";

import { categoriesData } from "@/constant/categoriesData";
import { useBookmarks } from "@/context/BookmarkContext";
import {
  filterCardsByCategory,
  getCategoryCounts,
  getCategoryName,
} from "@/lib/category-utils";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

const Categories = ({ className }: { className?: string }) => {
  const {
    toggleCategory,
    selectedCategories,
    setSelectedCategories,
    cards,
    setCards,
  } = useBookmarks();
  const [allCards] = useState(cards);
  const categoryCounts = useMemo(() => getCategoryCounts(cards), [cards]);

  useEffect(() => {
    const filteredCards = filterCardsByCategory(allCards, selectedCategories);
    setCards(filteredCards);
  }, [selectedCategories, allCards, setCards]);

  useEffect(() => {
    setSelectedCategories([]);
    setCards(allCards);
  }, [setCards, setSelectedCategories, allCards]);

  return (
    <div
      className={cn(
        "hidden lg:block w-[260px] justify-self-end overflow-x-hidden overflow-y-auto no-scrollbar py-2",
        className
      )}
    >
      <div className='flex flex-col gap-1.5 lg:gap-0 lg:items-end lg:pr-2'>
        {categoriesData.map((category, i) => (
          <div key={i}>
            <button
              onClick={getCategoryName(category.id, toggleCategory)}
              type='button'
              className={cn(
                "text-foreground hover:text-text group focus:outline-none max-w-[260px] cursor-pointer flex gap-0.5 text-sm items-center",
                selectedCategories.includes(category.id) &&
                  "font-medium text-brand hover:text-brand"
              )}
            >
              <span className='group-focus-visible:ring-1 ring-0 rounded ring-inset ring-border leading-1 whitespace-nowrap truncate grow text-right p-2'>
                {category.name}
              </span>
              <span
                className={cn(
                  "w-8 text-left shrink whitespace-nowrap truncate text-foreground",
                  selectedCategories.includes(category.id) &&
                    "font-medium text-brand hover:text-brand"
                )}
              >
                {categoryCounts[category.id] || 0}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
