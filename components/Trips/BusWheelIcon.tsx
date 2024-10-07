import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';

interface BusWheelIconProps {
  width: number;
  height: number;
}

const BusWheelIcon: FC<BusWheelIconProps> = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 64 64'
      fill='#000000'
      transform='matrix(1, 0, 0, 1, 0, 0)rotate(90)'
    >
      <G id='SVGRepo_bgCarrier' stroke-width='0' />

      <G
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <G id='SVGRepo_iconCarrier'>
        <G
          id='Page-1'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'
        >
          <G
            id='Steering-wheel'
            transform='translate(1.000000, 1.000000)'
            stroke='#6B6C6E'
            stroke-width='2'
          >
            <Circle id='Oval' cx='31' cy='31' r='31'></Circle>
            <Circle id='Oval' cx='31' cy='31' r='27'></Circle>
            <Path
              d='M5,38.4 C6.3,38.1 7.6,38 9,38 C18.9,38 27,45.4 27,54.5 C27,55.6 26.9,56.6 26.7,57.6'
              id='Shape'
            ></Path>
            <Path
              d='M57.9,28.6 C51,23.9 41.5,21 31,21 C20.5,21 11,23.9 4.1,28.6'
              id='Shape'
            ></Path>
            <Path
              d='M35.3,57.6 C35.1,56.6 35,55.5 35,54.5 C35,45.4 43.1,38 53,38 C54.4,38 55.7,38.1 57,38.4'
              id='Shape'
            ></Path>
            <Circle id='Oval' cx='31' cy='31' r='3'></Circle>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default BusWheelIcon;
