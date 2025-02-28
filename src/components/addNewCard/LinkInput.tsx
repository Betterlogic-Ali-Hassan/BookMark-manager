import PasteLinkInput from "./PasteLinkInput";
interface Props {
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
}
const LinkInput = ({ setShowLinkInput, setShowTextBox }: Props) => {
  return (
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      <PasteLinkInput
        setShowLinkInput={setShowLinkInput}
        setShowTextBox={setShowTextBox}
      />
    </div>
  );
};

export default LinkInput;
