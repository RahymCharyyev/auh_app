import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { ScreenContent } from '@/components/ScreenContent';

const ContactUs = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Habarlaşmak' }} />
      <View>
        <ScreenContent path='app/(tabs)/contactUs.tsx' title='Habarlaşmak' />
      </View>
    </>
  );
};

export default ContactUs;
