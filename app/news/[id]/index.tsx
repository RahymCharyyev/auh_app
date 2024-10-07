import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import useDetailedNews from '@/hooks/useDetailedNews';
import RenderHtml from 'react-native-render-html';
import { fullDate } from '@/utils/dateUtil';
import NewsSection from '@/components/NewsSection';
import useNews from '@/hooks/useNews';

const DetailedNews = () => {
  const { id } = useLocalSearchParams();
  const { detailedNewsLoading, detailedNews, error } = useDetailedNews(
    id as string,
    'tk'
  );
  const { newsLoading, news } = useNews('tk', 6);
  const filteredNews = news?.data.rows.filter(
    (e) => e.uuid !== detailedNews?.uuid
  );
  const { width } = useWindowDimensions();

  if (detailedNewsLoading || newsLoading)
    return <ActivityIndicator size='large' color='#0000ff' />;

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return detailedNews ? (
    <ScrollView>
      <Stack.Screen
        options={{
          title: 'Habarlar',
          headerStyle: {
            backgroundColor: '#2CA93B',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Image
        source={{
          uri: detailedNews.imagePath,
        }}
        width={width}
        height={250}
      />
      <View className='flex gap-y-2 px-4 py-4'>
        <Text className='text-justify text-grey-300'>
          {fullDate(detailedNews.createdAt)}
        </Text>
        <Text className='font-medium text-xl'>{detailedNews.detail.title}</Text>
        <View className='border-b-grey-400 border-b-[1px] py-1 my-1' />
        <RenderHtml
          contentWidth={width}
          source={{ html: detailedNews?.detail.description }}
          enableExperimentalMarginCollapsing={true}
          enableExperimentalGhostLinesPrevention={true}
        />
        <View className='border-b-grey-400 border-b-[1px] py-1 my-1' />
      </View>
      <NewsSection
        news={filteredNews || []}
        title='Soňky goşulanlar'
        isMain={false}
      />
    </ScrollView>
  ) : (
    <Text>No news found</Text>
  );
};

export default DetailedNews;
