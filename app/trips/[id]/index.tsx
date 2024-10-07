import CalendarComponent from '@/components/Trips/Calendar';
import ShowTrip from '@/components/Trips/ShowTrip';
import useLocations from '@/hooks/useLocations';
import useTrips from '@/hooks/useTrips';
import { fullDateEn } from '@/utils/dateUtil';
import { Stack, useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';

export default function TripDetails() {
  const { from, to, date, adultCount, childCount } = useGlobalSearchParams();
  const { isLoading, locations } = useLocations('tk');
  const passengerCount = Number(adultCount) + Number(childCount);
  const formattedDate = Array.isArray(date) ? date[0] : (date as any);
  const [selectedDate, setSelectedDate] = useState<any>(
    fullDateEn(formattedDate)
  );

  const searchParams = {
    from: from,
    to: to,
    date: date,
    adultCount: adultCount,
    childCount: childCount,
  };

  const {
    tripsLoading,
    trips,
    refetch: refetchTrips,
  } = useTrips(
    'tk',
    from as string,
    to as string,
    selectedDate.toString(),
    true
  );

  useEffect(() => {
    refetchTrips();
  }, [selectedDate]);

  if (tripsLoading || isLoading)
    return <ActivityIndicator size='large' color='#2CA93B' />;

  const fromLocation = locations?.data.rows.find((e) => e.uuid === from);
  const toLocation = locations?.data.rows.find((e) => e.uuid === to);

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: `${fromLocation?.name} - ${toLocation?.name}`,
          headerStyle: {
            backgroundColor: '#2CA93B',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <CalendarComponent
        onSelectDate={setSelectedDate}
        selected={selectedDate}
      />
      {trips?.data?.rows?.length ? (
        <ShowTrip
          trips={trips}
          passengerCount={passengerCount}
          searchParams={searchParams}
        />
      ) : (
        <Text className='font-semibold text-center mt-8 text-lg px-20'>
          Siziň gözlän şertleriňize laýyk ugur tapylmady.
        </Text>
      )}
    </ScrollView>
  );
}
