import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  onPress: () => void;
  text: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        className='w-full self-center rounded-xl'
        colors={['#2FCC56', '#27A847']}
      >
        <Text className='text-white text-center py-3 text-lg'>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
