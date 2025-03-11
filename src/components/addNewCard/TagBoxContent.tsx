import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";

import { toast } from "react-toastify";

import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";

import { usePageContext } from "@/context/PageContext";

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

  const { setPage } = usePageContext();

  const handleSaveBtn = () => {
    setIsLoading(true);

    setTimeout(() => {
      setPage("home");
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
          showSaveBtn
          nextBtnClick={handleSaveBtn}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default TagBoxContent;
