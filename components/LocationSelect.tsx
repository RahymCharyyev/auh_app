import { Location, LocationsModel } from '@/types/locations';
import React, { FC, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import ChangeLocationIcon from './icons/ChangeLocationIcon';
import FromToIcon from './icons/FromToIcon';
import SelectInput from './SelectInput';

interface LocationSelectProps {
  options: LocationsModel['rows'];
}

const LocationSelect: FC<LocationSelectProps> = ({ options }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectingFrom, setSelectingFrom] = useState(true);
  const [fromLocation, setFromLocation] = useState<Location>();
  const [toLocation, setToLocation] = useState<Location>();

  const toggleDropdown = (isFrom: boolean) => {
    setSelectingFrom(isFrom);
    setIsVisible(!isVisible);
  };

  const handleSelect = (option: Location) => {
    if (selectingFrom) setFromLocation(option);
    else setToLocation(option);
    toggleDropdown(selectingFrom);
  };

  const changeLocations = () => {
    if (fromLocation && toLocation != undefined) setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    <View className='mt-8 mx-4'>
      <View className='flex flex-row items-center rounded-2xl border-[1px] border-grey-100'>
        <FromToIcon width={30} height={30} className='h-100' />
        <View className='h-[80px] border-l-[1px] border-grey-100' />
        <SelectInput
          toggleDropdown={() => toggleDropdown(true)}
          location={fromLocation!}
          label='Nireden'
        />
        <TouchableOpacity
          onPress={() => changeLocations()}
          className='relative h-12 w-12 items-center justify-center rounded-full border-[1px] border-grey-100'
        >
          <View className='relative h-[80px] border-l-[1px] border-grey-100'>
            <ChangeLocationIcon
              width={30}
              height={30}
              className='absolute top-0 left-0 z-10'
            />
          </View>
        </TouchableOpacity>
        <SelectInput
          toggleDropdown={() => toggleDropdown(false)}
          location={toLocation!}
          label='Nirä'
        />
      </View>
      <Modal visible={isVisible} transparent animationType='fade'>
        <TouchableOpacity
          className='flex-1 items-center justify-center bg-[#00000080]'
          onPress={() => toggleDropdown(selectingFrom)}
        >
          <View className='w-[80%] rounded-[5px] bg-white p-[10px]'>
            <FlatList
              data={options}
              keyExtractor={(item) => item.uuid}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Text className='p-[10px]'>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default LocationSelect;
