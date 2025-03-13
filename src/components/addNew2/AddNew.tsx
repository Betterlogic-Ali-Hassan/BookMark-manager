import { DialogClose } from "@radix-ui/react-dialog";
import SelectFolder from "./SelectFolder";
import CrossIcon from "../svgs/CrossIcon";

const AddNew = () => {
  return (
    <div className=' flex items-center justify-center  '>
      <div className='p-6 py-8 rounded-md bg-card max-w-[450px] w-full relative'>
        <h2 className=' text-text font-semibold text-lg'>
          Add Folder to Bookmarks bar
        </h2>
        <div className=' flex flex-col mt-4'>
          <label
            htmlFor='name'
            className='text-text font-semibold text-sm mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='title'
            required
            placeholder='Enter folder name'
            className='flex h-10 w-full rounded border bg-transparent px-3 py-3 text-base transition-colors focus-visible:outline-none   md:text-sm border-border  text-text'
          />
        </div>
        <label
          htmlFor='name'
          className='text-text font-semibold text-sm mb-2 mt-4 block'
        >
          Parent Folder
        </label>
        <SelectFolder />
        <DialogClose className='bg-card p-3 rounded-full text-text opacity-80 hover:opacity-100 absolute -top-16 right-0'>
          <CrossIcon />
        </DialogClose>
      </div>
    </div>
  );
};

export default AddNew;
