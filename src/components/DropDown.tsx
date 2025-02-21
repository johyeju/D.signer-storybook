import React from 'react';
import { icons } from './IIconTypes';

import './DropDown.css';

export interface DropDownProps {
  state: boolean;
  onToggle: () => void;
  item1: string;
  item2: string;
  item3: string;
}

const DropDown: React.FC<DropDownProps> = ({
  state,
  onToggle,
  item1,
  item2,
  item3,
}) => {
  // item1, item2, item3을 숫자로 변환 후 합산 (NaN 방지를 위해 기본값 0 처리)
  const totalValue =
    (Number(item1) || 0) + (Number(item2) || 0) + (Number(item3) || 0);

  // 최대 99까지 표시, 그 이상이면 "99+" 처리
  const total = totalValue > 99 ? '99+' : totalValue.toString();

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={onToggle}>
        <span className="title">
          전체 리스트 <span className="number">{total}</span>
        </span>
        <div className="icon-container">
          {React.cloneElement(icons['down_arrow'] as React.ReactElement, {
            fill: 'currentColor',
            className: 'icon-svg',
          })}
        </div>
      </div>
      {state && (
        <div className="dropdown-content">
          <div className="item-style">
            <div className="text-box">
              <span className="content-style">Content</span>
              <span className="number-style">{item1}</span>
            </div>
          </div>
          <div className="item-style">
            <div className="text-box">
              <span className="content-style">Content</span>
              <span className="number-style">{item2}</span>
            </div>
          </div>
          <div className="item-style">
            <div className="text-box">
              <span className="content-style">Content</span>
              <span className="number-style">{item2}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
