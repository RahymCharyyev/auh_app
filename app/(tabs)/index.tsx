import LocationSelect from '@/components/LocationSelect';
import useLocations from '@/hooks/useLocations';
import { Stack } from 'expo-router';
import { ActivityIndicator, Image, View } from 'react-native';

const bgImage = require('../../assets/images/bg.png');

export default function Home() {
  const { isLoading, locations } = useLocations('tk');

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Image className='h-[265px] w-full' source={bgImage} resizeMode='cover' />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LocationSelect options={locations?.data.rows || []} />
      )}
    </View>
  );
}
