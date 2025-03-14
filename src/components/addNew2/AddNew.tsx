import { DialogClose } from "@radix-ui/react-dialog";
import SelectFolder from "./SelectFolder";
import CrossIcon from "../svgs/CrossIcon";

const AddNew = () => {
  return (
    <div className=' flex items-center justify-center  '>
      <div className='p-6 py-12 rounded-md bg-card max-w-[768px]  w-full relative'>
        <DialogClose className='bg-card p-3 rounded-full text-text opacity-80 hover:opacity-100 absolute top-2 right-2'>
          <CrossIcon className='h-6 w-6' />
        </DialogClose>
        <h2 className=' text-text font-semibold text-lg pb-2'>
          Add Folder to Bookmarks bar
        </h2>
        <div className=' flex flex-col mt-4'>
          <label
            htmlFor='name'
            className='text-text font-semibold text-sm mb-4'
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
          className='text-text font-semibold text-sm mb-4 mt-6 block'
        >
          Parent Folder
        </label>
        <SelectFolder />
      </div>
    </div>
  );
};

export default AddNew;
