import React from 'react';
import './ImageList.css'; // CSS 파일 연결

interface ImageGridProps {
  imageCount: number;
  images?: string[]; // 이미지 배열 (선택적으로 입력 가능)
  className?: string; // 추가적인 스타일링을 위한 클래스
}

const ImageGrid: React.FC<ImageGridProps> = ({
  imageCount,
  images = [],
  className,
}) => {
  // imageCount에 따라 적절한 className을 반환하는 함수
  const getGridClass = (imageCount: number): string => {
    const gridClasses: { [key: number]: string } = {
      1: 'grid-layout-1',
      3: 'grid-layout-3',
      5: 'grid-layout-5',
      9: 'grid-layout-9',
    };
    return gridClasses[imageCount] || 'grid-layout-default'; // 기본값 설정
  };

  //images 배열을 imageCount 크기에 맞춰 자동 조정
  // 부족한 경우, 기본 이미지(플레이스홀더)로 채움
  const adjustedImages = Array.from(
    { length: imageCount },
    (_, i) => images[i] || `https://via.placeholder.com/150?text=Image+${i + 1}`
  );

  return (
    <div
      className={`w-full p-4 ${getGridClass(imageCount)} ${className || ''}`}
    >
      {adjustedImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image-${index}`}
          className="image-style"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
