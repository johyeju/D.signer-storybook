import { useEffect, useState } from 'react';
import MapMaker from './MapMaker';
import { createRoot } from 'react-dom/client';

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAPS_CLIENT_ID;

export const ProtoDemoPage = () => {
  const [, setMap] = useState<unknown>(null);
  const busanLocation = { lat: 35.1006, lng: 129.0305 };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      if (!window.naver) {
        console.error('네이버 지도 API가 로드되지 않았습니다.');
        return;
      }

      const mapOptions = {
        center: new window.naver.maps.LatLng(
          busanLocation.lat,
          busanLocation.lng
        ),
        zoom: 14,
      };

      const newMap = new window.naver.maps.Map('naverMap', mapOptions);
      setMap(newMap);

      const markerElement = document.createElement('div');
      createRoot(markerElement).render(
        <MapMaker size="L" iconName="pin" theme="Red" color={''} />
      );

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          busanLocation.lat,
          busanLocation.lng
        ),
        map: newMap,
        icon: {
          content: markerElement,
          size: new window.naver.maps.Size(40, 40), // 아이콘 크기 조정
          anchor: new window.naver.maps.Point(20, 40),
        },
      });
    };

    document.body.appendChild(script);
  });

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🗺️ Naver Map</h2>

      {/* 네이버 지도 렌더링 영역 */}
      <div
        id="naverMap"
        style={{
          width: '375px',
          height: '812px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  );
};
