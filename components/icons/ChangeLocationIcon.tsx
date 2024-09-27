import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ChangeLocationIconProps {
  width: number;
  height: number;
  className: string;
}

const ChangeLocationIcon: FC<ChangeLocationIconProps> = ({ width, height, className }) => {
  return (
    <View className={className}>
      <Svg width={width} height={height} viewBox="0 0 75 84" fill="none">
        <Path
          d="M54.1667 58.3333V41.6667L75 62.5L54.1667 83.3333V66.6667H4.16667V58.3333H54.1667ZM20.8333 0V16.6625L70.8333 16.6667V25H20.8333V41.6667L0 20.8333L20.8333 0Z"
          fill="#1D8036"
        />
      </Svg>
    </View>
  );
};

export default ChangeLocationIcon;
