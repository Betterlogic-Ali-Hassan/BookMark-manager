"use client";

import { categories } from "@/constant/categories";
import { useBookmarks } from "@/context/BookmarkContext";
import { usePageContext } from "@/context/PageContext";
import { getCategoryCounts, getCategoryName } from "@/lib/category-utils";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import DialogBox from "../../modals/DialogBox";
import TagBox from "../TagBox";
import { DialogClose } from "../ui/dialog";
import CrossIcon from "../svgs/CrossIcon";

const Categories = ({ className }: { className?: string }) => {
  const {
    toggleCategory,
    selectedCategories,
    filteredCards,
    categories: categoriesData,
  } = useBookmarks();
  const { page } = usePageContext();
  const categoryCounts = useMemo(
    () => getCategoryCounts(filteredCards),
    [filteredCards]
  );
  const isDownloadPage = page === "downloads";
  console.log(categoriesData);
  const categoryData = isDownloadPage ? categories : categoriesData;
  return (
    <div
      className={cn(
        "hidden lg:block w-[260px] justify-self-end overflow-x-hidden max-h-[400px] overflow-y-auto no-scrollbar py-2",
        className
      )}
    >
      <div className='flex flex-col gap-1.5 lg:gap-0 lg:items-end lg:pr-2'>
        <h2
          className={cn(
            "  w-[60px] text-foreground opacity-60 font-medium",
            isDownloadPage && "mr-4"
          )}
        >
          Filters
        </h2>
        {categoryData.map((category, i) => (
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
        {!isDownloadPage && (
          <DialogBox
            trigger={
              <button className='bg-brand p-2 rounded mr-5 mt-1 text-white '>
                Add New
              </button>
            }
          >
            <div className='flex items-center justify-center flex-col'>
              <DialogClose className='bg-card p-3  rounded-full text-text max-w-fit  absolute -top-[40px] right-[30%] opacity-80 hover:opacity-100 '>
                <CrossIcon />
              </DialogClose>
              <div className=' bg-card p-6 rounded-lg  max-w-3xl'>
                <TagBox />
              </div>
            </div>
          </DialogBox>
        )}
      </div>
    </div>
  );
};

export default Categories;
