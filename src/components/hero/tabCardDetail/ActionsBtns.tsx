import AlertDialogBox from "@/components/AlertDialogBox";
import DialogBox from "@/components/DialogBox";
import Copy from "@/components/svgs/Copy";
import Edit from "@/components/svgs/Edit";
import Share from "@/components/svgs/Share";

import EditBookmark from "@/pages/EditBookmark";

import { toast } from "react-toastify";

const ActionsBtns = ({ url }: { url?: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url ? url : "");
    if (url) toast.success(" URL copied to clipboard!");
    else toast.error("URL is not copied");
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
        <EditBookmark />
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
      <AlertDialogBox className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center' />
    </div>
  );
};

export default ActionsBtns;
