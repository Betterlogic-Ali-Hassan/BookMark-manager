import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";
type Tags = {
  name: string;
  id: number;
};
interface Props {
  actionBtns?: boolean;
  className?: string;
  selectedCardTags?: Tags[];
}
const TagBoxContent = ({ actionBtns, className }: Props) => {
  const { prevStep, resetForm, isLoading, setIsLoading } = useFormContext();
  const navigate = useNavigate();

  const handleSaveBtn = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
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

      resetForm();
    }, 2000);
  };

  return (
    <>
      <div className={cn("px-4 py-6 sm:p-8", className)}>
        <TagBox />
      </div>
      {!actionBtns && (
        <ActionBtns
          prevBtnClick={prevStep}
          saveBtn
          nextBtnClick={handleSaveBtn}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default TagBoxContent;
