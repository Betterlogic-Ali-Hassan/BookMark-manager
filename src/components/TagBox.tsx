"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  type KeyboardEvent,
} from "react";
import { categoriesData } from "@/constant/categoriesData";

import { TagNotification } from "./TagAddedNotification";
import { TagButton } from "./AddTagBtn";
import { PlusIcon } from "./svgs/PlusIcon";
import type { Tag } from "@/types/tag";
import { useFormContext } from "@/context/from-Context";

interface TagBoxProps {
  allowedText?: boolean;
  onTagsChange?: (tags: string[]) => void;
}

export default function TagBox({
  allowedText = false,
  onTagsChange,
}: TagBoxProps) {
  const [tagInputValue, setTagInputValue] = useState("");
  const { updateFormData } = useFormContext();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notification, setNotification] = useState({
    text: "",
    visible: false,
  });
  const [tags, setTags] = useState<Tag[]>(categoriesData || []);

  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = useCallback((text: string) => {
    setNotification({ text, visible: true });

    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    notificationTimeoutRef.current = setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 1000);
  }, []);

  // Update form context and call onTagsChange when selected tags change
  useEffect(() => {
    // Always update form data when selected tags change
    updateFormData("tags", selectedTags);
    onTagsChange?.(selectedTags);

    // Cleanup timeout on unmount
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, [selectedTags, updateFormData, onTagsChange]);

  // Memoize event handlers to prevent recreation on each render
  const handleAddTag = useCallback(() => {
    const trimmedValue = tagInputValue.trim();

    if (!trimmedValue) return;

    // Check if tag already exists in selected tags
    if (selectedTags.includes(trimmedValue)) {
      showNotification(`Tag '${trimmedValue}' already selected!`);
      setTagInputValue("");
      return;
    }

    // Check if tag exists in available tags
    const existingTag = tags.find(
      (tag) => tag.name.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (existingTag) {
      // Add existing tag to selection
      setSelectedTags((prev) => [...prev, existingTag.name]);
      showNotification(`Added: Tag '${existingTag.name}'`);
    } else {
      // Create new tag
      const newTag: Tag = {
        name: trimmedValue,
        count: 1,
        id: trimmedValue.toLowerCase(),
      };

      // Add new tag to available tags and selection
      setTags((prev) => [...prev, newTag]);
      setSelectedTags((prev) => [...prev, trimmedValue]);
      showNotification(`New Tag Added: '${trimmedValue}'`);
    }

    // Clear input
    setTagInputValue("");
  }, [tagInputValue, showNotification, selectedTags, tags]);

  // Toggle tag selection
  const toggleTag = useCallback(
    (tagName: string) => {
      setSelectedTags((prev) => {
        const isSelected = prev.includes(tagName);

        if (isSelected) {
          // Remove tag
          showNotification(`Removed: Tag "${tagName}"`);
          return prev.filter((t) => t !== tagName);
        } else {
          // Add tag
          showNotification(`Added: Tag "${tagName}"`);
          return [...prev, tagName];
        }
      });
    },
    [showNotification]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddTag();
      }
    },
    [handleAddTag]
  );

  const tagButtons = useMemo(
    () =>
      tags.map((category) => (
        <TagButton
          key={category.id}
          tag={category.name}
          isSelected={selectedTags.includes(category.name)}
          onClick={() => toggleTag(category.name)}
        />
      )),
    [tags, selectedTags, toggleTag]
  );

  return (
    <div className='space-y-2'>
      <div className='flex gap-3 items-center overflow-hidden h-5'>
        {!allowedText && (
          <label htmlFor='tags-input' className='text-sm font-medium'>
            Tags
          </label>
        )}

        <TagNotification
          text={notification.text}
          visible={notification.visible}
        />
      </div>

      <div className='flex rounded mb-6'>
        <input
          type='text'
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          name='tags'
          id='tags-input'
          className='input w-full rounded-md px-3 py-2 text-sm'
          placeholder='Search or add new tag'
          aria-label='Add or search tags'
        />
        <button
          type='button'
          className='btn ml-2 inline-flex items-center rounded-md bg-hover px-3 py-2 text-sm font-medium'
          onClick={handleAddTag}
          aria-label='Add tag'
        >
          <PlusIcon className='h-5 w-5 text-neutral-400 mr-1' />
          Add
        </button>
      </div>

      <div className='flex flex-wrap gap-2 py-1'>{tagButtons}</div>
    </div>
  );
}
