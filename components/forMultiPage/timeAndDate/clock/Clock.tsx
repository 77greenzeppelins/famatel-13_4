import React, { useEffect, useState } from 'react';

/**TS**/
interface Props {
  city: string | string[];
  timeZone: string;
  textStyle?: string;
}
/**---------------------**/
const Clock = ({ city, timeZone, textStyle }: Props) => {
  // const [currentTime, setCurrentTime] = useState('');
  const [currentTime2, setCurrentTime2] = useState(['', '']);

  useEffect(() => {
    const UpdateTime = () => {
      let time = new Date().toLocaleTimeString('pl', {
        timeZone: timeZone,
        hourCycle: 'h24', // delats PM / AM
      });
      let timePart2 = time.split(':')[2];
      let timePart1 = time.slice(0, 6);
      // setCurrentTime(time);
      setCurrentTime2([timePart1, timePart2]);
    };
    const timeController = setInterval(UpdateTime, 1000);
    return () => clearInterval(timeController);
  }, [timeZone]);

  return (
    <div className="relative flex items-center  w-[76px] xs:w-[92px] sm:w-[100px] xl:w-[126px] ">
      <p className={textStyle}>{currentTime2[0]}</p>
      {/* <p className="text-greyShade2 text-1xl xl:text-2xl tracking-[0.09rem] xl:pd-1 pb-0"> */}
      <p className={textStyle}>{currentTime2[1]}</p>
    </div>
  );
};

export default Clock;

/**
 * <Clock city={'Dzierżoniów'} timeZone={'Europe/Warsaw'} />
 */
