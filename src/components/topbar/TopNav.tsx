import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtn from "../SliderBtn";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const navigate = useNavigate();
  const location = useLocation();
  const handleClearFilter = () => {
    setSelectedCategories([]);
  };
  const handleToggleCategory = (categoryId: number) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    toggleCategory(categoryId);
  };

  return (
    <div className='lg:h-[3.25rem]'>
      <div className='relative w-full px-2 lg:px-0 py-2 border-b lg:border-none border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 lg:bg-neutral-200 dark:lg:bg-black'>
        <div className='flex overflow-hidden items-center'>
          <div className='flex overflow-x-auto no-scrollbar relative'>
            <Swiper
              modules={[Navigation]}
              slidesPerView='auto'
              navigation={{ nextEl: "#next1", prevEl: "#prev1" }}
              className='mySwiper w-[768px] relative'
            >
              <SliderBtn
                icon={
                  <ChevronRight size={18} className='text-dark !fill-none' />
                }
                id='next1'
                className='right-0 h-7 w-7'
              />
              {selectedCategories.length > 0 && (
                <SwiperSlide className='max-w-fit'>
                  <button
                    className='focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-700 dark:ring-neutral-300 rounded h-9 text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white inline-flex items-center text-sm font-semibold px-2 mr-2'
                    onClick={handleClearFilter}
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
                  </button>
                </SwiperSlide>
              )}
              {selectedCategories.map((categoryId, i) => {
                const category = categoriesData.find(
                  (cat) => cat.id === categoryId
                );
                return (
                  <SwiperSlide className='max-w-fit'>
                    <button
                      className='focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-700 dark:ring-neutral-300 rounded h-9 text-white hover:text-white dark:text-neutral-300 bg-blue-500 hover:bg-blue-400 dark:bg-blue-300/20 dark:hover:bg-blue-300/30 justify-center dark:hover:text-white inline-flex items-center text-sm font-semibold px-2 mr-2'
                      key={i}
                      onClick={() => handleToggleCategory(categoryId)}
                    >
                      {category?.name}
                    </button>
                  </SwiperSlide>
                );
              })}
              {selectedCategories.length === 0 &&
                categoriesData.slice(0, 5).map((category, i) => (
                  <SwiperSlide className='max-w-fit'>
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
                icon={
                  <ChevronLeft size={18} className='text-dark !fill-none' />
                }
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
