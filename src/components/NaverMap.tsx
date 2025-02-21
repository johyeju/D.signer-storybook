import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import MapMaker from './MapMaker';
import useBottomSheet from './useBottomSheet';

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_MAPS_CLIENT_ID;
const INTERNATIONAL_MARKET = { lat: 35.0978, lng: 129.0261 }; // 국제시장 좌표

export const NaverMap: React.FC = () => {
  const { openBottomSheet, mapZIndex, stage } = useBottomSheet();
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const isMapMoving = useRef(false); // 지도가 이동 중인지 감지

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
  }, []);

  const resetMap = () => {
    if (!window.naver) return;

    if (mapRef.current) {
      mapRef.current.destroy();
      mapRef.current = null;
    }

    const newMap = new window.naver.maps.Map('naverMap', {
      center: new window.naver.maps.LatLng(
        INTERNATIONAL_MARKET.lat,
        INTERNATIONAL_MARKET.lng
      ),
      zoom: 15,
      mapDataControl: false,
      scaleControl: false,
    });

    mapRef.current = newMap;

    const markerElement = document.createElement('div');
    createRoot(markerElement).render(
      <MapMaker size="L" iconName="pin" theme="Red" color={''} />
    );

    const newMarker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(
        INTERNATIONAL_MARKET.lat,
        INTERNATIONAL_MARKET.lng
      ),
      map: newMap,
      icon: {
        content: markerElement,
        size: new window.naver.maps.Size(40, 40),
        anchor: new window.naver.maps.Point(20, 40),
      },
    });

    markerRef.current = newMarker;

    // 마커 클릭 시 바텀시트 올라오게 설정
    window.naver.maps.Event.addListener(newMarker, 'click', () => {
      console.log('마커 클릭됨 → 바텀시트 220px, 지도 숨김');
      openBottomSheet();
    });

    // 지도가 이동 중인지 감지 (pan 이벤트)
    window.naver.maps.Event.addListener(newMap, 'dragstart', () => {
      isMapMoving.current = true;
    });

    window.naver.maps.Event.addListener(newMap, 'dragend', () => {
      setTimeout(() => {
        isMapMoving.current = false;
      }, 500); // 지도 이동 후 약간의 시간 차이를 두고 해제
    });
  };

  return (
    <div
      ref={mapContainerRef}
      id="naverMap"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: mapZIndex,
        pointerEvents: stage > 0 ? 'none' : 'auto', // 바텀시트가 올라오면 지도 조작 불가능
      }}
    />
  );
};

export default NaverMap;
