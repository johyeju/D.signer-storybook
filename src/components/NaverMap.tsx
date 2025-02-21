import { useEffect, useRef } from 'react';
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

  // 마커 클릭 시에만 지도 초기화하는 함수
  const resetMap = () => {
    console.log('🔄 마커 클릭됨 → 지도 다시 초기화');

    if (!window.naver) return;

    // 기존 지도 제거
    if (mapRef.current) {
      mapRef.current.destroy();
      mapRef.current = null;
    }

    // 새 지도 생성
    const newMap = new window.naver.maps.Map('naverMap', {
      center: new window.naver.maps.LatLng(lat, lng),
      zoom: 14,
      mapDataControl: false,
      scaleControl: false,
    });

    mapRef.current = newMap;
    console.log('🆕 새 지도 초기화 완료', mapRef.current);

    // 새 마커 생성
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
    console.log('마커 재설정 완료', markerRef.current);

    // 마커 클릭 이벤트 추가 (지도 초기화)
    window.naver.maps.Event.addListener(newMarker, 'click', () => {
      console.log('마커 클릭됨 → 지도 다시 초기화');
      setBottomSheetStage(2);
      resetMap();
      onMarkerClick();
    });
  };

  // 초기 실행 시 한 번만 지도 로드
  useEffect(() => {
    if (!window.naver) {
      console.log('네이버 지도 API 로드 중');
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
      script.async = true;
      script.onload = () => {
        console.log('네이버 지도 API 로드 완료');
        resetMap();
      };
      document.body.appendChild(script);
    } else {
      console.log('네이버 지도 API 이미 로드됨, 바로 지도 초기화');
      resetMap();
    }
  }, []); // 최초 실행 시 한 번만 실행

  // `lat`, `lng` 변경 시 지도 이동 (초기화 X, `panTo()` 사용)
  useEffect(() => {
    if (mapRef.current) {
      const newCenter = new window.naver.maps.LatLng(lat, lng);
      mapRef.current.panTo(newCenter, { duration: 500 });
    }
  }, [lat, lng]); // lat, lng이 변경될 때 지도 이동만 실행

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
