import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GoPlus } from "react-icons/go";
import { usePageContext } from "@/context/PageContext";
import SelectIcon from "../svgs/SelectIcon";
import ExistIcon from "../svgs/ExistIcon";

const MobileMenu = () => {
  const { setPage } = usePageContext();
  const goAddNew = () => {
    setPage("new");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HiOutlineMenuAlt1 />
      </DropdownMenuTrigger>
      <DropdownMenuContent side='right' className='bg-background ml-8 mt-10'>
        <DropdownMenuItem
          onClick={goAddNew}
          className='flex items-center gap-3 py-3 px-4'
        >
          <GoPlus size={18} />
          Add Bookmark
        </DropdownMenuItem>
        <DropdownMenuSeparator className='bg-border' />
        <DropdownMenuItem className='flex items-center gap-3 py-3 px-4'>
          <SelectIcon />
          Select Multiple
        </DropdownMenuItem>
        <DropdownMenuItem className='flex items-center gap-3 py-3 px-4'>
          <SelectIcon />
          Select All
        </DropdownMenuItem>
        <DropdownMenuSeparator className='bg-border' />
        <DropdownMenuItem className='flex items-center gap-3 py-3 px-4'>
          <ExistIcon />
          Exist Demo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
