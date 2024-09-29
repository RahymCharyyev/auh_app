import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { FC } from 'react';
import { NewsModel } from '@/types/news';
import SecondaryButton from '../SecondaryButton';

const bgImage = require('../../assets/images/bg.png');

interface NewsSectionProps {
  news: NewsModel['rows'];
  onLoadMore: () => void;
}

const NewsSection: FC<NewsSectionProps> = ({ news, onLoadMore }) => {
  return (
    <View className='px-6 py-4'>
      <Text className='text-secondary font-semibold text-lg'>Habarlar</Text>
      <View className='flex gap-y-6'>
        {news.map((item) => (
          <View key={item.uuid} className='flex flex-row gap-2'>
            <Image
              defaultSource={require('../../assets/images/bg.png')}
              className='rounded-lg'
              source={{
                uri: item.imagePath,
              }}
              width={140}
              height={100}
            />
            <View className='flex gap-y-1 max-w-[240px] mx-auto'>
              <Text className='text-xs text-grey-300'>
                {new Date(item.createdAt).toLocaleDateString('ru-Ru')}
              </Text>
              <Text numberOfLines={4} className='font-bold mr-6 text-[14px]'>
                {item.detail.title}
              </Text>
            </View>
          </View>
        ))}
        <View className='py-2'>
          <SecondaryButton onPress={onLoadMore} text='Ýene-de görkez' />
        </View>
      </View>
    </View>
  );
};

export default NewsSection;
