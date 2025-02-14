import React, { useEffect, useRef } from 'react';
import { icons } from './IIconTypes';

interface SearchBarProps {
  title?: string;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  title = 'Title',
  showLeftIcon = true,
  leftIcon,
  showRightIcon = true,
  rightIcon,
  className,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollLeft = textRef.current.scrollWidth;
    }
  }, [title]); // title이 변경될 때마다 최신 내용을 자동으로 표시

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
      {showRightIcon && rightIcon && (
        <span className="icon-right">
          {React.cloneElement(icons[rightIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </div>
  );
};

export default SearchBar;
