import SelectPlaceIcon from '@/components/Trips/SelectPlaceIcon';
import TripDurationIcon from '@/components/Trips/TripDurationIcon';
import useTrips from '@/hooks/useTrips';
import { dateTransform, getHours } from '@/utils/dateTransform';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, Stack, useGlobalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

export default function TripDetails() {
  const { from, to, date } = useGlobalSearchParams();
  const {
    tripsLoading,
    trips,
    refetch: refetchTrips,
  } = useTrips('tk', from as string, to as string, date as string, true);

  useEffect(() => {
    if (from && to && date) {
      refetchTrips();
    }
  }, [from, to, date]);

  if (tripsLoading) return <ActivityIndicator size='large' color='#2CA93B' />;

  const headerTitle = `${trips?.data.rows[0].route.fromLocationName} - ${trips?.data.rows[0].route.toLocationName}`;

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: headerTitle,
          headerStyle: {
            backgroundColor: '#2CA93B',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <View className='flex gap-6 rounded-lg px-6 my-6'>
        {trips?.data.rows.map((item) => {
          const finishTime = (() => {
            const startDate = new Date(item.startDate);
            startDate.setHours(startDate.getHours() + Number(item.duration));
            const hours = String(startDate.getHours()).padStart(2, '0');
            const minutes = String(startDate.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
          })();
          return (
            <View key={item.uuid}>
              <LinearGradient
                className='flex flex-row justify-between p-4 rounded-t-xl'
                colors={['#2FCC56', '#27A847']}
              >
                <Text className='text-white text-base'>
                  {dateTransform(item.startDate)}
                </Text>
                <Text className='text-white text-base'>{item.price} TMT</Text>
              </LinearGradient>
              <View className='bg-white rounded-b-xl px-6 py-4'>
                <View className='flex flex-row justify-between items-start'>
                  <View>
                    <Text className='text-lg'>
                      {item.route.fromLocationName}
                    </Text>
                    <Text className='text-3xl font-medium'>
                      {getHours(item.startDate)}
                    </Text>
                  </View>
                  <TripDurationIcon width={80} height={100} />
                  <View>
                    <Text className='text-lg'>{item.route.toLocationName}</Text>
                    <Text className='text-3xl font-medium'>{finishTime}</Text>
                  </View>
                </View>
                <View className='flex flex-row justify-between items-center'>
                  <Text className='text-base'>
                    <Text className='text-primary font-medium'>
                      {item.availableSeatCount} {''}
                    </Text>
                    boş orun
                  </Text>
                  <View className='flex flex-row justify-between items-center'>
                    <Link
                      href={'/'}
                      className='font-medium text-base text-primary'
                    >
                      Ýer saýlamak
                    </Link>
                    <SelectPlaceIcon width={20} height={20} />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
