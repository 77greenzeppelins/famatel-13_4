/**Hook Staff**/
import useDate from '@/lib/hooks/useDate';

/**------------------------------**/
const DateDisplayer: React.FC<{ textStyle?: string }> = ({ textStyle }) => {
  const { year, month, day, weekday } = useDate();

  const createMonthName = () => {
    switch (month) {
      case 0:
        return 'stycznia';
      case 1:
        return 'lutego';
      case 2:
        return 'marca';
      case 3:
        return 'kwietnia';
      case 4:
        return 'maja';
      case 5:
        return 'czerwca';
      case 6:
        return 'lipca';
      case 7:
        return 'sierpnia';
      case 8:
        return 'września';
      case 9:
        return 'października';
      case 10:
        return 'listopada';
      case 11:
        return 'grudnia';
      default:
        console.log('I love web development');
    }
  };

  /**JSX**/
  return (
    <p className="flex gap-[4px] ">
      <span className={textStyle}>{weekday}, </span>
      <span className={textStyle}>{day} </span>
      <span className={textStyle}>{createMonthName()} </span>
      <span className={textStyle}>{year} </span>
    </p>
  );
};

export default DateDisplayer;
