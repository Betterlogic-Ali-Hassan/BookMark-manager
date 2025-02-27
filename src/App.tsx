import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import { Card } from "./types/TabCardType";
import { tabsData } from "./constant/tabsData";
import AddBookmark from "./pages/AddBookmark";

const App = () => {
  const cards: Card[] = tabsData;
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCardUrl, setSelectedCardUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const toggleCard = (id: number, url: string) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
    setSelectedCardUrl(url);
  };
  const selectAll = () => {
    setSelectedCards(cards.map((_, index) => index));
  };

  const clearSelection = () => {
    setSelectedCards([]);
  };
  const toggleCategory = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

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
  }, [selectedCategories, searchTerm, cards]);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              selectAll={selectAll}
              showSelectionCard={showSelectionCard}
              setShowCardDetail={setShowCardDetail}
              clearSelection={clearSelection}
              setShowSelectionCard={setShowSelectionCard}
              cards={cards}
              toggleCategory={toggleCategory}
              filteredCards={filteredCards}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              toggleCard={toggleCard}
              selectedCardUrl={selectedCardUrl}
              selectedCards={selectedCards}
              showCardDetail={showCardDetail}
            />
          }
        ></Route>
        <Route
          path='/search'
          element={
            <Search
              selectedCardUrl={selectedCardUrl}
              toggleCategory={toggleCategory}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              showCardDetail={showCardDetail}
              setShowSelectionCard={setShowSelectionCard}
              clearSelection={clearSelection}
              toggleCard={toggleCard}
              setShowCardDetail={setShowCardDetail}
              selectedCards={selectedCards}
              showSelectionCard={showSelectionCard}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              filteredCards={filteredCards}
            />
          }
        ></Route>
        <Route path='/new' element={<AddBookmark />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
