import { categoriesData } from "@/constant/categoriesData";
import ActionBtns from "./ActionBtns";
import TagBox from "../TagBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
  setShowTagBox: (show: boolean) => void;
}
const TagsBox = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
}: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePrevBtn = () => {
    setShowLinkInput(false);
    setShowTextBox(true);
    setShowTagBox(false);
  };
  const handleSaveBtn = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
      toast.success("Bookmark Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.clear();
    }, 2000);
  };
  return (
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      <div className='px-4 py-6 sm:p-8'>
        <TagBox categoriesData={categoriesData} />
      </div>
      <ActionBtns
        prevBtnClick={handlePrevBtn}
        saveBtn
        nextBtnClick={handleSaveBtn}
        loading={loading}
      />
    </div>
  );
};

export default TagsBox;
