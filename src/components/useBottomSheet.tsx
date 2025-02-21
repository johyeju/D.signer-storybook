import { useRef, useState, useEffect } from 'react';

export default function useBottomSheet() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0); // 초기에는 바텀시트 없음
  const [height, setHeight] = useState(0); // 기본적으로 바텀시트 높이 0
  const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 상태
  const startY = useRef(0);
  const isDragging = useRef(false);
  const screenHeight = window.innerHeight;
  const [mapZIndex, setMapZIndex] = useState(0); // 지도 z-index 상태 추가

  useEffect(() => {
    const handleStart = (event: MouseEvent | TouchEvent) => {
      startY.current =
        'touches' in event ? event.touches[0].clientY : event.clientY;
      isDragging.current = true;
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const moveY =
        'touches' in event ? event.touches[0].clientY : event.clientY;
      const newHeight = screenHeight - moveY;
      setHeight(newHeight);
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      if (height > screenHeight * 0.75) {
        setStage(3);
        setHeight(screenHeight);
      } else {
        setStage(1);
        setHeight(220);
      }
    };

    document.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    return () => {
      document.removeEventListener('mousedown', handleStart);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
    };
  }, [height, screenHeight]);

  useEffect(() => {
    if (sheetRef.current) {
      sheetRef.current.style.height = `${height}px`;
    }
  }, [height]);

  useEffect(() => {
    if (stage === 3) {
      console.log('바텀시트 3단 -> 이미지 로드 시작');
      setImageLoaded(true);
    }
  }, [stage]);

  // 마커 클릭 시 실행할 함수
  const openBottomSheet = () => {
    setStage(1); // 바텀시트 1단으로 올라옴
    setHeight(220);
    setMapZIndex(-1); // 지도 숨김
  };

  // 바텀시트 닫을 때 실행할 함수
  const closeBottomSheet = () => {
    setStage(0); // 바텀시트 사라짐
    setHeight(0);
    setMapZIndex(0); // 지도 다시 표시
  };

  return {
    sheetRef,
    stage,
    setStage,
    height,
    setHeight,
    imageLoaded,
    mapZIndex,
    openBottomSheet,
    closeBottomSheet,
  };
}
