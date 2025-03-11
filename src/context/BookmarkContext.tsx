"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Card } from "@/types/TabCardType";
import { tabsData } from "@/constant/tabsData";
import { usePageContext } from "./PageContext";
import { extensions } from "@/constant/extensionData";
import { downloadData } from "@/constant/DownloadsData";

type BookmarkContextType = {
  cards: Card[];
  selectedCards: number[];
  selectedCardUrls: string[];
  selectedCategories: string[];
  searchTerm: string;
  showCardDetail: boolean;
  showSelectionCard: boolean;
  toggleCard: (id: number, url: string) => void;
  toggleCategory: (categoryId: string) => void;
  setSearchTerm: (term: string) => void;
  setShowCardDetail: (show: boolean) => void;
  setShowSelectionCard: (show: boolean) => void;
  selectAll: () => void;
  clearSelection: () => void;
  setSelectedCategories: (categories: string[]) => void;
  setCards: (cards: Card[]) => void;
  filteredCards: Card[];
  addCard: (card: Card) => void;
  deleteCard: (id: number) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

// Helper function to get localStorage key based on page
const getStorageKey = (page: string) => {
  switch (page) {
    case "extensions":
      return "extensions_data";
    case "downloads":
      return "downloads_data";
    default:
      return "tabs_data";
  }
};

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const { page } = usePageContext();

  // Get the appropriate storage key based on current page
  const storageKey = getStorageKey(page);

  // Initialize data from localStorage or fallback to default data
  const getInitialData = () => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        try {
          return JSON.parse(storedData);
        } catch (error) {
          console.error("Error parsing stored data:", error);
          // If there's an error parsing, initialize with default data but save it to localStorage
          const defaultData =
            page === "extensions"
              ? extensions
              : page === "downloads"
              ? downloadData
              : tabsData;
          localStorage.setItem(storageKey, JSON.stringify(defaultData));
          return defaultData;
        }
      } else {
        // If no data in localStorage, initialize with default data but save it to localStorage
        const defaultData =
          page === "extensions"
            ? extensions
            : page === "downloads"
            ? downloadData
            : tabsData;
        localStorage.setItem(storageKey, JSON.stringify(defaultData));
        return defaultData;
      }
    }
    // Fallback to default data if we're on the server
    return page === "extensions"
      ? extensions
      : page === "downloads"
      ? downloadData
      : tabsData;
  };

  const [cards, setCards] = useState<Card[]>(getInitialData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const [selectedCardUrls, setSelectedCardUrls] = useState<string[]>([]);

  // Filter cards based on search term and categories
  const filteredCards = cards.filter((card) => {
    // First filter by search term
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // If no categories selected, just use search filter
    if (selectedCategories.length === 0) {
      return matchesSearch;
    }

    // If categories are selected, check if card has any of the selected categories
    const hasSelectedCategory =
      card.tags && card.tags.some((tag) => selectedCategories.includes(tag.id));

    return matchesSearch && hasSelectedCategory;
  });

  // Reset all state when page changes
  const resetAllState = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedCards([]);
    setSelectedCardUrls([]);
    setShowCardDetail(false);
    setShowSelectionCard(false);
  };

  // When page changes, load data from localStorage and reset all state
  useEffect(() => {
    resetAllState();
    // Load data from localStorage for the new page
    setCards(getInitialData());
  }, [page]);

  // Save cards to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && cards) {
      localStorage.setItem(storageKey, JSON.stringify(cards));
    }
  }, [cards, storageKey]);

  const toggleCard = (id: number, url: string) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );

    setSelectedCardUrls((prev) =>
      prev.includes(url)
        ? prev.filter((cardUrl) => cardUrl !== url)
        : [...prev, url]
    );
  };

  const selectAll = () => {
    setSelectedCards(cards.map((card) => card.id));
    setSelectedCardUrls(cards.map((card) => card.path));
  };

  const clearSelection = () => {
    setSelectedCards([]);
    setSelectedCardUrls([]);
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Add card function - updates state and localStorage
  const addCard = (card: Card) => {
    const updatedCards = [card, ...cards];
    setCards(updatedCards);
  };

  // Delete card function - updates state and localStorage
  const deleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const value = {
    cards: filteredCards,
    filteredCards: cards,
    setSelectedCategories,
    selectedCards,
    selectedCardUrls,
    selectedCategories,
    searchTerm,
    showCardDetail,
    showSelectionCard,
    toggleCard,
    toggleCategory,
    setSearchTerm,
    setShowCardDetail,
    setShowSelectionCard,
    selectAll,
    setCards,
    clearSelection,
    addCard,
    deleteCard,
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
