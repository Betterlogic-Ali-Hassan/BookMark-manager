"use client";

import TagBox from "../TagBox";
import ActionBtns from "./ActionBtns";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

import { useBookmarks } from "@/context/BookmarkContext";
import type { Card } from "@/types/TabCardType";
import { useFormContext } from "@/context/from-Context";

interface TagBoxContentProps {
  actionBtns?: boolean;
  className?: string;
}

const TagBoxContent = ({
  actionBtns = false,
  className = "",
}: TagBoxContentProps) => {
  const { prevStep, resetForm, isLoading, setIsLoading, formData } =
    useFormContext();
  const { addCard } = useBookmarks();

  const handleSaveBtn = () => {
    setIsLoading(true);

    const newCard: Card = {
      id: Date.now(),
      title: formData.title,
      icon: `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${formData.url}/&size=32`,
      path: formData.url,
      des: formData.description,
      tags: formData.tags.map((tag) => ({
        id: crypto.randomUUID(),
        name: tag,
      })),
    };

    addCard(newCard);
    toast.success("Bookmark Added");

    setTimeout(() => {
      setIsLoading(false);
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
