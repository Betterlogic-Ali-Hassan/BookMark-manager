import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import MoreIconBtn from "../MoreIconBtn";
// import TabCardDetail from "./tabCardDetail/TabCardDetail";
// import { useBookmarks } from "@/context/BookmarkContext";
import ActionsBtns from "./tabCardDetail/ActionsBtns";
import CloseBtn from "./tabCardDetail/CloseBtn";
import { cn } from "@/lib/utils";
import TabCardHeading from "./tabCardDetail/TabCardHeading";
interface Props {
  activeTab: number;
}
const MobileCardDetail = ({ activeTab }: Props) => {
  //   const { cards } = useBookmarks();

  return (
    <Sheet>
      <SheetTrigger>
        <MoreIconBtn />
      </SheetTrigger>
      <SheetContent side='bottom'>
        <SheetHeader>
          <div
            className={cn(
              "hidden  relative  opacity-0 translate-x-[50%] transition-all duration-300 "
            )}
          >
            <div className='sticky top-0 left-0 w-full max-w-md min-w-72 max-h-[328px] min-h-[328px] text-white ml-2'>
              <div>
                <div className='py-5 p-6 bg-card  rounded-[16px] max-h-[328px] min-h-[328px]'>
                  <div className='relative flex flex-col gap-[18px]'>
                    <TabCardHeading title='Hello' icon='asa' />
                    <div className='text-sm overflow-hidden truncate'>
                      <a
                        target='_blank'
                        rel='noopener'
                        title='Open'
                        className='text-brand hover:text-brand-hover '
                        href='www.google.com'
                      >
                        www.google.com
                      </a>
                    </div>
                    <div className='text-sm text-text '>
                      dfjassfdsadhksfadhk
                    </div>
                    {/* <div className='flex flex-wrap gap-1.5 text-text '>
                      {activeTabData?.tags.map((tag, id) => (
                        <Badge text={tag.name} key={id} />
                      ))}
                    </div> */}
                    <div className='flex items-center gap-5'>
                      <div className='text-xs text-text '>
                        Updated on 11/20/2024
                      </div>
                      <div className='text-xs text-text '>
                        Added on 11/5/2024
                      </div>
                    </div>
                    <hr className='border-neutral-200 dark:border-neutral-700' />
                    <ActionsBtns url='www.google.com' />
                    <CloseBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileCardDetail;
