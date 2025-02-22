import DropDown from "./DropDown";
import TopNav from "./TopNav";
interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
  count: number;
}
const TopBar = ({
  setShowSelectionCard,
  showSelectionCard,
  selectAll,
  setShowCardDetail,
  clearSelection,
  count,
}: Props) => {
  return (
    <>
      <div className='hidden lg:block'></div>
      <TopNav />
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
