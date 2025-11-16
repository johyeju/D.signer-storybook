import React from 'react';
import './TabAtom.css';
import { Trans } from '@components/icon/IconTransport';

interface TabAtomProps {
  text?: string;
  num?: number;
  showIcon?: boolean;
  Icon?: keyof typeof Trans; // ✅ 아이콘 키 값 사용
  className?: string;
  selected?: boolean;
  onClick?: () => void;
}

const TabAtom: React.FC<TabAtomProps> = ({
  text,
  num,
  showIcon = false,
  Icon,
  className,
  selected = false,
  onClick,
}) => {
  const maxNum = num !== undefined ? Math.min(Math.max(num, 0), 99) : undefined;

  return (
    <button
      className={`tab-atom ${selected ? 'active' : ''} ${className || ''}`}
      onClick={onClick}
    >
      <div className="text-container">
        {/* 아이콘 표시 */}
        {showIcon && Icon && Trans[Icon] && (
          <span className="icon-left">
            {React.cloneElement(Trans[Icon] as React.ReactElement, {
              fill: selected ? '#fff' : '#444447',
            })}
          </span>
        )}
        {/* 탭 텍스트 */}
        {text && <span className="text-style">{text}</span>}
        {/* 숫자 */}
        {maxNum !== undefined && <span className="tab-num">{maxNum}</span>}
      </div>
    </button>
  );
};

export default TabAtom;
