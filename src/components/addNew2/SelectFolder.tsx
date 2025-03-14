"use client";

import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useFolderSelect } from "@/hooks/use-folder-select";
import { SearchInput } from "./SearchInput";
import { FolderList } from "./SelectFolderList";

interface FolderSelectProps {
  label?: string;
  className?: string;
}

export function FolderSelect({ className = "" }: FolderSelectProps) {
  const {
    searchTerm,
    selected,
    openPopover,
    filteredFolders,
    handleSearch,
    handleSelect,
    setOpenPopover,
  } = useFolderSelect();

  return (
    <div className={className}>
      <div className='flex flex-col gap-2'>
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger className='w-full mb-1 outline-none focus:outline-none ring-0 flex h-[44px] px-4 text-sm items-center justify-between rounded-sm border border-border bg-transparent text-text  placeholder:text-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
            {selected}
            <span>
              <ChevronDown size={20} />
            </span>
          </PopoverTrigger>
          <PopoverContent className='relative z-50 max-h-96 w-[720px]  overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md p-0'>
            <SearchInput value={searchTerm} onChange={handleSearch} />
            <FolderList folders={filteredFolders} onSelect={handleSelect} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default FolderSelect;
