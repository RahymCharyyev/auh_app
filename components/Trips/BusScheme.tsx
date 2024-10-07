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
    <View className='rounded-3xl border-solid border-2 border-grey-200 mx-auto p-6 rotate-[180deg]'>
      <View className={`flex flex-wrap`}>
        {seats?.map((seat) => {
          const available = selectedSeats.includes(seat?.number)
            ? 'bg-primary text-white border-yellow-100 font-semibold z-10'
            : '';

          const notAvailable =
            seat.status === 'notAvailable' &&
            'bg-grey-200 border-grey-300 text-black font-semibold cursor-default';

          const processing =
            seat.status === 'processing' &&
            'bg-yellow-100 text-white font-semibold cursor-default';

          const bookedCashier =
            seat.status === 'booked_cashier' &&
            `bg-grey-200 text-black border-grey-300 font-semibold cursor-default`;

          const bookedAdmin =
            seat.status === 'booked_admin' &&
            `bg-grey-200 text-black  border-grey-300 font-semibold cursor-default`;

          return (
            <View key={seat?.uuid}>
              <TouchableOpacity
                disabled={seat?.isSeat === false ? true : false}
                className={`w-12 h-12 m-[6px] rounded-lg border-solid border-2 border-primary ${
                  seat?.isSeat === false && 'opacity-0'
                } ${processing} ${notAvailable} ${bookedCashier} ${bookedAdmin} ${available}`}
                onPress={() => {
                  if (seat?.status == 'available') {
                    handleSelectSeat(seat?.number, seat?.uuid);
                  }
                }}
              >
                <Text>{seat?.number}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <BusWheelIcon width={50} height={60} />
    </View>
    // <View className='flex flex-row flex-wrap w-[350px] items-center text-center rounded-3xl border-solid border-2 border-grey-200 mx-auto p-6'>
    //   {seats.map((seat) => (
    //     <View key={seat.uuid}>
    //       <TouchableOpacity
    //         disabled={seat?.isSeat === false ? true : false}
    //         className={`w-12 h-12 m-[6px] rounded-lg border-solid border-2 border-primary text-center ${
    //           seat?.isSeat === false && 'opacity-0'
    //         }`}
    //         onPress={() => {
    //           if (seat?.status == 'available')
    //             handleSelectSeat(seat?.number, seat?.uuid);
    //         }}
    //       >
    //         <Text>{seat?.number}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   ))}
    // </View>
  );
};

export default BusScheme;
