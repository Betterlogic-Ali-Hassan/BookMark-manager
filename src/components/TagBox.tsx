"use client";
import { useState, useEffect, type KeyboardEvent } from "react";
import { categoriesData } from "@/constant/categoriesData";
import { useFormContext } from "@/context/from-Context";
import { TagNotification } from "./TagAddedNotification";
import { TagButton } from "./AddTagBtn";
import { PlusIcon } from "./svgs/PlusIcon";
import { Tag } from "@/types/tag";

interface TagBoxProps {
  allowedText?: boolean;
  onTagsChange?: (tags: string[]) => void;
}

export default function TagBox({
  allowedText = false,
  onTagsChange,
}: TagBoxProps) {
  const [tagInputValue, setTagInputValue] = useState("");
  const { formData, updateFormData } = useFormContext();
  const [selectedTags, setSelectedTags] = useState<string[]>(
    formData.tags || []
  );
  const [notification, setNotification] = useState({
    text: "",
    visible: false,
  });
  const [tags, setTags] = useState<Tag[]>(categoriesData || []);

  // Update form context and call onTagsChange when selected tags change
  useEffect(() => {
    updateFormData("tags", selectedTags);
    onTagsChange?.(selectedTags);
  }, [selectedTags, updateFormData, onTagsChange]);

  // Show notification with auto-dismiss
  const showNotification = (text: string) => {
    setNotification({ text, visible: true });

    const timeoutId = setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  // Add a new tag
  const handleAddTag = () => {
    const trimmedValue = tagInputValue.trim();

    if (!trimmedValue) return;

    // Create new tag
    const newTag: Tag = {
      name: trimmedValue,
      count: 1,
      id: Date.now(),
    };

    // Update tags list
    setTags((prevTags) => [...prevTags, newTag]);

    // Add to selected tags
    setSelectedTags((prev) => [...prev, trimmedValue]);

    // Show notification
    showNotification(`New Tag Added '${trimmedValue}'`);

    // Clear input
    setTagInputValue("");
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
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
      handleAddTag();
    }
  };

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

      <div className='flex flex-wrap gap-1.5 py-1'>
        {tags.map((category) => (
          <TagButton
            key={category.id}
            tag={category.name}
            isSelected={selectedTags.includes(category.name)}
            onClick={() => toggleTag(category.name)}
          />
        ))}
      </div>
    </div>
  );
}
