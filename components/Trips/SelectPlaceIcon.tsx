import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SelectPlaceIconProps {
  width: number;
  height: number;
}

const SelectPlaceIcon: FC<SelectPlaceIconProps> = ({ width, height }) => {
  return (
    <View className='px-2'>
      <Svg width={width} height={height} viewBox='0 0 58 58' fill='none'>
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M18.7963 10.8372C19.8375 9.79597 21.5257 9.79597 22.567 10.8372L38.5645 26.8347C39.6057 27.8759 39.6057 29.5641 38.5645 30.6053L22.567 46.6028C21.5257 47.6441 19.8375 47.6441 18.7963 46.6028C17.7551 45.5616 17.7551 43.8734 18.7963 42.8322L32.9085 28.72L18.7963 14.6078C17.7551 13.5666 17.7551 11.8784 18.7963 10.8372Z'
          fill='#28B14A'
        />
      </Svg>
    </View>
  );
};

export default SelectPlaceIcon;
