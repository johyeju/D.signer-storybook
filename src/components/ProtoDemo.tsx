import { useState, useEffect } from 'react';
import NaverMap from './NaverMap';
import BottomSheet from './BottomSheet';
import './ProtoDemo.css';

export const ProtoDemoPage = () => {
  const [bottomSheetStage, setBottomSheetStage] = useState(1);
  const [mapCenter, setMapCenter] = useState({ lat: 35.1006, lng: 129.0305 });

  // ✅ 마커의 위치 (국제시장)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const markerPosition = { lat: 35.1006, lng: 129.0305 };

  useEffect(() => {
    if (bottomSheetStage === 1) {
      setTimeout(() => {
        setMapCenter(markerPosition); // ✅ 1단 변경 시 지도 중심 이동 (딜레이 추가)
      }, 300); // 300ms 후 이동
    }
  }, [bottomSheetStage, markerPosition]);

  return (
    <div
      className={`proto-container stage-${bottomSheetStage}`}
      style={{
        width: '375px',
        height: '812px',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}
    >
      {/* 네이버 지도 */}
      <NaverMap
        lat={mapCenter.lat}
        lng={mapCenter.lng}
        setBottomSheetStage={setBottomSheetStage}
        markerPosition={markerPosition}
        onMarkerClick={() => {
          setBottomSheetStage(2); // ✅ 마커 클릭 시 바텀시트 2단 전환
          setMapCenter(markerPosition); // ✅ 지도 중심 변경
        }}
      />

      {/* 바텀시트 */}
      <div style={{ bottom: 0, width: '100%' }}>
        <BottomSheet
          title="국제시장"
          subtitle="부산 중구 신창동4가"
          address="부산 중구 신창동4가"
          review={292}
          score={4.28}
          distance={0.3}
          onStageChange={(stage) => {
            setBottomSheetStage(stage);
            if (stage === 1) {
              setTimeout(() => {
                setMapCenter(markerPosition); // ✅ 1단으로 변경될 때 지도 중심 이동 (부드럽게)
              }, 300); // 300ms 후 이동
            }
          }}
        />
      </div>
    </div>
  );
};
