import { useRef, useState, useEffect } from 'react';

export default function useBottomSheet() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(1); // 초기 1단
  const [height, setHeight] = useState(window.innerHeight * 0.6);
  const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 상태
  const startY = useRef(0);
  const isDragging = useRef(false);
  const screenHeight = window.innerHeight;

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

  // 3단이 될 때 이미지 로드
  useEffect(() => {
    if (stage === 3) {
      console.log('바텀시트 3단 -> 이미지 로드 시작');
      setImageLoaded(true);
    }
  }, [stage]);

  return { sheetRef, stage, height, imageLoaded };
}
