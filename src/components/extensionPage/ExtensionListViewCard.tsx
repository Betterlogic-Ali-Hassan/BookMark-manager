"use client";

import React from "react";
import { useExtension, ExtensionData } from "@/context/ExtensionContext";
import { Switch } from "../ui/switch";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface ExtensionListViewCardProps {
  extension: ExtensionData;
}

const ExtensionListViewCard = ({ extension }: ExtensionListViewCardProps) => {
  const { toggleExtension, pinnedExtensions, togglePin } = useExtension();

  const handleSwitch = () => {
    toggleExtension(extension.id);
  };

  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePin(extension.id);
  };

  const isPinned = pinnedExtensions.includes(extension.id);

  return (
    <div className="p-6 border-border border group rounded-lg bg-card flex gap-12 mb-4 relative cursor-pointer">
      <div className="h-[36px] w-[36px]">
        <img src={extension.iconUrl || "/placeholder.svg"} alt={extension.name} />
      </div>
      <div className="grow">
        <h3 className="font-semibold text-text">{extension.name}</h3>
        <p className="mt-6 text-[15px]">
          {extension.enabled ? "Extension is enabled" : "Extension is disabled"}
        </p>
        <div className="flex items-center justify-between mt-6">
          <Switch checked={extension.enabled} onCheckedChange={handleSwitch} />
        </div>
      </div>
      <span
        className={cn(
          "cursor-pointer hidden group-hover:block text-text absolute top-6 right-6",
          isPinned && "block"
        )}
        onClick={handlePin}
      >
        {isPinned ? <BsPinFill size={20} /> : <BsPin size={20} />}
      </span>
    </div>
  );
};

export default ExtensionListViewCard;
