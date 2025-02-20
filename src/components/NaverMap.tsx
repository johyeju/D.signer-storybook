import { useEffect, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import MapMaker from './MapMaker';

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAPS_CLIENT_ID;

type NaverMapProps = {
  lat: number;
  lng: number;
  setBottomSheetStage: (stage: number) => void;
  markerPosition: { lat: number; lng: number };
  onMarkerClick: () => void;
};

export const NaverMap: React.FC<NaverMapProps> = ({
  lat,
  lng,
  setBottomSheetStage,
  markerPosition,
  onMarkerClick,
}) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);

  // 지도 중심 변경 (부드럽게 panTo 사용)
  const updateMapCenter = useCallback(() => {
    if (mapRef.current) {
      console.log('지도 중심 변경 실행됨!');
      const newCenter = new window.naver.maps.LatLng(lat, lng);
      mapRef.current.panTo(newCenter, { duration: 500 });
    } else {
      console.warn('mapRef가 아직 초기화되지 않음. 100ms 후 재시도');
      setTimeout(() => {
        if (mapRef.current) {
          const newCenter = new window.naver.maps.LatLng(lat, lng);
          mapRef.current.panTo(newCenter, { duration: 500 });
        }
      }, 100);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (!window.naver) {
      console.log('네이버 지도 API 로드 중');
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
      script.async = true;
      script.onload = () => {
        console.log('네이버 지도 API 로드 완료');
        initializeMap();
      };
      document.body.appendChild(script);
    } else {
      console.log('네이버 지도 API 이미 로드됨, 바로 지도 초기화');
      initializeMap();
    }

    function initializeMap() {
      if (!window.naver) return;

      console.log('지도 초기화 실행');
      const newMap = new window.naver.maps.Map('naverMap', {
        center: new window.naver.maps.LatLng(lat, lng),
        zoom: 14,
      });

      mapRef.current = newMap;
      console.log('mapRef가 초기화', mapRef.current);

      const markerElement = document.createElement('div');
      createRoot(markerElement).render(
        <MapMaker size="L" iconName="pin" theme="Red" color={''} />
      );

      const newMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          markerPosition.lat,
          markerPosition.lng
        ),
        map: newMap,
        icon: {
          content: markerElement,
          size: new window.naver.maps.Size(40, 40),
          anchor: new window.naver.maps.Point(20, 40),
        },
      });

      markerRef.current = newMarker;
      console.log('마커 초기화 완료', markerRef.current);

      // 마커 클릭 시 지도 중심 부드럽게 변경 & 바텀시트 열기
      window.naver.maps.Event.addListener(newMarker, 'click', () => {
        setBottomSheetStage(2);
        updateMapCenter();
        onMarkerClick();
      });

      // 지도 초기화 후 중심 업데이트 실행
      setTimeout(() => {
        updateMapCenter();
      }, 100);
    }
  }, [
    lat,
    lng,
    setBottomSheetStage,
    markerPosition,
    updateMapCenter,
    onMarkerClick,
  ]);

  // `lat`, `lng` 변경 시 지도 중심 업데이트 실행
  useEffect(() => {
    updateMapCenter();
  }, [lat, lng, updateMapCenter]);

  return (
    <div
      id="naverMap"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default NaverMap;
