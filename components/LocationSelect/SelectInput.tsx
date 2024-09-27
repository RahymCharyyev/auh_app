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
    <TouchableOpacity
      className='mx-4 w-[120px]'
      onPress={() => toggleDropdown(true)}
    >
      <Text className='text-[12px]'>Ugur:</Text>
      <Text className='text-base font-bold'>
        {location ? location.name : label}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectInput;
