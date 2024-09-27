import { ScreenContent } from '@/components/ScreenContent';
import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const Tickets = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Peteklerim' }} />
      <View>
        <ScreenContent path='app/(tabs)/tickets.tsx' title='Peteklerim' />
      </View>
    </>
  );
};

export default Tickets;
