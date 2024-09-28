import { AgesModel } from '@/types/ages';
import React, { FC, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Divider from '../Divider';
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

  const handleAddAdult = (prev: string, value: string) => {
    setAdult([...prev, value]);
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
          <Text className='text-base font-bold'>1 uly</Text>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
        }}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
        height={200}
        draggable={true}
        dragOnContent={true}
      >
        <View className='flex flex-row justify-between items-center px-6'>
          <View className='flex gap-6'>
            {ages.map((age) => (
              <View className='flex' key={age.uuid}>
                <Text className='text-base font-bold'>{age.lang.title}</Text>
                <Text className='text-[12px]'>{age.lang.description}</Text>
              </View>
            ))}
          </View>
          <View className='flex gap-6'>
            <View className='flex flex-row gap-x-6 items-center justify-center text-center'>
              <TouchableOpacity
                disabled={true}
                className='bg-grey-100 rounded-md px-2'
              >
                <Text className='text-white'>-</Text>
              </TouchableOpacity>
              <Text className='text-xl font-bold'>1</Text>
              <TouchableOpacity className='bg-primary rounded-md px-2'>
                <Text className='text-white'>+</Text>
              </TouchableOpacity>
            </View>
            <View className='flex flex-row gap-x-6 items-center justify-center text-center'>
              <TouchableOpacity
                disabled={true}
                className='bg-grey-100 rounded-md px-2'
              >
                <Text className='text-white'>-</Text>
              </TouchableOpacity>
              <Text className='text-xl font-bold'>0</Text>
              <TouchableOpacity className='bg-primary rounded-md px-2'>
                <Text className='text-white'>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default PassengerSelect;
