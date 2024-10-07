import { day, dayWithMonth, fullDateEn } from '@/utils/dateUtil';
import dayjs from 'dayjs';
import 'dayjs/locale/tk';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface DateComponentProps {
  date: dayjs.Dayjs;
  onSelectDate: any;
  selected: dayjs.Dayjs;
}

const DateComponent: FC<DateComponentProps> = ({
  date,
  onSelectDate,
  selected,
}) => {
  return (
    <LinearGradient
      className={`bg-white rounded-lg p-2 mt-2 items-center h-[70px] w-[120px] mx-[6px]`}
      colors={
        selected.toString() == fullDateEn(date)
          ? ['#2FCC56', '#27A847']
          : ['#FFFFFF', '#FFFFFF']
      }
    >
      <TouchableOpacity onPress={() => onSelectDate(fullDateEn(date))}>
        <Text
          className={`text-lg text-center ${
            selected.toString() == fullDateEn(date) && 'text-white'
          }`}
        >
          {day(date, 'tk')}
        </Text>
        <Text
          className={`text-center font-bold ${
            selected.toString() === fullDateEn(date) && 'text-white'
          }`}
        >
          {dayWithMonth(date, 'tk')}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DateComponent;
