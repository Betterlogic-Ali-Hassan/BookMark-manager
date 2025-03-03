import { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";
interface Props {
  setActiveTab: (tab: number) => void;
  cards: Card[];
}
const TabsCards = ({ setActiveTab, cards }: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0'>
        {cards.map((data) => (
          <TabCard key={data.id} data={data} setActiveTab={setActiveTab} />
        ))}
      </div>
    </div>
  );
};

export default TabsCards;
