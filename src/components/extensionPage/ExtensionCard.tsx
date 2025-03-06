import { useBookmarks } from "@/context/BookmarkContext";
import { Card } from "@/types/TabCardType";
import { Switch } from "../ui/switch";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  data: Card;
  setActiveTab: (tab: number) => void;
  setFavoriteExe: (favoriteExe: (prev: Card[]) => Card[]) => void;
  favoriteExe: Card[];
}
const ExtensionCard = ({
  data,
  setActiveTab,
  setFavoriteExe,
  favoriteExe,
}: Props) => {
  const { title, id, path, tags } = data;
  const { toggleCard, showSelectionCard } = useBookmarks();
  const isFavorite = (prevFavorites: Card[]) =>
    prevFavorites.some((card) => card.id === data.id);

  const addFavoriteExe = () => {
    setFavoriteExe((prev) => {
      return isFavorite(prev)
        ? prev.filter((card) => card.id !== data.id)
        : [...prev, data];
    });
  };
  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id, path, tags);
    setActiveTab(id);
  };
  return (
    <div
      className='bg-card rounded-[24px] max-w-[284px] group  p-6  flex flex-col items-start gap-6'
      onClick={handleToggle}
    >
      <div className='flex justify-between w-full h-[60px]'>
        <img
          src='https://framerusercontent.com/images/T9qkapeFrr98u1zDjP8vbEdaUs.png'
          alt='card-img'
          className='h-[60px] w-[60px]'
        />
        <div className='flex gap-5'>
          <span
            className='cursor-pointer text-error hidden group-hover:block'
            onClick={addFavoriteExe}
          >
            {isFavorite(favoriteExe) ? (
              <FaHeart size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
          </span>
          <Switch className=' data-[state=checked]:bg-text  bg-border  ' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-foreground '>
          A simple journaling app for capturing daily memories with text, photo,
          stickers and video.
        </p>
      </div>
    </div>
  );
};

export default ExtensionCard;
