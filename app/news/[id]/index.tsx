import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useDetailedNews from '@/hooks/useDetailedNews';
const DetailedNews = () => {
  const { id } = useLocalSearchParams();
  const { newsLoading, news, error } = useDetailedNews(id as string, 'tk');

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

  return (
    <View>
      {news ? (
        <View>
          <Text>{news.detail.title}</Text>
          <Text>{news.detail.description}</Text>
        </View>
      ) : (
        <Text>No news found</Text>
      )}
    </View>
  );
};

export default DetailedNews;
