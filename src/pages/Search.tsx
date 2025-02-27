import TabCardDetail from "@/components/hero/tabCardDetail/TabCardDetail";
import TabsCards from "@/components/hero/TabsCards";
import DataNotFound from "@/components/search/DataNotFound";
import SearchBar from "@/components/search/SearchBar";
import TopNav from "@/components/topbar/TopNav";
import { categoriesData } from "@/constant/categoriesData";
import { cn } from "@/lib/utils";
import { Card } from "@/types/TabCardType";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  filteredCards: Card[];
  toggleCard: (cardId: number, url: string) => void;
  setShowCardDetail: (show: boolean) => void;
  selectedCards: number[];
  showSelectionCard: boolean;
  clearSelection: () => void;
  showCardDetail: boolean;
  setShowSelectionCard: Dispatch<SetStateAction<boolean>>;
  selectedCategories: number[];
  setSelectedCategories: (categories: number[]) => void;
  toggleCategory: (categoryId: number) => void;
  selectedCardUrl: string;
}
const Search = ({
  selectedCardUrl,
  setSearchTerm,
  searchTerm,
  filteredCards,
  toggleCard,
  setShowCardDetail,
  selectedCards,
  showSelectionCard,
  setShowSelectionCard,
  clearSelection,
  showCardDetail,
  selectedCategories,
  setSelectedCategories,
  toggleCategory,
}: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const filteredCategories = categoriesData.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredCategories);
  return (
    <div className='relative bg-neutral-200 dark:bg-black z-30 min-h-screen'>
      <div className='lg:grid grid-cols-[minmax(14rem,1fr)_minmax(32rem,40rem)_minmax(20rem,1fr)] overflow-hidden'>
        <div className='hidden lg:block'></div>
        <div className='w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className='min-h-24 w-full pb-4 px-2'>
            <div
              className={cn(
                " flex flex-wrap gap-2 py-2",
                filteredCategories.length <= 0 && "hidden"
              )}
            >
              {searchTerm !== "" && (
                <TopNav
                  categoriesData={filteredCategories}
                  setSelectedCategories={setSelectedCategories}
                  toggleCategory={toggleCategory}
                  selectedCategories={selectedCategories}
                  className='mr-2 bg-[#ffffff1a] hover:bg-[#fff3] text-white font-semibold'
                />
              )}
            </div>
            <div className='flex flex-col gap-2 py-2'>
              {searchTerm !== "" && (
                <TabsCards
                  setActiveTab={setActiveTab}
                  cards={filteredCards}
                  toggleCard={toggleCard}
                  setShowCardDetail={setShowCardDetail}
                  selectedCards={selectedCards}
                  showSelectionCard={showSelectionCard}
                />
              )}
              {filteredCards.length <= 0 && (
                <DataNotFound searchTerm={searchTerm} />
              )}
            </div>
          </div>
        </div>
        <div className='hidden relative lg:block pt-2'>
          <TabCardDetail
            selectedCardUrl={selectedCardUrl}
            cards={filteredCards}
            activeTab={activeTab}
            clearSelection={clearSelection}
            selectedCards={selectedCards}
            showSelectionCard={showSelectionCard}
            setShowSelectionCard={setShowSelectionCard}
            showCardDetail={showCardDetail}
            setShowCardDetail={setShowCardDetail}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
