import { Location, LocationsModel } from '@/types/locations';
import { router, useGlobalSearchParams } from 'expo-router';
import React, { FC, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import Divider from '../Divider';
import ChangeLocationIcon from './ChangeLocationIcon';
import FromToIcon from './FromToIcon';
import SelectInput from './SelectInput';

interface LocationSelectProps {
  options: LocationsModel['rows'];
}

const LocationSelect: FC<LocationSelectProps> = ({ options }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectingFrom, setSelectingFrom] = useState(true);
  const { from, to } = useGlobalSearchParams();

  const fromLocation = options.find((location) => location.uuid === from);
  const toLocation = options.find((location) => location.uuid === to);

  const toggleDropdown = (isFrom: boolean) => {
    setSelectingFrom(isFrom);
    setIsVisible(!isVisible);
  };

  const handleSelect = (option: Location) => {
    const newParams = selectingFrom
      ? { from: option.uuid, to }
      : { from, to: option.uuid };

    router.setParams(newParams);
    toggleDropdown(selectingFrom);
  };

  const changeLocations = () => {
    if (fromLocation && toLocation) {
      router.setParams({ from: toLocation.uuid, to: fromLocation.uuid });
    }
  };

  return (
    <View className='mt-8 mx-6'>
      <View className='flex flex-row items-center rounded-2xl border-[1px] border-grey-100'>
        <FromToIcon width={25} height={25} />
        <Divider />
        <SelectInput
          toggleDropdown={() => toggleDropdown(true)}
          location={fromLocation!}
          label='Nireden'
        />
        <View className='items-center justify-center mr-4'>
          <ChangeLocationIcon
            width={25}
            height={25}
            onPress={() => changeLocations()}
          />
          <Divider />
        </View>
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
