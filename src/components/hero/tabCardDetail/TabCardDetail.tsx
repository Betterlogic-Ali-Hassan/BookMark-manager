import Badge from "@/components/ui/Badge";
import ActionsBtns from "./ActionsBtns";
import CloseBtn from "./CloseBtn";
import TabCardHeading from "./TabCardHeading";
import { cn } from "@/lib/utils";
import SelectionCard from "../selectionCard/SelectionCard";
import { useBookmarks } from "@/context/BookmarkContext";
import { Card } from "@/types/TabCardType";

interface Props {
  activeTab: number;
  cards: Card[];
}
const TabCardDetail = ({ activeTab, cards }: Props) => {
  const { showCardDetail } = useBookmarks();
  const activeTabData = cards.find((tab) => tab.id === activeTab);
  return (
    <>
      <div
        className={cn(
          "hidden  relative  opacity-0 translate-x-[50%] transition-all duration-300",
          showCardDetail && "opacity-100 lg:block translate-x-0"
        )}
      >
        <div className='sticky top-0 left-0 w-full max-w-md min-w-72 text-white ml-2'>
          <div>
            <div className='py-5 p-6 bg-white dark:bg-neutral-900 rounded-md'>
              <div className='relative flex flex-col gap-5'>
                <TabCardHeading
                  title={activeTabData?.title}
                  icon={activeTabData?.icon}
                />
                <div className='text-sm overflow-hidden truncate'>
                  <a
                    target='_blank'
                    rel='noopener'
                    title='Open'
                    className='text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300'
                    href={activeTabData?.path}
                  >
                    {activeTabData?.path}
                  </a>
                </div>
                <div className='text-sm text-neutral-600 dark:text-neutral-300'>
                  {activeTabData?.des}
                </div>
                <div className='flex flex-wrap gap-1.5 text-neutral-600 dark:text-neutral-300'>
                  {activeTabData?.tags.map((tag, id) => (
                    <Badge text={tag.name} key={id} />
                  ))}
                </div>
                <div className='flex items-center gap-5'>
                  <div className='text-xs text-neutral-600 dark:text-neutral-300'>
                    Updated on 11/20/2024
                  </div>
                  <div className='text-xs text-neutral-600 dark:text-neutral-300'>
                    Added on 11/5/2024
                  </div>
                </div>
                <hr className='border-neutral-200 dark:border-neutral-700' />
                <ActionsBtns url={activeTabData?.path} />
                <CloseBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectionCard />
    </>
  );
};

export default TabCardDetail;
