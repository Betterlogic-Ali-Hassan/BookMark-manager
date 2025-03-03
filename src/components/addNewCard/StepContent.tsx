import { useFormContext } from "@/context/from-Context";

import LinkInput from "./LinkInput";
import TextBox from "./TextBox";
import TagBoxContent from "./TagBoxContent";

const StepContent = () => {
  const { currentStep } = useFormContext();
  return (
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      {currentStep === 0 && <LinkInput />}
      {currentStep === 1 && <TextBox />}
      {currentStep === 2 && <TagBoxContent />}
    </div>
  );
};

export default StepContent;
