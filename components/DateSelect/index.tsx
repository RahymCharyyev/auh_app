import React, { FC, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Divider from '../Divider';
import CalendarIcon from './CalendarIcon';
import { today } from '@/constants/Dates';

const DateSelect: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);

  const handleShowCalendar = () => {
    setIsVisible(true);
  };

  const handleCloseCalendar = () => {
    setIsVisible(false);
  };

  const onChangeDate = (date: Date) => {
    setSelectedDate(date);
    handleCloseCalendar();
  };
  return (
    <View className='mt-8 mx-6'>
      <TouchableOpacity
        onPress={() => handleShowCalendar()}
        className='flex flex-row items-center rounded-2xl border-[1px] border-grey-100'
      >
        <CalendarIcon width={25} height={25} />
        <Divider />
        <View className='ml-4'>
          <Text className='text-[12px]'>Ugraýan senesi:</Text>
          <Text className='text-base font-bold'>
            {selectedDate.toLocaleDateString('ru-RU')}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={isVisible} transparent animationType='fade'>
        <TouchableOpacity
          className='flex-1 items-center justify-center bg-[#00000080]'
          onPress={handleCloseCalendar}
          activeOpacity={1}
        >
          <TouchableOpacity
            className='w-[95%] rounded-md bg-white p-[10px]'
            onPress={(e) => e.stopPropagation()}
            activeOpacity={1}
          >
            <CalendarPicker
              startFromMonday={true}
              onDateChange={onChangeDate}
              previousTitle='Geçen aý'
              nextTitle='Indiki aý'
              selectedDayColor='#2CA93B'
              selectedDayTextColor='white'
              weekdays={['Duş', 'Sen', 'Çar', 'Pen', 'Ann', 'Şen', 'Ýek']}
              months={[
                'Ýanwar',
                'Fewral',
                'Mart',
                'Aprel',
                'Maý',
                'Iýun',
                'Iýul',
                'Awgust',
                'Sentýabr',
                'Oktýabr',
                'Noýabr',
                'Dekabr',
              ]}
              minDate={today}
              restrictMonthNavigation={true}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DateSelect;
