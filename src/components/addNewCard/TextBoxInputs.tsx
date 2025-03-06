import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";
interface Props {
  actionBtns?: boolean;
  className?: string;
}
const TextBoxInputs = ({ actionBtns, className }: Props) => {
  const { formData, updateFormData, nextStep, prevStep, errors, resetForm } =
    useFormContext();

  const handleNextBtn = () => {
    nextStep();
  };
  const handlePrevBtn = () => {
    prevStep();
  };
  const handleCancel = () => {
    resetForm();
  };
  const handleInputChange =
    (field: "title" | "description") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateFormData(field, e.target.value);
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
                value={formData.title}
                onChange={handleInputChange("title")}
                type='text'
                name='title'
                id='title'
                placeholder='Title'
                className={cn(
                  "input  rounded ",
                  errors.title && "border-error "
                )}
              />
              {errors.title && (
                <p className='mt-2 text-sm text-error '>{errors.title}</p>
              )}
            </div>
          </div>
        </div>
        <label htmlFor='description' className='text-sm font-semibold '>
          Description (optional)
        </label>
        <div className='relative mt-2'>
          <textarea
            value={formData.description}
            onChange={handleInputChange("description")}
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
