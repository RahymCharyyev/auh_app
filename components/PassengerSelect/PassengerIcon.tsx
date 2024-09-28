import { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface PassengerIconProps {
  width: number;
  height: number;
}

const PassengerIcon: FC<PassengerIconProps> = ({ width, height }) => {
  return (
    <View className='px-2'>
      <Svg width={width} height={height} viewBox='0 0 90 89' fill='none'>
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M58.8251 13.9451C54.6958 13.9451 50.9648 15.5022 48.3428 18.298C45.7139 21.1011 44.3521 24.9869 44.6613 29.3481C45.2354 37.456 51.3449 44.3601 58.8251 44.3601C66.3079 44.3601 72.4048 37.4511 72.9885 29.3513C73.6224 20.5703 67.2778 13.9451 58.8251 13.9451ZM52.3764 22.0809C50.8851 23.671 49.9683 26.0067 50.1775 28.957C50.5989 34.909 54.9342 38.8301 58.8251 38.8301C62.7131 38.8301 67.0437 34.9104 67.4728 28.9539C67.8755 23.3778 64.0693 19.4751 58.8251 19.4751C56.1057 19.4751 53.8748 20.4833 52.3764 22.0809Z'
          fill='#1D8036'
        />
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M31.3367 68.474C34.4711 55.8906 46.8359 49.8901 58.8251 49.8901C70.79 49.8901 83.1827 55.6987 86.3174 68.4831C87.0021 71.2686 85.2713 74.7751 81.607 74.7751H36.0449C32.3904 74.7751 30.6382 71.2766 31.3367 68.474V68.474ZM36.8539 69.2451H80.8008C78.2831 60.2505 69.176 55.4201 58.8251 55.4201C48.5082 55.4201 39.3801 60.3947 36.8539 69.2451Z'
          fill='#1D8036'
        />
        <Path
          d='M26.1718 45.034C20.0888 45.034 14.7489 39.3831 14.2478 32.436C13.9885 28.8761 15.0945 25.5926 17.3411 23.1733C19.5704 20.7884 22.6983 19.4751 26.1545 19.4751C29.5935 19.4751 32.7214 20.8057 34.9507 23.2078C37.2145 25.6445 38.3205 28.9279 38.0613 32.4533C37.5947 39.3831 32.2375 45.034 26.1718 45.034ZM26.1718 24.9878C24.2709 24.9878 22.5773 25.679 21.4022 26.9406C20.1925 28.2367 19.6222 29.9994 19.7778 32.0385C20.0715 36.0824 22.9921 39.504 26.1718 39.504C29.3516 39.504 32.2894 36.0824 32.5659 32.0385C32.7041 30.0512 32.1166 28.2539 30.9242 26.9579C29.749 25.679 28.0555 24.9878 26.1718 24.9878Z'
          fill='#1D8036'
        />
        <Path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M3.66764 63.5216C6.25766 53.1305 16.4506 48.257 26.1635 48.257C30.0751 48.257 33.9305 48.8464 37.5112 50.487C38.8995 51.1231 39.5092 52.7641 38.8732 54.1524C38.2371 55.5407 36.596 56.1505 35.2077 55.5144C32.5499 54.2967 29.5343 53.787 26.1635 53.787C18.364 53.787 11.5781 57.4081 9.3748 63.7151H27.3732C28.9003 63.7151 30.1382 64.953 30.1382 66.4801C30.1382 68.0071 28.9003 69.2451 27.3732 69.2451H7.96981C4.61397 69.2451 3.04503 66.0346 3.66669 63.5254L3.66764 63.5216Z'
          fill='#1D8036'
        />
      </Svg>
    </View>
  );
};

export default PassengerIcon;
