import { useState, useEffect } from 'react';

interface IF_DateInfo {
  year: number;
  month: number;
  day: number;
  weekday: string;
}

const useDate = (): IF_DateInfo => {
  const [dateInfo, setDateInfo] = useState<IF_DateInfo>({
    year: 0,
    month: 0,
    day: 0,
    weekday: '',
  });

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const weekday = currentDate.toLocaleString('default', { weekday: 'long' });

    setDateInfo({ year, month, day, weekday });
  }, []);

  return dateInfo;
};
export default useDate;
