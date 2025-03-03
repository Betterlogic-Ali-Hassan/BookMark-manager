import { categoriesData } from "@/constant/categoriesData";
import DropDown from "./DropDown";
import TopNav from "./TopNav";

const TopBar = () => {
  return (
    <>
      <div className='hidden lg:block'></div>
      <TopNav categoriesData={categoriesData} />
      <DropDown />
    </>
  );
};

export default TopBar;
