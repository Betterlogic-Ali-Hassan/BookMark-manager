import { Card } from "@/types/TabCardType";

export const getCategoryCounts = (cards: Card[]) => {
  const counts: { [key: number]: number } = {};
  cards.forEach((card) => {
    card.tags.forEach((category) => {
      counts[category.id] = (counts[category.id] || 0) + 1;
    });
  });
  return counts;
};


export const getCategoryName = (id: number, toggleCategory: (id: number) => void) => {
  return () => {
    toggleCategory(id);
  };
};
export const filterCardsByCategory = (cards: Card[], selectedCategories: number[]) => {
    if (selectedCategories.length === 0) {
      return cards; 
    }
    return cards.filter((card) =>
      card.tags.some((tag) => selectedCategories.includes(tag.id))
    );
  };