import { useEffect, useRef, useState } from "react";
import DropDownContent from "./DropDownContent";
import { useBookmarks } from "@/context/BookmarkContext";
import ThumbnailToggle from "../hero/ThumbnailToggle";
import { usePageContext } from "@/context/PageContext";
import DotsIcon from "../svgs/DotsIcon";
import { cn } from "@/lib/utils";

const DropDown = () => {
  const { cards } = useBookmarks();
  const { page } = usePageContext();
  const [openDropDown, setOpenDropDown] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const count = cards.length;
  console.log(cards);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!btnRef.current) return;
      if (!btnRef.current.contains(event.target as Node)) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const isShowThumbnailView = page === "downloads" || page === "history";
  const isDownloadPage = page === "downloads";
  return (
    <div className='hidden lg:flex lg:h-[3.25rem] items-center justify-end'>
      {!isShowThumbnailView && <ThumbnailToggle />}
      <div className='flex items-center px-4 whitespace-nowrap text-foreground  text-sm'>
        {count} {isDownloadPage ? "Downloads" : "Bookmarks"}
        <div
          className={cn(
            "relative flex justify-center items-center",
            isDownloadPage && "hidden"
          )}
        >
          <button
            ref={btnRef}
            className='p-2 lg:p-0.5  lg:text-foreground   hover:text-text'
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <DotsIcon />
          </button>
          {openDropDown && <DropDownContent />}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
