import { FC, useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import Date from './Date';
import dayjs from 'dayjs';

interface CalendarComponentProps {
  onSelectDate: any;
  selected: dayjs.Dayjs;
}

const CalendarComponent: FC<CalendarComponentProps> = ({
  onSelectDate,
  selected,
}) => {
  const [dates, setDates] = useState<dayjs.Dayjs[]>([]);
  const scrollViewRef = useRef<ScrollView | null>(null);

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

  useEffect(() => {
    if (scrollViewRef.current) {
      const index = dates.findIndex((date) => date.isSame(selected, 'day'));
      if (index !== -1) {
        scrollViewRef.current.scrollTo({
          x: index * 132,
          animated: true,
        });
      }
    }
  }, [selected, dates]);

  return (
    <ScrollView
      ref={scrollViewRef}
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
