// import moment, { Moment } from 'moment';
import { FC, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Date from './Date';
import dayjs from 'dayjs';

interface CalendarComponentProps {
  onSelectDate: any;
  selected: string;
}

const CalendarComponent: FC<CalendarComponentProps> = ({
  onSelectDate,
  selected,
}) => {
  const [dates, setDates] = useState<dayjs.Dayjs[]>([]);

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 30; i++) {
      const date = dayjs().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <ScrollView
      className='w-full px-3'
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {dates.map((date, index) => (
        <Date
          key={index}
          date={date}
          onSelectDate={onSelectDate}
          selected={selected}
        />
      ))}
    </ScrollView>
  );
};

export default CalendarComponent;
