"use client";

import type React from "react";

import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtn from "../SliderBtn";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Button from "../ui/button";

import ResetFilter from "./ResetFilter";

interface Props {
  className?: string;
  categoriesData: {
    name: string;
    count: number;
    id: number;
  }[];
}
const TopNav = ({ className, categoriesData }: Props) => {
  const { setSelectedCategories, toggleCategory, selectedCategories } =
    useBookmarks();

  const handleToggleCategory = (categoryId: number) => {
    toggleCategory(categoryId);
  };

  const handleRemoveCategory = (categoryId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedCategories = selectedCategories.filter(
      (id) => id !== categoryId
    );
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className='lg:h-[3.25rem]'>
      <div className='relative w-full px-2 lg:px-0 py-2 border-b lg:border-none border-border max-lg:pl-[100px]'>
        <div className='flex overflow-hidden items-center'>
          <div className='flex overflow-x-auto no-scrollbar relative'>
            <Swiper
              modules={[Navigation]}
              slidesPerView='auto'
              navigation={{ nextEl: "#next1", prevEl: "#prev1" }}
              className='mySwiper w-[768px] relative flex'
            >
              <SliderBtn
                icon={<ChevronRight size={18} className='text-text ' />}
                id='next1'
                className='right-0 h-7 w-7'
              />
              <ResetFilter />
              {selectedCategories.map((categoryId, i) => {
                const category = categoriesData.find(
                  (cat) => cat.id === categoryId
                );
                return (
                  <SwiperSlide className='max-w-fit' key={i}>
                    <Button
                      className='h-8 px-4 py-0.5 mr-2 rounded-[20px] bg-brand text-white hover:bg-brand-hover ring-0 relative group'
                      key={i}
                      onClick={() => handleToggleCategory(categoryId)}
                    >
                      {category?.name}
                      <span
                        className='ml-2 inline-flex items-center justify-center rounded-full hover:bg-brand-hover/80'
                        onClick={(e) => handleRemoveCategory(categoryId, e)}
                      >
                        <X size={16} className='text-white' />
                      </span>
                    </Button>
                  </SwiperSlide>
                );
              })}
              {selectedCategories.length === 0 &&
                categoriesData.slice(0, 5).map((category, i) => (
                  <SwiperSlide className='max-w-fit' key={i}>
                    <button
                      className={cn(
                        "focus:outline-none focus-visible:ring-1 ring-inset ring-border rounded h-9 text-foreground hover:text-text inline-flex items-center text-sm font-semibold px-2 mr-2",
                        className
                      )}
                      onClick={() => handleToggleCategory(category.id)}
                      key={i}
                    >
                      {category.name}
                    </button>
                  </SwiperSlide>
                ))}
              <SliderBtn
                icon={<ChevronLeft size={18} className='text-text ' />}
                id='prev1'
                className='left-0 h-7 w-7'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
