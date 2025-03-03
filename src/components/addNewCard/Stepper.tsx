import { useFormContext } from "@/context/from-Context";
import { cn } from "@/lib/utils";

const Stepper = () => {
  const { currentStep, goToStep, validateCurrentStep } = useFormContext();

  const steps = [
    { name: "Link", srText: "Link" },
    { name: "Info", srText: "Info" },
    { name: "Tags", srText: "Tags" },
  ];

  const handleStepClick = (stepIndex: number) => {
    // Only allow clicking on previous steps or current step
    if (stepIndex <= currentStep) {
      goToStep(stepIndex);
    } else if (stepIndex === currentStep + 1) {
      // Try to go to the next step if current step is valid
      if (validateCurrentStep()) {
        goToStep(stepIndex);
      }
    }
  };
  return (
    <nav className='mx-auto' aria-label='Progress'>
      <ol className='flex items-center'>
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = currentStep > index;

          return (
            <li
              key={step.name}
              className='relative pr-8 sm:pr-20 last:pr-0 last:sm:pr-0'
              onClick={() => handleStepClick(index)}
            >
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='h-0.5 w-full bg-neutral-300 dark:bg-neutral-700'></div>
              </div>
              <button
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full group border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400",
                  isCompleted &&
                    "dark:bg-blue-400 bg-blue-600 border-blue-600 dark:border-blue-400",
                  isActive && "border-blue-600 dark:border-blue-400"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <svg
                    className='h-5 w-5 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                ) : (
                  <>
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700",
                        isActive &&
                          "bg-blue-600 dark:bg-blue-400 dark:group-hover:bg-blue-400"
                      )}
                    ></span>
                    <span className='sr-only'>{step.srText}</span>
                  </>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Stepper;
