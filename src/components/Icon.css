import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 데이터 분리된 파일에서 가져옴

interface IconProps {
  name: keyof typeof icons;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" />
      {icons[name]}
    </svg>
  );
};

export default Icon;
