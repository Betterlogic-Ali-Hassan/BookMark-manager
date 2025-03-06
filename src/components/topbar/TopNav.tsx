import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtn from "../SliderBtn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageContext } from "@/context/PageContext";
import Button from "../ui/button";

interface Props {
  className?: string;
  categoriesData: {
    name: string;
    count: number;
    id: number;
  }[];
}
const TopNav = ({ className, categoriesData }: Props) => {
  const { page, setPage } = usePageContext();
  const { setSelectedCategories, toggleCategory, selectedCategories } =
    useBookmarks();
  const handleClearFilter = () => {
    setSelectedCategories([]);
  };
  const handleToggleCategory = (categoryId: number) => {
    if (page !== "home") {
      setPage("home");
    }
    toggleCategory(categoryId);
  };

  return (
    <div className='lg:h-[3.25rem]'>
      <div className='relative w-full px-2 lg:px-0 py-2 border-b lg:border-none border-border '>
        <div className='flex overflow-hidden items-center'>
          <div className='flex overflow-x-auto no-scrollbar relative'>
            <Swiper
              modules={[Navigation]}
              slidesPerView='auto'
              navigation={{ nextEl: "#next1", prevEl: "#prev1" }}
              className='mySwiper w-[768px] relative'
            >
              <SliderBtn
                icon={<ChevronRight size={18} className='text-black' />}
                id='next1'
                className='right-0 h-7 w-7'
              />
              {selectedCategories.length > 0 && (
                <SwiperSlide className='max-w-fit'>
                  <Button
                    onClick={handleClearFilter}
                    className='h-9 px-2 mr-2 bg-transparent hover:bg-transparent ring-0'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      ></path>
                    </svg>
                    <span>All</span>
                  </Button>
                </SwiperSlide>
              )}
              {selectedCategories.map((categoryId, i) => {
                const category = categoriesData.find(
                  (cat) => cat.id === categoryId
                );
                return (
                  <SwiperSlide className='max-w-fit' key={i}>
                    <Button
                      className='h-9 px-2 mr-2 bg-brand text-white hover:bg-brand-hover ring-0'
                      key={i}
                      onClick={() => handleToggleCategory(categoryId)}
                    >
                      {category?.name}
                    </Button>
                  </SwiperSlide>
                );
              })}
              {selectedCategories.length === 0 &&
                categoriesData.slice(0, 5).map((category, i) => (
                  <SwiperSlide className='max-w-fit' key={i}>
                    <button
                      className={cn(
                        "focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-700 dark:ring-neutral-300 rounded h-9 text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white inline-flex items-center text-sm font-semibold px-2 mr-2",
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
                icon={<ChevronLeft size={18} className='text-black' />}
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
