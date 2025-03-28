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
import { useManagementData } from "@/constant/extensionData";
import { useDownloadData } from "@/constant/DownloadsData";
import { categoriesData } from "@/constant/categoriesData";
import type { Tag } from "@/types/tag";

type BookmarkContextType = {
  cards: Card[];
  selectedCards: number[];
  selectedCardUrls: string[];
  selectedCategories: string[];
  pinCategories: string[];
  searchTerm: string;
  showCardDetail: boolean;
  showSelectionCard: boolean;
  setSelectedCards: (cards: number[]) => void;
  toggleCard: (id: number, url: string) => void;
  toggleCategory: (categoryId: string) => void;
  setSearchTerm: (term: string) => void;
  setShowCardDetail: (show: boolean) => void;
  setShowSelectionCard: (show: boolean) => void;
  selectAll: () => void;
  clearSelection: () => void;
  setSelectedCategories: (categories: string[]) => void;
  setPinCategories: (categories: string[]) => void;
  setCards: (cards: Card[]) => void;
  filteredCards: Card[];
  addCard: (card: Card) => void;
  deleteCard: (id: number | number[]) => void;
  updateCard: (updatedCard: Card) => void;
  categories: Tag[];
  setCategories: (categories: Tag[]) => void;
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

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

const CATEGORIES_STORAGE_KEY = "categories_data";
const getPinCategoriesStorageKey = (page: string) => {
  switch (page) {
    case "extensions":
      return "extensions_pin_categories";
    case "downloads":
      return "downloads_pin_categories";
    default:
      return "tabs_pin_categories";
  }
};

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const { page } = usePageContext();
  const { downloadData } = useDownloadData();
  const { extensionData } = useManagementData();

  const storageKey = getStorageKey(page);
  const getInitialData = () => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        try {
          return JSON.parse(storedData);
        } catch (error) {
          console.error("Error parsing stored data:", error);
          const defaultData =
            page === "extensions"
              ? extensionData
              : page === "downloads"
              ? downloadData
              : tabsData;
          localStorage.setItem(storageKey, JSON.stringify(defaultData));
          return defaultData;
        }
      } else {
        const defaultData =
          page === "extensions"
            ? extensionData
            : page === "downloads"
            ? downloadData
            : tabsData;
        localStorage.setItem(storageKey, JSON.stringify(defaultData));
        return defaultData;
      }
    }
    return page === "extensions"
      ? extensionData
      : page === "downloads"
      ? downloadData
      : tabsData;
  };

  const getInitialCategories = () => {
    if (typeof window !== "undefined") {
      const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY);
      if (storedCategories) {
        try {
          return JSON.parse(storedCategories);
        } catch (error) {
          console.error("Error parsing stored categories:", error);
          localStorage.setItem(
            CATEGORIES_STORAGE_KEY,
            JSON.stringify(categoriesData)
          );
          return categoriesData;
        }
      } else {
        localStorage.setItem(
          CATEGORIES_STORAGE_KEY,
          JSON.stringify(categoriesData)
        );
        return categoriesData;
      }
    }
    return categoriesData;
  };

  const [cards, setCards] = useState<Card[]>(getInitialData);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pinCategories, setPinCategories] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const pinCategoriesKey = getPinCategoriesStorageKey(page);
      const storedPinCategories = localStorage.getItem(pinCategoriesKey);
      if (storedPinCategories) {
        try {
          return JSON.parse(storedPinCategories);
        } catch (error) {
          console.error("Error parsing stored pinned categories:", error);
          return [];
        }
      }
    }
    return [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const [selectedCardUrls, setSelectedCardUrls] = useState<string[]>([]);
  const [categories, setCategories] = useState<Tag[]>(getInitialCategories);

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (selectedCategories.length === 0) {
      return matchesSearch;
    }

    const hasSelectedCategory =
      card.tags && card.tags.some((tag) => selectedCategories.includes(tag.id));

    return matchesSearch && hasSelectedCategory;
  });

  const resetAllState = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedCards([]);
    setSelectedCardUrls([]);
    setShowCardDetail(false);
    setShowSelectionCard(false);
  };

  useEffect(() => {
    resetAllState();

    setCards(getInitialData());
  }, [page]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pinCategoriesKey = getPinCategoriesStorageKey(page);
      const storedPinCategories = localStorage.getItem(pinCategoriesKey);
      if (storedPinCategories) {
        try {
          setPinCategories(JSON.parse(storedPinCategories));
        } catch (error) {
          console.error("Error parsing stored pinned categories:", error);
          setPinCategories([]);
        }
      } else {
        setPinCategories([]);
      }
    }
  }, [page]);

  useEffect(() => {
    if (typeof window !== "undefined" && cards) {
      localStorage.setItem(storageKey, JSON.stringify(cards));
    }
  }, [cards, storageKey]);

  useEffect(() => {
    if (typeof window !== "undefined" && categories) {
      localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pinCategoriesKey = getPinCategoriesStorageKey(page);
      localStorage.setItem(pinCategoriesKey, JSON.stringify(pinCategories));
    }
  }, [pinCategories, page]);

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
    const category = categoryId.toLowerCase();
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((id) => id !== category)
        : [...prev, category]
    );
  };

  const addCard = (card: Card) => {
    const updatedCards = [card, ...cards];
    setCards(updatedCards);
  };

  const deleteCard = (ids: number | number[]) => {
    const idsToDelete = Array.isArray(ids) ? ids : [ids];
    const updatedCards = cards.filter((card) => !idsToDelete.includes(card.id));
    setCards(updatedCards);
  };
  const updateCard = (updatedCard: Card) => {
    const updatedCards = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(updatedCards);
  };

  const value = {
    cards: filteredCards,
    filteredCards: cards,
    setSelectedCategories,
    selectedCards,
    setSelectedCards,
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
    updateCard,
    categories,
    setCategories,
    activeTab,
    setActiveTab,
    pinCategories,
    setPinCategories,
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
