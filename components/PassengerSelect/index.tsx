import { AgesModel } from '@/types/ages';
import React, { FC, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Divider from '../Divider';
import PrimaryButton from '../PrimaryButton';
import BottomSheet from './BottomSheet';
import PassengerCounter from './PassengerCounter';
import PassengerIcon from './PassengerIcon';

interface PassengerSelectProps {
  ages: AgesModel[];
}

const PassengerSelect: FC<PassengerSelectProps> = ({ ages }) => {
  const refRBSheet = useRef<any>();
  const adultModel = ages[0];
  const childModel = ages[1];
  const [adult, setAdult] = useState<string[]>([adultModel.uuid]);
  const [child, setChild] = useState<string[]>([]);

  const handleAddAdult = () => {
    if (adult.length + child.length < 10) {
      setAdult((prevAdults) => [...prevAdults, adultModel.uuid]);
    }
  };

  const handleRemoveAdult = () => {
    if (adult.length > 1) {
      setAdult((prevAdults) => prevAdults.slice(0, -1));
    }
  };

  const handleAddChild = () => {
    if (adult.length + child.length < 10) {
      setChild((prevChildren) => [...prevChildren, childModel.uuid]);
    }
  };

  const handleRemoveChild = () => {
    if (child.length > 0) {
      setChild((prevChildren) => prevChildren.slice(0, -1));
    }
  };

  return (
    <View className='mt-8 mx-6'>
      <TouchableOpacity
        onPress={() => refRBSheet?.current?.open()}
        className='flex flex-row items-center rounded-2xl border-[1px] border-grey-100'
      >
        <PassengerIcon width={25} height={25} />
        <Divider />
        <View className='ml-4'>
          <Text className='text-[12px]'>Ýolagçy sany:</Text>
          <Text className='text-base font-bold'>{`${adult.length} uly, ${child.length} çaga`}</Text>
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
          <PrimaryButton
            onPress={() => refRBSheet?.current?.close()}
            text='Dowam et'
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default PassengerSelect;
