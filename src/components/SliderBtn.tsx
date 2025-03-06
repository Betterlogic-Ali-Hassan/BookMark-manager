import { cn } from "@/lib/utils";
import React from "react";
import Button from "./ui/button";

const SliderBtn = ({
  icon,
  id,
  className,
}: {
  icon: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "bg-white flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#f4f4f4] absolute top-[50%] z-50 translate-y-[-50%] border border-border cursor-pointer",
        className
      )}
      id={id}
    >
      {icon}
    </Button>
  );
};

export default SliderBtn;
