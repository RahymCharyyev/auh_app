import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useDetailedNews from '@/hooks/useDetailedNews';
import RenderHtml from 'react-native-render-html';
import { dateTransfrom } from '@/utils/dateTransform';

const DetailedNews = () => {
  const { id } = useLocalSearchParams();
  const { newsLoading, news, error } = useDetailedNews(id as string, 'tk');
  const { width } = useWindowDimensions();

  if (newsLoading) {
    return <ActivityIndicator size='large' color='#0000ff' />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return news ? (
    <ScrollView>
      <Image
        source={{
          uri: news.imagePath,
        }}
        width={width}
        height={250}
      />
      <View className='flex gap-y-2 px-4 py-4'>
        <Text className='text-justify text-grey-300'>
          {dateTransfrom(news.createdAt)}
        </Text>
        <Text className='font-medium text-xl'>{news.detail.title}</Text>
        <View className='border-b-grey-400 border-b-[1px] py-1 my-1' />
        <RenderHtml
          contentWidth={width}
          source={{ html: news?.detail.description }}
          enableExperimentalMarginCollapsing={true}
          enableExperimentalGhostLinesPrevention={true}
        />
        <View className='border-b-grey-400 border-b-[1px] py-1 my-1' />
      </View>
    </ScrollView>
  ) : (
    <Text>No news found</Text>
  );
};

export default DetailedNews;
