import { Card } from "@/types/TabCardType";
// import TabCard from "./TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
interface Props {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}
const TabsCards = ({ cards }: Props) => {
  return (
    <div className='max-w-[970px]'>
      {/* <div className='flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0'> */}
      <div className='grid grid-cols-3 gap-6 mt-2 '>
        {cards.map((data) => (
          // <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
          <ThumbnailCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default TabsCards;
