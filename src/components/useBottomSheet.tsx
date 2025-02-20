import { useRef, useState, useEffect } from 'react';

export default function useBottomSheet() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(1); // 초기 1단
  const [height, setHeight] = useState(window.innerHeight * 0.6);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const screenHeight = window.innerHeight;

  useEffect(() => {
    const handleStart = (event: MouseEvent | TouchEvent) => {
      console.log('드래그 시작');
      startY.current =
        'touches' in event ? event.touches[0].clientY : event.clientY;
      isDragging.current = true;
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const moveY =
        'touches' in event ? event.touches[0].clientY : event.clientY;
      const newHeight = screenHeight - moveY;

      console.log('드래그 중, height:', newHeight);
      setHeight(newHeight);
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      console.log('드래그 종료, 최종 height:', height);

      // 3단으로 확장
      if (height > screenHeight * 0.75) {
        setStage(3);
        setHeight(screenHeight);
      }
      // 1단으로 축소
      else {
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
      console.log('바텀시트 높이 적용됨:', height);
      sheetRef.current.style.height = `${height}px`;
    }
  }, [height]);

  return { sheetRef, stage, height };
}
