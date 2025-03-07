import AlertDialogBox from "@/components/AlertDialogBox";
import Copy from "@/components/svgs/Copy";
import Edit from "@/components/svgs/Edit";
import Share from "@/components/svgs/Share";
import { usePageContext } from "@/context/PageContext";

import { toast } from "react-toastify";

const ActionsBtns = ({ url }: { url?: string }) => {
  const { setPage } = usePageContext();
  const handleCopy = () => {
    navigator.clipboard.writeText(url ? url : "");
    if (url) toast.success(" URL copied to clipboard!");
    else toast.error("URL is not copied");
  };
  const goEditPage = () => setPage("edit");
  return (
    <div className='flex items-center justify-start gap-4'>
      <button
        onClick={goEditPage}
        className='px-3  py-3 text-sm text-foreground rounded-full  hover:text-text bg-badge flex items-center'
      >
        <Edit />
      </button>
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
