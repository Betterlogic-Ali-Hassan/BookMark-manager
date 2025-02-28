import { useState } from "react";
import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { categoriesData } from "@/constant/categoriesData";
import { cn } from "@/lib/utils";
type Tags = {
  name: string;
  id: number;
};
interface Props {
  setShowLinkInput?: (show: boolean) => void;
  setShowTextBox?: (show: boolean) => void;
  setShowTagBox?: (show: boolean) => void;
  actionBtns?: boolean;
  className?: string;
  selectedCardTags?: Tags[];
}
const TagBoxContent = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
  actionBtns,
  className,
}: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePrevBtn = () => {
    if (setShowLinkInput && setShowTextBox && setShowTagBox) {
      setShowLinkInput(false);
      setShowTextBox(true);
      setShowTagBox(false);
    }
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
    <>
      <div className={cn("px-4 py-6 sm:p-8", className)}>
        <TagBox categoriesData={categoriesData} />
      </div>
      {!actionBtns && (
        <ActionBtns
          prevBtnClick={handlePrevBtn}
          saveBtn
          nextBtnClick={handleSaveBtn}
          loading={loading}
        />
      )}
    </>
  );
};

export default TagBoxContent;
