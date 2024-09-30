import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface PassengerCounterProps {
  adult: string[];
  child: string[];
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
          disabled={child.length <= 0}
          className={`${
            child.length <= 0 ? 'bg-grey-100' : 'bg-primary'
          } rounded-md px-3`}
        >
          <Text className='text-white text-xl'>-</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={removePassenger}
          disabled={adult.length <= 1}
          className={`${
            adult.length <= 1 ? 'bg-grey-100' : 'bg-primary'
          } rounded-md px-3`}
        >
          <Text className='text-white text-xl'>-</Text>
        </TouchableOpacity>
      )}
      <Text className='text-xl font-bold'>
        {isChild ? child.length : adult.length}
      </Text>
      <TouchableOpacity
        onPress={addPassenger}
        disabled={adult.length + child.length >= 10}
        className={`${
          adult.length + child.length >= 10 ? 'bg-grey-100' : 'bg-primary'
        } rounded-md px-3`}
      >
        <Text className='text-white text-xl'>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassengerCounter;
