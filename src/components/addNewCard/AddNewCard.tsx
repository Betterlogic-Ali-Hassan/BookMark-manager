import { useState } from "react";
import Heading from "./Heading";
import LinkInput from "./LinkInput";
import Stepper from "./Stepper";
import TagBox from "./TagsBox";
import TextBox from "./TextBox";

const AddNewCard = () => {
  const [showLinkInput, setShowLinkInput] = useState(true);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showTagBox, setShowTagBox] = useState(false);

  return (
    <div className='bg-neutral-200 dark:bg-black min-h-screen p-0 sm:p-8 flex flex-col items-center'>
      <div className='w-full max-w-3xl'>
        <Heading />
        <div className='flex flex-col gap-6 sm:gap-8 overflow-hidden sm:overflow-visible'>
          <Stepper
            showLinkInput={showLinkInput}
            showTextBox={showTextBox}
            showTagBox={showTagBox}
            setShowLinkInput={setShowLinkInput}
            setShowTextBox={setShowTextBox}
            setShowTagBox={setShowTagBox}
          />
          {showLinkInput && !showTextBox && !showTagBox ? (
            <LinkInput
              setShowLinkInput={setShowLinkInput}
              setShowTextBox={setShowTextBox}
            />
          ) : !showLinkInput && showTextBox && !showTagBox ? (
            <TextBox
              setShowLinkInput={setShowLinkInput}
              setShowTextBox={setShowTextBox}
              setShowTagBox={setShowTagBox}
            />
          ) : (
            <TagBox
              setShowLinkInput={setShowLinkInput}
              setShowTextBox={setShowTextBox}
              setShowTagBox={setShowTagBox}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
