import { useFormContext } from "@/context/from-Context";

import LinkInput from "./LinkInput";
import TextBox from "./TextBox";
import TagBoxContent from "./TagBoxContent";

const StepContent = () => {
  const { currentStep } = useFormContext();
  return (
    <div className='bg-card shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg border  border-border'>
      {currentStep === 0 && <LinkInput />}
      {currentStep === 1 && <TextBox />}
      {currentStep === 2 && <TagBoxContent />}
    </div>
  );
};

export default StepContent;
