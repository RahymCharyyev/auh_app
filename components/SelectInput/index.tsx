import { Location } from '@/types/locations';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface SelectInputProps {
  toggleDropdown: (data: boolean) => void;
  location: Location;
  label: string;
}

const SelectInput: FC<SelectInputProps> = ({
  toggleDropdown,
  location,
  label,
}) => {
  return (
    <TouchableOpacity className='mx-4' onPress={() => toggleDropdown(true)}>
      <Text className='text-sm'>Ugur:</Text>
      <Text className='text-[18px] font-bold'>
        {location ? location.name : label}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectInput;
