import TagBoxContent from "./TagBoxContent";

interface Props {
  setShowLinkInput: (show: boolean) => void;
  setShowTextBox: (show: boolean) => void;
  setShowTagBox: (show: boolean) => void;
}
const TagsBox = ({
  setShowLinkInput,
  setShowTextBox,
  setShowTagBox,
}: Props) => {
  return (
    <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
      <TagBoxContent
        setShowLinkInput={setShowLinkInput}
        setShowTagBox={setShowTagBox}
        setShowTextBox={setShowTextBox}
      />
    </div>
  );
};

export default TagsBox;
