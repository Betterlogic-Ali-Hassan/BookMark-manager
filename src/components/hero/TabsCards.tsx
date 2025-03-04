import { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
interface Props {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}
const TabsCards = ({ setActiveTab, cards }: Props) => {
  const { isListView } = useThumbnailToggler();
  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      <div
        className={cn(
          "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0",
          isListView && "grid grid-cols-3 gap-6 gap-x-4  "
        )}
      >
        {cards.map((data) =>
          !isListView ? (
            <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
          ) : (
            <ThumbnailCard
              data={data}
              key={data.id}
              setActiveTab={setActiveTab}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TabsCards;
