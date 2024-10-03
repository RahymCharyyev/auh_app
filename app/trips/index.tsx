import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useGlobalSearchParams } from 'expo-router';
import useTrips from '@/hooks/useTrips';

const Trips = () => {
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

  if (tripsLoading) return <ActivityIndicator size='large' color='#0000ff' />;

  console.log(from);
  console.log(to);
  console.log(date);

  return (
    <View>
      <Text>{trips?.data.count}</Text>
    </View>
  );
};

export default Trips;
