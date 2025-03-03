import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";
import { useBookmarks } from "@/context/BookmarkContext";

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
  const { prevStep, resetForm, isLoading, setIsLoading, formData } =
    useFormContext();
  const { cards, setCards } = useBookmarks();
  const navigate = useNavigate();

  const handleSaveBtn = () => {
    setIsLoading(true);
    const newCard = {
      id: Date.now(),
      icon: `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${formData.url}/&size=32`,
      title: formData.title,
      path: formData.url,
      tags: formData.tags.map((tag, index) => ({
        id: index + 1,
        name: tag,
      })),
      des: formData.description,
    };

    // Update the cards state with the new card
    setCards([...cards, newCard]);

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
