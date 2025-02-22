import { useEffect, useMemo, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import TopBar from "./components/topbar/TopBar";
import { tabsData } from "./constant/tabsData";
import { Card } from "./types/TabCardType";

const App = () => {
  const cards: Card[] = tabsData;
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const toggleCard = (id: number) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };
  const selectAll = () => {
    setSelectedCards(cards.map((_, card) => card));
  };
  const clearSelection = () => {
    setSelectedCards([]);
  };
  const categoryCounts = useMemo(() => {
    const counts: { [key: number]: number } = {};
    cards.forEach((card) => {
      card.tags.forEach((category) => {
        counts[category.id] = (counts[category.id] || 0) + 1;
      });
    });
    return counts;
  }, []);
  useEffect(() => {
    const filtered = cards.filter((card) => {
      const matchesSearch = card.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategories =
        selectedCategories.length === 0 ||
        card.tags.some((tag) => selectedCategories.includes(tag.id));
      return matchesSearch && matchesCategories;
    });
    setFilteredCards(filtered);
  }, [selectedCategories, searchTerm]);
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen  bg-black text-white '>
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
      />
      <Hero
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
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

export default App;
