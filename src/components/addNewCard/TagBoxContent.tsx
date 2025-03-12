import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";

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

  const handleSaveBtn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Bookmark Added");
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
