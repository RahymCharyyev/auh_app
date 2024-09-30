import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface SecondaryButtonProps {
  onPress: () => void;
  text: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ onPress, text }) => {
  return (
    <View>
      <TouchableOpacity
        className='py-3 bg-white border-[1px] border-grey-300 w-full self-center rounded-xl'
        onPress={onPress}
      >
        <Text className='text-primary text-center text-md'>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;
