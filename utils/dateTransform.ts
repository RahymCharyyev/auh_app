export const dateTransform = (date: string) =>
  new Date(date).toLocaleDateString('ru-Ru');

export const getHours = (date: string) =>
  new Date(date).toLocaleTimeString('ru-Ru', {
    hour: '2-digit',
    minute: '2-digit',
  });
