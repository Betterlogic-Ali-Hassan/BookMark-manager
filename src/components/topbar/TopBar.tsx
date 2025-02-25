import { categoriesData } from "@/constant/categoriesData";
import DropDown from "./DropDown";
import TopNav from "./TopNav";
interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
  count: number;
  selectedCategories: number[];
  setSelectedCategories: (categories: number[]) => void;
  toggleCategory: (categoryId: number) => void;
}
const TopBar = ({
  setShowSelectionCard,
  showSelectionCard,
  selectAll,
  setShowCardDetail,
  clearSelection,
  count,
  selectedCategories,
  setSelectedCategories,
  toggleCategory,
}: Props) => {
  return (
    <>
      <div className='hidden lg:block'></div>
      <TopNav
        categoriesData={categoriesData}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        toggleCategory={toggleCategory}
      />
      <DropDown
        count={count}
        setShowCardDetail={setShowCardDetail}
        selectAll={selectAll}
        setShowSelectionCard={setShowSelectionCard}
        showSelectionCard={showSelectionCard}
        clearSelection={clearSelection}
      />
    </>
  );
};

export default TopBar;
