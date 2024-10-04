import DateSelect from '@/components/DateSelect';
import LocationSelect from '@/components/LocationSelect';
import PassengerSelect from '@/components/PassengerSelect';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import useAges from '@/hooks/useAges';
import useLocations from '@/hooks/useLocations';
import { router, Stack, useGlobalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
//@ts-ignore
import bgImage from '@/assets/images/bg.png';
import NewsSection from '@/components/NewsSection';
import useNews from '@/hooks/useNews';
import { useEffect, useState } from 'react';

export default function Home() {
  const [perPage, setPerPage] = useState(5);
  const { isLoading, locations } = useLocations('tk');
  const { agesLoading, ages } = useAges('tk');
  const { newsLoading, news, refetch } = useNews('tk', perPage, 0);
  const { from, to, date } = useGlobalSearchParams();
  const searchParams = {
    id: '001',
    from: from,
    to: to,
    date: date,
  };

  const loadMoreNews = () => {
    setPerPage((prevPerPage) => prevPerPage + 5);
  };

  useEffect(() => {
    refetch();
  }, [perPage]);

  const handleSearch = () => {
    router.push({ pathname: `/trips/[id]`, params: searchParams });
  };

  return (
    <ScrollView>
      <Stack.Screen options={{ headerShown: false }} />
      <Image className='h-[265px] w-full' source={bgImage} resizeMode='cover' />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LocationSelect options={locations?.data.rows || []} />
      )}
      <DateSelect />
      {agesLoading ? (
        <ActivityIndicator />
      ) : (
        <PassengerSelect ages={ages?.data || []} />
      )}
      <View className='px-6 py-4'>
        <PrimaryButton onPress={handleSearch} text='Gözlemek' />
      </View>
      <View className='px-6'>
        <SecondaryButton
          onPress={() => console.log('eee')}
          text='Petekleri gaýtarmak'
        />
      </View>
      {newsLoading ? (
        <ActivityIndicator />
      ) : (
        <NewsSection
          news={news?.data.rows || []}
          onLoadMore={loadMoreNews}
          title='Habarlar'
          isMain
        />
      )}
    </ScrollView>
  );
}
