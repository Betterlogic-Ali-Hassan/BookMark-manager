import AlertDialogBox from "@/components/AlertDialogBox";
import NoTagAlertBox from "@/components/NoTagAlertDialogBox";
import TagBox from "@/components/TagBox";

import { useState } from "react";
type Tag = {
  name: string;
  count: number;
  id: number;
};
const TagSetting = () => {
  const [showTagBox, setShowTagBox] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const handleAddTag = () => {
    if (tagInputValue.trim()) {
      const newTag: Tag = {
        name: tagInputValue,
        count: 1,
        id: Date.now(),
      };

      setTags([...tags, newTag]);
      setTagInputValue("");
    }
  };

  return (
    <div className='px-4 py-6 sm:p-8'>
      <h2 className='text-xl font-semibold mb-8'>Tags</h2>
      <div>
        <h3 className='text-md font-semibold mb-4'>Edit Tags</h3>
        <p className='mb-3 text-neutral-700 dark:text-neutral-200'>
          Rename or delete a tag for all bookmarks it's applied to.
        </p>
        <div className='flex gap-3 mb-8'>
          <NoTagAlertBox />
          <AlertDialogBox
            className='btn secondary flex items-center gap-2 rounded text-white '
            trigger={
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 text-neutral-400'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  ></path>
                </svg>
                Delete Tag
              </>
            }
          />
        </div>
      </div>
      <h3 className='text-md font-semibold mb-4'>Favorite Tags</h3>
      <div className='mb-4'>
        <p>Your favorite tags will be used for the top level navigation.</p>
      </div>
      <div>
        {showTagBox ? (
          <TagBox
            categoriesData={tags}
            allowedText
            handleAddTag={handleAddTag}
            tagInputValue={tagInputValue}
            setTagInputValue={setTagInputValue}
          />
        ) : (
          <button
            className='flex gap-2 items-center text-neutral-500 hover:text-neutral-900 border border-dashed rounded py-4 px-6 w-full whitespace-nowrap truncate font-semibold dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white hover:border-solid dark:hover:bg-white/5 hover:bg-neutral-50'
            onClick={() => setShowTagBox(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6 dark:text-neutral-500 text-neutral-400'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              ></path>
            </svg>
            Edit Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default TagSetting;
