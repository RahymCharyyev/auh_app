import React, { FC } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

interface BottomSheetProps {
  refRBSheet: any;
  children: React.ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({ refRBSheet, children }) => {
  return (
    <RBSheet
      ref={refRBSheet}
      customStyles={{
        wrapper: {
          backgroundColor: '#00000080',
        },
        container: {
          borderRadius: 20,
        },
      }}
      customModalProps={{
        animationType: 'fade',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
      height={350}
      draggable={true}
      dragOnContent={true}
    >
      {children}
    </RBSheet>
  );
};

export default BottomSheet;
