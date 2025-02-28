import { Card } from "@/types/TabCardType";
import Categories from "./Categories";
import TabsArea from "./TabsArea";
type Tags = {
  name: string;
  id: number;
};
interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  cards: Card[];
  selectedCards: number[];
  clearSelection: () => void;
  toggleCard: (cardId: number, url: string, tag: Tags[]) => void;
  setShowCardDetail: (show: boolean) => void;
  showCardDetail: boolean;
  selectedCardUrls: string[];
  categoryCounts: { [key: number]: number };
  toggleCategory: (categoryId: number) => void;
}
const Hero = ({
  selectedCardUrls,
  setShowSelectionCard,
  showSelectionCard,
  cards,
  selectedCards,
  clearSelection,
  toggleCard,
  setShowCardDetail,
  showCardDetail,
  categoryCounts,
  toggleCategory,
}: Props) => {
  return (
    <>
      <Categories
        categoryCounts={categoryCounts}
        toggleCategory={toggleCategory}
      />
      <TabsArea
        selectedCardUrls={selectedCardUrls}
        toggleCard={toggleCard}
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        cards={cards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
        showCardDetail={showCardDetail}
        setShowCardDetail={setShowCardDetail}
      />
    </>
  );
};

export default Hero;
