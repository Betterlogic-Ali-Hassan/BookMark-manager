import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Settings from "@/pages/settings/Settings";
import SettingIcon from "../svgs/SettingIcon";

const SettingDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className='text-sm text-foreground hover:text-text transition-colors'>
        <SettingIcon />
      </DialogTrigger>
      <DialogContent className='bg-transparent border-0 h-fit'>
        <DialogHeader>
          <Settings />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SettingDialog;
