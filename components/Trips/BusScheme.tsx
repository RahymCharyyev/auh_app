import { Seat } from '@/types/trip';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BusWheelIcon from './BusWheelIcon';

interface BusSchemeProps {
  seats: Seat[];
  selectedSeats: number[];
  seatCount: number;
  handleSelectSeat: (seatNumber: number, seatUuid: string) => void;
}

const BusScheme: FC<BusSchemeProps> = ({
  seats,
  selectedSeats,
  seatCount,
  handleSelectSeat,
}) => {
  return (
    <View className='flex flex-row flex-wrap w-[800px] rounded-3xl border-solid border-2 border-grey-200'>
      {seats?.map((seat) => {
        const notAvailable =
          seat.status !== 'available' &&
          'bg-grey-200 border-grey-300 text-black font-semibold';
        const isNotSeat = seat?.isSeat === false && 'opacity-0';
        return (
          <View key={seat?.uuid}>
            <TouchableOpacity
              disabled={seat?.isSeat === false ? true : false}
              className={`w-12 h-12 m-[6px] rounded-lg border-solid border-2 border-primary rotate-[90deg] items-center justify-center ${isNotSeat} ${notAvailable} `}
              onPress={() => {
                if (seat?.status == 'available')
                  handleSelectSeat(seat?.number, seat?.uuid);
              }}
            >
              <Text>{seat?.number}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <BusWheelIcon width={50} height={60} />
    </View>
  );
};

export default BusScheme;
