"use client";

import React from "react";
import { useExtension, ExtensionData } from "@/context/ExtensionContext";
import { Switch } from "../ui/switch";
import MoreIconBtn from "../MoreIconBtn";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  extension: ExtensionData;
}

const ExtensionCard = ({ extension }: ExtensionCardProps) => {
  const { toggleExtension, pinnedExtensions, togglePin } = useExtension();

  const handleSwitch = () => {
    toggleExtension(extension.id);
  };

  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePin(extension.id);
  };

  // Check if this extension is pinned.
  const isPinned = pinnedExtensions.includes(extension.id);

  return (
    <div className="bg-card rounded-[24px] max-w-[284px] group p-6 flex flex-col relative items-start gap-6 cursor-pointer">
      <div className="flex justify-between w-full h-[60px]">
        <img
          src={extension.iconUrl || 'https://framerusercontent.com/images/T9qkapeFrr98u1zDjP8vbEdaUs.png'}
          alt={extension.name}
          className="h-[60px] w-[60px]"
        />
        <div className="flex gap-5">
          <Switch checked={extension.enabled} onCheckedChange={handleSwitch} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-text">{extension.name}</h2>
        <p className="text-foreground">
          {extension.enabled ? "Extension is enabled" : "Extension is disabled"}
        </p>
      </div>
      <div className="flex items-center absolute top-3 right-16">
        <span
          className={cn(
            "cursor-pointer text-text hidden group-hover:block",
            isPinned && "block"
          )}
          onClick={handlePin}
        >
          {isPinned ? <BsPinFill size={18} /> : <BsPin size={18} />}
        </span>
        <MoreIconBtn className="lg:pl-2" />
      </div>
    </div>
  );
};

export default ExtensionCard;
