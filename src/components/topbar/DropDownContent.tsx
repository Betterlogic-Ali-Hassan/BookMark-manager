import { useBookmarks } from "@/context/BookmarkContext";
import SelectIcon from "../svgs/SelectIcon";
import CrossIcon from "../svgs/CrossIcon";

const DropDownContent = () => {
  const {
    setShowSelectionCard,
    selectAll,
    setShowCardDetail,
    clearSelection,
    showSelectionCard,
  } = useBookmarks();

  const toggleSelectionCard = (show: boolean) => {
    console.log("toggleSelectionCard", show);
    setShowSelectionCard(show);
    setShowCardDetail(false);
    if (!show) clearSelection();
  };

  return (
    <div className='absolute right-2 top-10 lg:right-1 lg:top-7 z-30 w-48 origin-top-right rounded bg-card py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
      {!showSelectionCard && (
        <DropDownButton
          onClick={() => toggleSelectionCard(true)}
          icon={<SelectIcon />}
          text='Select multiple'
        />
      )}
      <DropDownButton
        onClick={() => {
          setShowSelectionCard(true);
          selectAll();
        }}
        icon={<SelectIcon />}
        text='Select all'
      />
      {showSelectionCard && (
        <DropDownButton
          onClick={() => toggleSelectionCard(false)}
          icon={<CrossIcon />}
          text='Cancel selection'
        />
      )}
    </div>
  );
};

const DropDownButton = ({
  onClick,
  icon,
  text,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}) => (
  <button
    className='px-4 py-2 text-sm text-text text-start w-full flex items-center gap-3 hover:bg-hover'
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default DropDownContent;
