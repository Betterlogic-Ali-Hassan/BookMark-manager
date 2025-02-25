import ActionsBtns from "./ActionsBtns";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

interface Props {
  setShowSelectionCard: (show: boolean) => void;
}
const Header = ({ setShowSelectionCard }: Props) => {
  return (
    <>
      <Logo />
      <Searchbar setShowSelectionCard={setShowSelectionCard} />
      <ActionsBtns />
    </>
  );
};

export default Header;
