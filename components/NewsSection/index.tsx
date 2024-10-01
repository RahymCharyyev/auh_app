import { NewsModel } from '@/types/news';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SecondaryButton from '../SecondaryButton';
import { dateTransfrom } from '@/utils/dateTransform';

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
          <Link key={item.uuid} href={`/news/${item.uuid}`} asChild>
            <Pressable className='flex flex-row gap-2'>
              <Image
                className='rounded-lg'
                source={{
                  uri: item.imagePath,
                }}
                width={140}
                height={100}
              />
              <View className='flex gap-y-1 max-w-[240px] mx-auto'>
                <Text className='text-xs text-grey-300'>
                  {dateTransfrom(item.createdAt)}
                </Text>
                <Text numberOfLines={4} className='font-bold mr-6 text-[14px]'>
                  {item.detail.title}
                </Text>
              </View>
            </Pressable>
          </Link>
        ))}
        <View className='py-2'>
          <SecondaryButton onPress={onLoadMore} text='Ýene-de görkez' />
        </View>
      </View>
    </View>
  );
};

export default NewsSection;
