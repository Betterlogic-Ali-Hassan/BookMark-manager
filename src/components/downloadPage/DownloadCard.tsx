"use client";

import React from "react";

import type { Card } from "@/types/TabCardType";
import CrossIcon from "../svgs/CrossIcon";

interface DownloadCardProps {
  data: Card;
  setActiveTab: (tab: number) => void;
}

const DownloadCard = ({ data }: DownloadCardProps) => {
  const { title, icon2, path } = data;
  return (
    <div className='p-6 border-border border group rounded-lg bg-card flex gap-6 mb-4 relative cursor-pointer'>
      <div className='h-[36px] w-[36px]'>
        {/* Render icon2 only if it's a valid React element */}
        {React.isValidElement(icon2) ? icon2 : null}
      </div>
      <div className='grow flex items-center justify-between'>
        <div>
          <h3 className='font-semibold text-text'>{title}</h3>
          <a
            href={path}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm hover:underline text-brand hover:text-brand-hover'
            onClick={(e) => e.stopPropagation()}
          >
            {path}
          </a>
        </div>
        <button className='btn rounded mt-4'>Show folder</button>
      </div>
      <span className='absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition duration-200'>
        <CrossIcon />
      </span>
    </div>
  );
};

export default DownloadCard;
