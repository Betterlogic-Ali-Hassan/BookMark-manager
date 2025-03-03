import Heading from "./Heading";

import Stepper from "./Stepper";

import StepContent from "./StepContent";
import { FormProvider } from "@/context/from-Context";

const AddNewCard = () => {
  return (
    <FormProvider>
      <div className='bg-neutral-200 dark:bg-black min-h-screen p-0 sm:p-8 flex flex-col items-center'>
        <div className='w-full max-w-3xl'>
          <Heading />
          <div className='flex flex-col gap-6 sm:gap-8 overflow-hidden sm:overflow-visible'>
            <Stepper />
            <StepContent />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddNewCard;
