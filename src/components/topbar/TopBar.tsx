import { categoriesData } from "@/constant/categoriesData";
import DropDown from "./DropDown";
import TopNav from "./TopNav";
import { usePageContext } from "@/context/PageContext";
import { categories } from "@/constant/categories";
import History from "../historyPage/History";

const TopBar = () => {
  const { page } = usePageContext();
  const isDownloadPage = page === "downloads";
  const categoryData = isDownloadPage ? categories : categoriesData;
  return (
    <>
      <div className='hidden lg:block'></div>
      {page === "history" ? (
        <History />
      ) : (
        <TopNav categoriesData={categoryData} />
      )}
      <DropDown />
    </>
  );
};

export default TopBar;
