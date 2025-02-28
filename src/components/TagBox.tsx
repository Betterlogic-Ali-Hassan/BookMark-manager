import { cn } from "@/lib/utils";
import { useState } from "react";
type Tag = {
  name: string;
  count: number;
  id: number;
};
interface Props {
  categoriesData: {
    name: string;
    count: number;
    id: number;
  }[];
  allowedText?: boolean;
  tagInputValue?: string;
  setTagInputValue?: (value: string) => void;
}
const TagBox = ({ categoriesData, allowedText }: Props) => {
  const [tagInputValue, setTagInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notificationText, setNotificationText] = useState("");
  const [showNotificationText, setShowNotificationText] = useState(false);
  const [tags, setTags] = useState<Tag[]>(categoriesData || []);

  const handleTag = () => {
    if (tagInputValue?.trim()) {
      const newTag: Tag = {
        name: tagInputValue,
        count: 1,
        id: Date.now(),
      };
      setTags((prevTags) => [...prevTags, newTag]);
      setShowNotificationText(true);
      setNotificationText(`New Tag Added '${tagInputValue}'`);
      setTimeout(() => {
        setShowNotificationText(false);
      }, 1000);

      if (setTagInputValue) setTagInputValue("");
    }
  };
  const toggleTags = (tag: string) => {
    setSelectedTags((prev) => {
      const isTagSelected = prev.includes(tag);

      setNotificationText(
        isTagSelected ? `Removed: Tag "${tag}"` : `Added: Tag "${tag}"`
      );
      setShowNotificationText(true);

      setTimeout(() => {
        setShowNotificationText(false);
      }, 1000);

      return isTagSelected ? prev.filter((t) => t !== tag) : [...prev, tag];
    });
  };

  return (
    <>
      <div className='flex gap-3 items-center overflow-hidden h-5'>
        {!allowedText && (
          <label
            htmlFor='tags'
            className='text-white block text-sm font-medium'
          >
            Tags
          </label>
        )}

        <div
          className={cn(
            "ml-auto text-sm text-neutral-500 dark:text-neutral-200 flex items-center gap-1.5 opacity-100 transition-all duration-300 translate-y-[0%] whitespace-nowrap text-ellipsis",
            !showNotificationText && "opacity-0 translate-y-[10%]"
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5 text-green-400 dark:text-green-300'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          {notificationText}
        </div>
      </div>
      <div className='mt-2 flex rounded mb-6'>
        <input
          type='text'
          value={tagInputValue}
          onChange={(e) => setTagInputValue && setTagInputValue(e.target.value)}
          name='tags'
          id='multi-tags-editor-input'
          className='input '
          placeholder='Search or add new tag'
        />
        <button type='button' className='btn' onClick={handleTag}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-5 w-5 text-neutral-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            ></path>
          </svg>
          Add
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-1.5 overflow-hidden py-1'>
        {tags.map((category, id) => (
          <button
            type='button'
            key={id}
            className={cn(
              "flex-none cursor-pointer inline-block whitespace-nowrap truncate hover:bg-[#fff3] max-w-xs tag selected text-white bg-[#ffffff1a] py-2 px-3 rounded-[0.25rem] text-sm font-semibold ",
              selectedTags.includes(category.name) &&
                "bg-[#60a5fa] hover:bg-[#93c5fd]"
            )}
            onClick={() => toggleTags(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default TagBox;
