import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
}
const DialogBox = ({ trigger, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className='text-sm text-foreground hover:text-text transition-colors'>
        {trigger}
      </DialogTrigger>
      <DialogContent className='bg-transparent border-0 h-fit'>
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
