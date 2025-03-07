import SlashBookmarkIcon from "../svgs/SlashBookmarkIcon";

const DataNotFound = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <div className='text-center pt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <SlashBookmarkIcon />
      <p className='mt-3 text-sm text-foreground  truncate'>
        Nothing found for <br />"
        <span className='text-text  font-semibold'>{searchTerm}</span>
        ".
      </p>
    </div>
  );
};

export default DataNotFound;
