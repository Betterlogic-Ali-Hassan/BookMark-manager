import SlashBookmarkIcon from "./svgs/SlashBookmarkIcon";

const DataNotFound = () => {
  return (
    <div className='text-center pt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <SlashBookmarkIcon />
      <p className='mt-3 text-sm text-foreground  truncate'>
        Nothing found Data
      </p>
    </div>
  );
};

export default DataNotFound;
