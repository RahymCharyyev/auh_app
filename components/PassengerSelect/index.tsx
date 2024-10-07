import { AgesModel } from '@/types/ages';
import { router } from 'expo-router';
import React, { FC, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Divider from '../Divider';
import PrimaryButton from '../PrimaryButton';
import BottomSheet from './BottomSheet';
import PassengerCounter from './PassengerCounter';
import PassengerIcon from './PassengerIcon';

interface PassengerSelectProps {
  ages: AgesModel[];
  adultCount: string;
  childCount: string;
}

const PassengerSelect: FC<PassengerSelectProps> = ({
  ages,
  adultCount,
  childCount,
}) => {
  const refRBSheet = useRef<any>();
  const adult = Number(adultCount);
  const child = Number(childCount);

  const handleAddAdult = () => {
    if (adult + child < 10) updateSearchParams(adult + 1, child);
  };

  const handleRemoveAdult = () => {
    if (adult > 1) updateSearchParams(adult - 1, child);
  };

  const handleAddChild = () => {
    if (adult + child < 10) updateSearchParams(adult, child + 1);
  };

  const handleRemoveChild = () => {
    if (child > 0) updateSearchParams(adult, child - 1);
  };

  const updateSearchParams = (newAdultCount: number, newChildCount: number) => {
    router.setParams({
      adultCount: newAdultCount.toString(),
      childCount: newChildCount.toString(),
    });
  };

  return (
    <View className='mt-4 mx-6'>
      <TouchableOpacity
        onPress={() => refRBSheet?.current?.open()}
        className='flex flex-row items-center rounded-2xl border-[1px] border-grey-100'
      >
        <PassengerIcon width={25} height={25} />
        <Divider />
        <View className='ml-4'>
          <Text className='text-[12px]'>Ýolagçy sany:</Text>
          <Text className='text-base font-bold'>{`${adult} uly, ${child} çaga`}</Text>
        </View>
      </TouchableOpacity>
      <BottomSheet refRBSheet={refRBSheet}>
        <View className='flex gap-4'>
          <View className='flex flex-row justify-between items-center px-6'>
            <View className='flex gap-6'>
              {ages?.map((age) => (
                <View className='flex' key={age?.uuid}>
                  <Text className='text-base font-bold'>
                    {age?.lang?.title}
                  </Text>
                  <Text className='text-[12px]'>{age?.lang?.description}</Text>
                </View>
              ))}
            </View>
            <View className='flex gap-y-6'>
              <View>
                <PassengerCounter
                  adult={adult}
                  child={child}
                  addPassenger={handleAddAdult}
                  removePassenger={handleRemoveAdult}
                />
              </View>
              <View>
                <PassengerCounter
                  adult={adult}
                  child={child}
                  addPassenger={handleAddChild}
                  removePassenger={handleRemoveChild}
                  isChild
                />
              </View>
            </View>
          </View>
          <Text className='px-6 text-justify'>
            Her uly adam üçin bir bäbek petegi tölegsiz. Bäbek sany uly
            adamlaryň sanyndan köp bolan ýaddaýynda, çaga nyrhnamasy arkaly
            petek sargyt edilmeli
          </Text>
          <View className='px-6'>
            <PrimaryButton
              onPress={() => refRBSheet?.current?.close()}
              text='Dowam et'
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default PassengerSelect;
