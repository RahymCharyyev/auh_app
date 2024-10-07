import dayjs from 'dayjs';

export const day = (date: dayjs.Dayjs, locale: string) =>
  dayjs(date).locale(locale).format('dddd');

export const dayWithMonth = (date: dayjs.Dayjs, locale: string) =>
  dayjs(date).locale(locale).format('D MMMM');

export const fullDate = (date: dayjs.Dayjs) => dayjs(date).format('DD.MM.YYYY');

export const fullDateEn = (date: dayjs.Dayjs) =>
  dayjs(date).format('YYYY-MM-DD');

export const getHours = (date: dayjs.Dayjs) => dayjs(date).format('HH:mm');
