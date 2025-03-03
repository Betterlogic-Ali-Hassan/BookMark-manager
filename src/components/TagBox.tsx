"use client";

import type { KeyboardEvent } from "react";
import { useState, useEffect } from "react";

import { categoriesData } from "@/constant/categoriesData";
import { cn } from "@/lib/utils";

type Tag = {
  name: string;
  count: number;
  id: number;
};

interface TagBoxProps {
  allowedText?: boolean;
  initialSelectedTags?: string[];
  onTagsChange?: (tags: string[]) => void;
}

const TagBox = ({
  allowedText = false,
  initialSelectedTags = [],
  onTagsChange,
}: TagBoxProps) => {
  const [tagInputValue, setTagInputValue] = useState("");
  const [selectedTags, setSelectedTags] =
    useState<string[]>(initialSelectedTags);
  const [notificationText, setNotificationText] = useState("");
  const [showNotificationText, setShowNotificationText] = useState(false);
  const [tags, setTags] = useState<Tag[]>(categoriesData || []);

  // Notify parent component of tag changes
  useEffect(() => {
    if (onTagsChange) {
      onTagsChange(selectedTags);
    }
  }, [selectedTags, onTagsChange]);

  // Show notification with cleanup
  const showNotification = (text: string) => {
    setNotificationText(text);
    setShowNotificationText(true);

    const timeoutId = setTimeout(() => {
      setShowNotificationText(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  const handleTag = () => {
    if (tagInputValue?.trim()) {
      const newTag: Tag = {
        name: tagInputValue,
        count: 1,
        id: Date.now(),
      };

      // Update tags list
      setTags((prevTags) => [...prevTags, newTag]);

      // Also add to selected tags
      setSelectedTags((prev) => [...prev, tagInputValue]);

      // Show notification
      const cleanup = showNotification(`New Tag Added '${tagInputValue}'`);

      // Clear input
      setTagInputValue("");

      return cleanup;
    }
  };

  const toggleTags = (tag: string) => {
    setSelectedTags((prev) => {
      const isTagSelected = prev.includes(tag);

      // Show notification
      showNotification(
        isTagSelected ? `Removed: Tag "${tag}"` : `Added: Tag "${tag}"`
      );

      // Update selected tags
      return isTagSelected ? prev.filter((t) => t !== tag) : [...prev, tag];
    });
  };

  // Handle Enter key in input field
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTag();
    }
  };

  return (
    <>
      <div className='flex gap-3 items-center overflow-hidden h-5'>
        {!allowedText && (
          <label htmlFor='tags' className='text-sm font-medium'>
            Tags
          </label>
        )}

        <div
          className={cn(
            "ml-auto text-sm text-neutral-500 dark:text-neutral-200 flex items-center gap-1.5 opacity-100 transition-all duration-300 translate-y-[0%] whitespace-nowrap text-ellipsis",
            !showNotificationText && "opacity-0 translate-y-[10%]"
          )}
          aria-live='polite'
          aria-atomic='true'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5 text-green-400 dark:text-green-300'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
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
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          name='tags'
          id='multi-tags-editor-input'
          className='input w-full rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm'
          placeholder='Search or add new tag'
          aria-label='Add or search tags'
        />
        <button
          type='button'
          className='btn ml-2 inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 px-3 py-2 text-sm font-medium'
          onClick={handleTag}
          aria-label='Add tag'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5 text-neutral-400 mr-1'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            ></path>
          </svg>
          Add
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-1.5 overflow-hidden py-1'>
        {tags.map((category) => (
          <button
            type='button'
            key={category.id}
            className={cn(
              "flex-none cursor-pointer inline-block whitespace-nowrap truncate dark:hover:bg-[#fff3] max-w-xs tag py-2 px-3 rounded-[0.25rem] text-sm font-semibold btn dark:text-white dark:bg-[#ffffff1a]",
              selectedTags.includes(category.name) &&
                "dark:bg-[#60a5fa] bg-[#2563eb] text-white  hover:bg-[#3b82f6] dark:hover:bg-[#93c5fd]"
            )}
            onClick={() => toggleTags(category.name)}
            aria-pressed={selectedTags.includes(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default TagBox;
