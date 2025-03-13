import Button from "../ui/button";
import { PlusIcon } from "../svgs/PlusIcon";
import DialogBox from "../../modals/DialogBox";
import AddNewCard from "../addNewCard/AddNewCard";

const AddNewCardBtn = () => {
  return (
    <DialogBox
      trigger={
        <Button className='h-[40px]'>
          <PlusIcon className='h-5 w-5 text-text mr-2' />
          New
        </Button>
      }
    >
      <AddNewCard />
    </DialogBox>
  );
};

export default AddNewCardBtn;
