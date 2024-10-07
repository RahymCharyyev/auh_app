import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface PassengerCounterProps {
  adult: number;
  child: number;
  addPassenger: () => void;
  removePassenger: () => void;
  isChild?: boolean;
}

const PassengerCounter: FC<PassengerCounterProps> = ({
  adult,
  child,
  addPassenger,
  removePassenger,
  isChild,
}) => {
  return (
    <View className='flex flex-row gap-x-6 items-center justify-center text-center'>
      {isChild ? (
        <TouchableOpacity
          onPress={removePassenger}
          disabled={child <= 0}
          className={`${
            child <= 0 ? 'bg-grey-100' : 'bg-primary'
          } rounded-md px-3`}
        >
          <Text className='text-white text-xl'>-</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={removePassenger}
          disabled={adult <= 1}
          className={`${
            adult <= 1 ? 'bg-grey-100' : 'bg-primary'
          } rounded-md px-3`}
        >
          <Text className='text-white text-xl'>-</Text>
        </TouchableOpacity>
      )}
      <Text className='text-xl font-bold'>{isChild ? child : adult}</Text>
      <TouchableOpacity
        onPress={addPassenger}
        disabled={adult + child >= 10}
        className={`${
          adult + child >= 10 ? 'bg-grey-100' : 'bg-primary'
        } rounded-md px-3`}
      >
        <Text className='text-white text-xl'>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassengerCounter;
