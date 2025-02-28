import { useState } from "react";
import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
interface Props {
  setShowLinkInput?: (show: boolean) => void;
  setShowTextBox?: (show: boolean) => void;
  setShowTagBox?: (show: boolean) => void;
  actionBtns?: boolean;
  className?: string;
}
const TextBoxInputs = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
  actionBtns,
  className,
}: Props) => {
  const [title, setTitle] = useState(localStorage.getItem("titleValue") || "");
  const [description, setDescription] = useState(
    localStorage.getItem("descriptionValue") || ""
  );
  const [error, setError] = useState("");
  const handleNextBtn = () => {
    if (title === "") {
      setError("Title is required");
      return;
    } else {
      setError("");
      if (setShowLinkInput && setShowTextBox && setShowTagBox) {
        setShowLinkInput(false);
        setShowTextBox(false);
        setShowTagBox(true);
      }
      localStorage.setItem("titleValue", title);
      localStorage.setItem("descriptionValue", description);
    }
  };
  const handlePrevBtn = () => {
    if (setShowLinkInput && setShowTextBox && setShowTagBox) {
      setShowLinkInput(true);
      setShowTextBox(false);
      setShowTagBox(false);
    }
    localStorage.setItem("titleValue", title);
    localStorage.setItem("descriptionValue", description);
  };
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setError("");
    localStorage.removeItem("titleValue");
    localStorage.removeItem("descriptionValue");
  };
  return (
    <>
      <div className={cn("px-4 py-6 sm:p-8", className)}>
        <div className='mb-2'>
          <div className='h-24'>
            <label htmlFor='title' className='text-sm font-semibold'>
              Title
            </label>
            <div className='relative mt-2'>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                name='title'
                id='title'
                placeholder='Title'
                className={cn(
                  "input  rounded ",
                  error !== "" && "border-red-600 dark:border-red-400"
                )}
              />
              {error !== "" && (
                <p className='mt-2 text-sm text-red-600 dark:text-red-300'>
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
        <label htmlFor='description' className='text-sm font-semibold '>
          Description (optional)
        </label>
        <div className='relative mt-2'>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name='description'
            id='description'
            placeholder='Description'
            className='input   rounded min-h-[108px] '
          ></textarea>
        </div>
        <div className='h-7'></div>
      </div>
      {!actionBtns && (
        <ActionBtns
          nextBtnClick={handleNextBtn}
          prevBtnClick={handlePrevBtn}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default TextBoxInputs;
