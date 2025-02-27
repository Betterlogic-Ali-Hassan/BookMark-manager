import { useState } from "react";
import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
interface Props {
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
  setShowTagBox: (show: boolean) => void;
}
const TextBox = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
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
      setShowLinkInput(false);
      setShowTextBox(false);
      setShowTagBox(true);
      localStorage.setItem("titleValue", title);
      localStorage.setItem("descriptionValue", description);
    }
  };
  const handlePrevBtn = () => {
    setShowLinkInput(true);
    setShowTextBox(false);
    setShowTagBox(false);
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
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      <div className='px-4 py-6 sm:p-8'>
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
      <ActionBtns
        nextBtnClick={handleNextBtn}
        prevBtnClick={handlePrevBtn}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default TextBox;
