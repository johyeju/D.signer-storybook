import React from 'react';
import { icons } from './IIconTypes';
import './TabAtom.css';

interface TabAtomProps {
  text?: string;
  num?: number;
  showIcon?: boolean;
  Icon?: keyof typeof icons;
  className?: string;
  selected?: boolean;
  onClick?: () => void; // 부모에서 관리할 클릭 이벤트 핸들러
}

const TabAtom: React.FC<TabAtomProps> = ({
  text,
  num,
  showIcon = false,
  Icon,
  className,
  selected = false, // 기본값 false (부모가 상태 관리)
  onClick, // 부모에서 전달받은 클릭 이벤트
}) => {
  const maxNum = num !== undefined ? Math.min(Math.max(num, 0), 99) : undefined;

  return (
    <button
      className={`tab-atom ${selected ? 'active' : ''} ${className || ''}`} // selected가 true면 active 추가
      onClick={onClick}
    >
      <div className="text-container">
        {/* 아이콘 표시 */}
        {showIcon && Icon && (
          <span className="icon-left">
            {React.cloneElement(icons[Icon] as React.ReactElement, {
              fill: 'currentColor',
            })}
          </span>
        )}
        {/* 탭 텍스트 */}
        {text && <span className="text-style">{text}</span>}
        {/* 숫자 (뱃지 형태로 표시 가능) */}
        {maxNum !== undefined && <span className="tab-num">{maxNum}</span>}
      </div>
    </button>
  );
};

export default TabAtom;
