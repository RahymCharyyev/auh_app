import BusScheme from '@/components/Trips/BusScheme';
import useDetailedTrip from '@/hooks/useDetailedTrip';
import useTrips from '@/hooks/useTrips';
import { Stack, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

export default function BusSchemePage() {
  const { id, from, to, date, adultCount, childCount } =
    useGlobalSearchParams();
  const passengerCount = Number(adultCount) + Number(childCount);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const {
    detailedTripLoading,
    detailedTrip,
    refetch: refetchTrips,
  } = useDetailedTrip(id.toString(), 'tk');

  if (detailedTripLoading)
    return <ActivityIndicator size='large' color='#2CA93B' />;

  console.log(selectedSeats);

  return (
    // <ScrollView>
    <>
      <Stack.Screen
        options={{
          title: `Ýer saýlamak`,
          headerStyle: {
            backgroundColor: '#2CA93B',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <BusScheme
        seats={detailedTrip?.data?.seats!}
        seatCount={detailedTrip?.data?.bus?.seatCount!}
        handleSelectSeat={() => console.log('s')}
        selectedSeats={selectedSeats}
      />
    </>
    // </ScrollView>
  );
}
