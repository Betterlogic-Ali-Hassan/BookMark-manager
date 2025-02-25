import { useMemo } from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import TopBar from "@/components/topbar/TopBar";
import { Card } from "@/types/TabCardType";
interface Props {
  filteredCards: Card[];
  cards: Card[];
  toggleCategory: (categoryId: number) => void;
  selectedCategories: number[];
  setSelectedCategories: (categories: number[]) => void;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
  toggleCard: (cardId: number) => void;
  showCardDetail: boolean;
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectedCards: number[];
}
const Home = ({
  filteredCards,
  cards,
  toggleCategory,
  selectedCategories,
  setSelectedCategories,
  setShowSelectionCard,
  selectAll,
  showSelectionCard,
  setShowCardDetail,
  clearSelection,
  toggleCard,
  selectedCards,
  showCardDetail,
}: Props) => {
  const categoryCounts = useMemo(() => {
    const counts: { [key: number]: number } = {};
    cards.forEach((card) => {
      card.tags.forEach((category) => {
        counts[category.id] = (counts[category.id] || 0) + 1;
      });
    });
    return counts;
  }, [cards]);
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen bg-black text-white'>
      <Header />
      <TopBar
        count={filteredCards.length}
        selectAll={selectAll}
        setShowSelectionCard={setShowSelectionCard}
        showSelectionCard={showSelectionCard}
        setShowCardDetail={setShowCardDetail}
        clearSelection={clearSelection}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        toggleCategory={toggleCategory}
      />
      <Hero
        toggleCategory={toggleCategory}
        toggleCard={toggleCard}
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        cards={filteredCards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
        showCardDetail={showCardDetail}
        setShowCardDetail={setShowCardDetail}
        categoryCounts={categoryCounts}
      />
    </div>
  );
};

export default Home;
