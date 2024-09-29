import DateSelect from '@/components/DateSelect';
import LocationSelect from '@/components/LocationSelect';
import PassengerSelect from '@/components/PassengerSelect';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import useAges from '@/hooks/useAges';
import useLocations from '@/hooks/useLocations';
import { Stack } from 'expo-router';
import { ActivityIndicator, Image, ScrollView } from 'react-native';
//@ts-ignore
import bgImage from '@/assets/images/bg.png';
import NewsSection from '@/components/NewsSection';
import useNews from '@/hooks/useNews';
import { useEffect, useState } from 'react';

export default function Home() {
  const [perPage, setPerPage] = useState(5);
  const { isLoading, locations } = useLocations('tk');
  const { agesLoading, ages } = useAges('tk');
  const { newsLoading, news, refetch } = useNews('tk', 0, perPage);

  const loadMoreNews = () => {
    setPerPage((prevPerPage) => prevPerPage + 5);
  };

  useEffect(() => {
    refetch();
  }, [perPage]);

  console.log(news);

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
      <PrimaryButton onPress={() => console.log('eee')} text='Gözlemek' />
      <SecondaryButton
        onPress={() => console.log('eee')}
        text='Petekleri gaýtarmak'
      />
      {newsLoading ? (
        <ActivityIndicator />
      ) : (
        <NewsSection news={news?.data.rows || []} onLoadMore={loadMoreNews} />
      )}
    </ScrollView>
  );
}
