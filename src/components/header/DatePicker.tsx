"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  const today = new Date();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left font-normal hover:bg-white hover:border-blue-500 border-dotted border-2 border-neutral-300 dark:border-neutral-800 gap-4 rounded "
          )}
        >
          <span>{format(date ? date : today, "yyyy/MM/dd")}</span>

          <CalendarDays className='mr-l h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 border-black'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
