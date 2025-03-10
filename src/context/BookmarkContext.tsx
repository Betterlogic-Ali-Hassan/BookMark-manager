"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Card } from "../types/TabCardType";
import { usePageContext } from "./PageContext";

// Define types
type Tags = { id: number; name: string }[];
type BookmarkContextType = {
  cards: Card[];
  selectedCards: number[];
  selectedCardUrls: string[];
  selectedCategories: number[];
  searchTerm: string;
  showCardDetail: boolean;
  showSelectionCard: boolean;
  toggleCard: (id: number, url: string, tags: Tags) => void;
  toggleCategory: (categoryId: number) => void;
  setSearchTerm: (term: string) => void;
  setShowCardDetail: (show: boolean) => void;
  setShowSelectionCard: (show: boolean) => void;
  selectAll: () => void;
  clearSelection: () => void;
  setSelectedCategories: (categories: number[]) => void;
  setCards: (cards: Card[]) => void;
  filteredCards: Card[];
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const [selectedCardUrls, setSelectedCardUrls] = useState<string[]>([]);
  const { page } = usePageContext();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarksTree = await chrome.bookmarks.getTree();
        const bookmarks: Card[] = [];

        const processBookmarkNode = async (node: chrome.bookmarks.BookmarkTreeNode) => {
          if (node.url) {
            const fetchFavicon = async (url: string) => {
              try {
                const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&size=32&url=${encodeURIComponent(url)}`;
                const response = await fetch(faviconUrl);
                const blob = await response.blob();
            
                return new Promise<string>((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onloadend = () => resolve(reader.result as string);
                  reader.onerror = reject;
                  reader.readAsDataURL(blob);
                });
              } catch (error) {
                console.error("Error fetching favicon:", error);
                return "https://example.com/fallback-icon.png"; // Fallback icon
              }
            };
            

            const faviconUrl = await fetchFavicon(node.url);

            bookmarks.push({
              id: Number(node.id),
              title: node.title,
              path: node.url,
              des: "",
              icon: faviconUrl,
              tags: [],
              enabled: undefined,
              iconUrl: ""
            });
          }
          if (node.children) {
            for (const child of node.children) {
              await processBookmarkNode(child);
            }
          }
        };

        for (const node of bookmarksTree) {
          await processBookmarkNode(node);
        }

        console.log("Fetched Bookmarks:", bookmarks);
        setCards(bookmarks);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetData = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedCards([]);
    setSelectedCardUrls([]);
    setShowCardDetail(false);
    setShowSelectionCard(false);
  };

  useEffect(() => {
    resetData();
  }, [page]);

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

  const toggleCategory = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
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
