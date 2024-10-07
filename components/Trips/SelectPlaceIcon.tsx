import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SelectPlaceIconProps {
  width: number;
  height: number;
}

const SelectPlaceIcon: FC<SelectPlaceIconProps> = ({ width, height }) => {
  return (
    <View className='pl-2'>
      <Svg width={width} height={height} viewBox='0 0 8 12' fill='none'>
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M0.872129 0.340879C1.20163 0.0113738 1.73587 0.0113738 2.06537 0.340879L7.12787 5.40338C7.45738 5.73288 7.45738 6.26712 7.12787 6.59662L2.06537 11.6591C1.73587 11.9886 1.20163 11.9886 0.872129 11.6591C0.542624 11.3296 0.542624 10.7954 0.872129 10.4659L5.33801 6L0.872129 1.53412C0.542624 1.20462 0.542624 0.670384 0.872129 0.340879Z'
          fill='#28B14A'
        />
      </Svg>
    </View>
  );
};

export default SelectPlaceIcon;
