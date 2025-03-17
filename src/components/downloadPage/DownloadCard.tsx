"use client";
import type { Card } from "@/types/TabCardType";
import DeleteEntry from "../DeleteEntry";

interface DownloadCardProps {
  data: Card;
}

const DownloadCard = ({ data }: DownloadCardProps) => {
  const { title, icon, path, id, des } = data;

  const handleShowFolder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (chrome && chrome.downloads && chrome.downloads.show) {
      chrome.downloads.show(id);
    } else {
      console.error("Chrome downloads API is not available.");
    }
  };

  return (
    <div className="p-6 border-border border group rounded-lg bg-card flex gap-6 mb-4 relative cursor-pointer">
      <div className="h-[36px] w-[36px]">
        <img src={icon} alt={title} className="h-[36px] w-[36px]" />
      </div>
      <div className="grow flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-text">{title}</h3>
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline text-brand hover:text-brand-hover"
            onClick={(e) => e.stopPropagation()}
          >
            {des}
          </a>
        </div>
        <button className="btn rounded mt-4" onClick={handleShowFolder}>
          Show folder
        </button>
      </div>
      <DeleteEntry
        id={id}
        text="Download Successfully Deleted"
        className="absolute top-1.5 right-2 transition duration-200"
      />
    </div>
  );
};

export default DownloadCard;
