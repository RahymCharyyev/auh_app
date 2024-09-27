import { ScreenContent } from '@/components/ScreenContent';
import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const Info = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Habarlaşmak' }} />
      <View>
        <ScreenContent path='app/(tabs)/contactUs.tsx' title='Habarlaşmak' />
      </View>
    </>
  );
};

export default Info;
