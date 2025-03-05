import type { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
import HourlyLog from "../HourlyLog";
import { usePageContext } from "@/context/PageContext";

interface Props {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}

const TabsCards = ({ setActiveTab, cards }: Props) => {
  const { isListView } = useThumbnailToggler();
  const { page } = usePageContext();
  const isShowHourlyLog = page !== "home";

  // Helper function to render cards based on view type
  const renderCard = (data: Card) => {
    return isListView ? (
      <ThumbnailCard data={data} key={data.id} setActiveTab={setActiveTab} />
    ) : (
      <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
    );
  };

  // Container classes based on view type
  const containerClasses = cn(
    "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0",
    isListView && "grid grid-cols-3 gap-6 gap-x-4"
  );

  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      {/* Top hourly log */}
      {isShowHourlyLog && <HourlyLog />}

      <div className={containerClasses}>
        {cards.slice(0, 10).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(10, 30).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(30, 45).map(renderCard)}
        {isShowHourlyLog && <HourlyLog />}
        {cards.slice(45).map(renderCard)}
      </div>
    </div>
  );
};

export default TabsCards;
