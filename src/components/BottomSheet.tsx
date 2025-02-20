import React from 'react';
import BottomSheetTwo from './BottomSheetTwo';
import useBottomSheet from './useBottomSheet';
import './BottomSheet.css';

const BottomSheet: React.FC = () => {
  const { sheetRef, stage } = useBottomSheet();

  return (
    <div ref={sheetRef} className={`bottom-sheet-container stage-${stage}`}>
      <BottomSheetTwo
        stage={stage}
        sheetRef={sheetRef}
        title="국제시장"
        subtitle="부산 중구 신창동4가"
        address="부산 중구 신창동4가"
        review={292}
        score={4.28}
        distance={3.2}
      />
    </div>
  );
};

export default BottomSheet;
