import ActionsBtns from "./ActionsBtns";
import DateSlider from "./dateSlider/DateSlider";
import HoursBalls from "./HoursBalls";

const History = () => {
  return (
    <>
      <div className='hidden lg:block'></div>
      <div>
        <DateSlider />
        <HoursBalls />
        <ActionsBtns />
      </div>
      <div className='hidden lg:block'></div>
    </>
  );
};

export default History;
