import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ChangeLocationIconProps {
  width: number;
  height: number;
  onPress: () => void;
}

const ChangeLocationIcon: FC<ChangeLocationIconProps> = ({
  width,
  height,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className='h-10 w-10 rounded-full border-[1px] border-grey-100 bg-grey-500 absolute z-10 items-center justify-center'
    >
      <Svg width={width} height={height} viewBox='0 0 75 84' fill='none'>
        <Path
          d='M54.1667 58.3333V41.6667L75 62.5L54.1667 83.3333V66.6667H4.16667V58.3333H54.1667ZM20.8333 0V16.6625L70.8333 16.6667V25H20.8333V41.6667L0 20.8333L20.8333 0Z'
          fill='#1D8036'
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default ChangeLocationIcon;
