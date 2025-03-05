import { categoriesData } from "@/constant/categoriesData";
import DropDown from "./DropDown";
import TopNav from "./TopNav";
import { usePageContext } from "@/context/PageContext";

const TopBar = () => {
  const { page } = usePageContext();
  return (
    <>
      <div className='hidden lg:block'></div>
      {page === "home" ? (
        <TopNav categoriesData={categoriesData} />
      ) : (
        <div className='hidden lg:block'></div>
      )}
      <DropDown />
    </>
  );
};

export default TopBar;
