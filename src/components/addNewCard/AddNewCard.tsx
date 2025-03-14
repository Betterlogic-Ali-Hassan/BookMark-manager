import Heading from "./Heading";

import Stepper from "./Stepper";

import StepContent from "./StepContent";
import { FormProvider } from "@/context/from-Context";
import { DialogClose } from "../ui/dialog";
import CrossIcon from "../svgs/CrossIcon";

const AddNewCard = () => {
  return (
    <FormProvider>
      <div className='flex items-center flex-col  justify-center relative mx-2 '>
        <DialogClose className='bg-card p-3  rounded-full text-text max-w-fit  absolute -top-[60px] lg:right-[29%] right-1 opacity-80 hover:opacity-100 '>
          <CrossIcon />
        </DialogClose>
        <div className='w-full max-w-3xl bg-hover p-6 rounded-lg'>
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
