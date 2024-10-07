import { TripsModel } from '@/types/trips';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SelectPlaceIcon from './SelectPlaceIcon';
import TripDurationIcon from './TripDurationIcon';

interface ShowTripProps {
  trips: { data: TripsModel };
  passengerCount: number;
  searchParams: any;
}

const ShowTrip: FC<ShowTripProps> = ({
  trips,
  passengerCount,
  searchParams,
}) => {
  return (
    <View className='flex gap-6 rounded-lg px-6 my-6'>
      {trips?.data?.rows.map((item) => {
        const finishTime = (() => {
          const startDate = dayjs(item?.startDate);
          const finishDate = startDate?.add(Number(item?.duration), 'hour');
          return finishDate.format('HH:mm');
        })();
        return (
          <View key={item?.uuid}>
            <LinearGradient
              className='flex flex-row justify-between p-4 rounded-t-xl'
              colors={
                passengerCount > item?.availableSeatCount
                  ? ['#CCCCCC', '#A8A8A8']
                  : ['#2FCC56', '#27A847']
              }
            >
              <Text className='text-white text-base'>
                {dayjs(item?.startDate).format('D.MM.YYYY')}
              </Text>
              <Text className='text-white text-base'>{item?.price} TMT</Text>
            </LinearGradient>
            <View className='bg-white rounded-b-xl px-3 py-4'>
              <View className='flex flex-row justify-between items-start py-3'>
                <View>
                  <Text className='text-lg'>
                    {item?.route?.fromLocationName}
                  </Text>
                  <Text className='text-3xl font-medium'>
                    {dayjs(item?.startDate).format('HH:mm')}
                  </Text>
                </View>
                <View className='flex items-center'>
                  <TripDurationIcon width={80} height={50} />
                  <Text className='text-sm text-grey-300'>
                    {item?.duration.slice(0, 1)} sagat
                  </Text>
                </View>
                <View>
                  <Text className='text-lg'>{item?.route?.toLocationName}</Text>
                  <Text className='text-3xl font-medium'>{finishTime}</Text>
                </View>
              </View>
              <View className='flex flex-row justify-between items-center my-2'>
                <Text className='text-base'>
                  <Text className='text-primary font-medium'>
                    {item?.availableSeatCount} {''}
                  </Text>
                  boş orun
                </Text>

                {passengerCount > item?.availableSeatCount ? (
                  <Text className='text-grey-300 font-semibold'>Ýer ýok</Text>
                ) : (
                  <TouchableOpacity
                    // onPress={() =>
                    //   router.push({
                    //     pathname: `/trips/${item.uuid}/bus-scheme`,
                    //     params: searchParams,
                    //   })
                    // }
                    onPress={() =>
                      router.push(`/trips/${item.uuid}/bus-scheme`)
                    }
                  >
                    <Text className='font-medium text-base text-primary'>
                      Ýer saýlamak
                      <SelectPlaceIcon width={15} height={15} />
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ShowTrip;
