import { LinearGradient } from 'expo-linear-gradient';
import dayjs from 'dayjs';
import 'dayjs/locale/tk';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface DateComponentProps {
  date: dayjs.Dayjs;
  onSelectDate: any;
  selected: string;
}

const DateComponent: FC<DateComponentProps> = ({
  date,
  onSelectDate,
  selected,
}) => {
  const day = dayjs(date).locale('tk').format('dddd');
  const dayWithMonth = dayjs(date).locale('tk').format('D MMMM');
  const fullDate = dayjs(date).locale('tk').format('YYYY-MM-DD');

  return (
    <LinearGradient
      className={`bg-white rounded-lg p-2 mt-2 items-center h-[70px] w-[120px] mx-[6px]`}
      colors={
        selected.toString() == fullDate
          ? ['#2FCC56', '#27A847']
          : ['#FFFFFF', '#FFFFFF']
      }
    >
      <TouchableOpacity onPress={() => onSelectDate(fullDate)}>
        <Text
          className={`text-lg text-center ${
            selected.toString() == fullDate && 'text-white'
          }`}
        >
          {day}
        </Text>
        <Text
          className={`text-center font-bold ${
            selected.toString() === fullDate && 'text-white'
          }`}
        >
          {dayWithMonth}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DateComponent;
