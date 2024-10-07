import Toast from 'react-native-root-toast';

export const toastShow = (text: string, color: string) => {
  Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    opacity: 1,
    animation: true,
    hideOnPress: true,
    backgroundColor: color,
    containerStyle: {
      width: '100%',
    },
    textStyle: {
      fontSize: 14,
    },
  });
};
