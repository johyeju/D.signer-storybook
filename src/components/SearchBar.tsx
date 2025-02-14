import React, { useEffect, useRef } from 'react';
import { icons } from './IIconTypes';
import CircleBtn from './CircleBtn';

interface SearchBarProps {
  title?: string;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
  circleBtn?: boolean;
  circleBtnIcon?: keyof typeof icons;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  title = 'Title',
  showLeftIcon = true,
  leftIcon,
  showRightIcon = true,
  rightIcon,
  circleBtn = false,
  circleBtnIcon,
  className,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  // title 길어지면 자동 스크롤 설정
  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollLeft = textRef.current.scrollWidth;
    }
  }, [title]); // title 업데이트 될 때마다 실행

  return (
    <div className={`search-bar ${className || ''}`}>
      {showLeftIcon && leftIcon && (
        <span className="icon-left">
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      <span className="search-bar-title" ref={textRef}>
        {title}
      </span>

      {/* circleBtn true일 때 CircleBtn 컴포넌트 렌더링 */}
      {circleBtn ? (
        <CircleBtn size={24} icon={circleBtnIcon} />
      ) : (
        showRightIcon &&
        rightIcon && (
          <span className="icon-right">
            {React.cloneElement(icons[rightIcon] as React.ReactElement, {
              fill: 'currentColor',
            })}
          </span>
        )
      )}
    </div>
  );
};

export default SearchBar;
