import AlertDialogBox from "@/components/AlertDialogBox";
import DialogBox from "@/components/DialogBox";
import Copy from "@/components/svgs/Copy";
import Edit from "@/components/svgs/Edit";
import Share from "@/components/svgs/Share";
import { useBookmarks } from "@/context/BookmarkContext";

import EditBookmark from "@/pages/EditBookmark";
import { Card } from "@/types/TabCardType";

import { toast } from "react-toastify";
interface Props {
  activeTabData?: Card | undefined;
}
const ActionsBtns = ({ activeTabData }: Props) => {
  const { deleteCard, setShowCardDetail } = useBookmarks();
  const { path, id } = activeTabData ?? {};
  const handleCopy = () => {
    navigator.clipboard.writeText(path ? path : "");
    if (path) toast.success(" URL copied to clipboard!");
    else toast.error("URL is not copied");
  };
  const handleDelete = () => {
    setShowCardDetail(false);
    deleteCard(id ? id : 0);
    toast.success("Bookmark Deleted");
  };
  return (
    <div className='flex items-center justify-start gap-4'>
      <DialogBox
        trigger={
          <button className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center'>
            <Edit />
          </button>
        }
      >
        <EditBookmark activeTabData={activeTabData} />
      </DialogBox>

      <button className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center '>
        <Share />
      </button>
      <button
        onClick={handleCopy}
        className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center '
      >
        <Copy />
      </button>
      <AlertDialogBox
        className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center'
        onClick={handleDelete}
      />
    </div>
  );
};

export default ActionsBtns;
