import { categoriesData } from "@/constant/categoriesData";
import DropDown from "./DropDown";
import TopNav from "./TopNav";
import { usePageContext } from "@/context/PageContext";

const TopBar = () => {
  const { page } = usePageContext();
  return (
    <>
      <div className='hidden lg:block'></div>
      {page === "history" ? (
        <div className='hidden lg:block'></div>
      ) : (
        <TopNav categoriesData={categoriesData} />
      )}
      <DropDown />
    </>
  );
};

export default TopBar;
