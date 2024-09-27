import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface FromToIconProps {
  width: number;
  height: number;
  className?: string;
}

const FromToIcon: FC<FromToIconProps> = ({ width, height, className }) => {
  return (
    <View className={className}>
      <Svg width={width} height={height} viewBox="0 0 72 72" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.1353 0.82465C71.9528 1.64187 72.1756 2.88136 71.694 3.93215L41.279 70.2922C40.7374 71.4738 39.4459 72.1187 38.1759 71.8415C36.9059 71.5643 36.0005 70.44 36.0005 69.1401V35.9843H2.82045C1.52073 35.9843 0.396462 35.0791 0.11913 33.8093C-0.158203 32.5395 0.486277 31.248 1.66764 30.7061L68.0277 0.266877C69.0783 -0.215051 70.3179 0.00742776 71.1353 0.82465ZM15.4802 30.4543H37.383C38.4829 30.4543 39.5379 30.8913 40.3157 31.6691C41.0935 32.4469 41.5305 33.5018 41.5305 34.6018V56.4712L63.5638 8.39846L15.4802 30.4543Z"
          fill="#1D8036"
        />
      </Svg>
    </View>
  );
};

export default FromToIcon;
