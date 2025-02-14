import React from 'react';
import { icons } from './IIconTypes';

interface SearchBarProps {
  title?: string;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
}

const SearchBar: React.FC<SearchBarProps> = ({
  title = 'Title',
  showLeftIcon = true,
  leftIcon,
  showRightIcon = true,
  rightIcon,
}) => {
  return (
    <div className="search-bar">
      {showLeftIcon && leftIcon && (
        <span className="icon-left">
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      <span className="search-bar-title">{title}</span>
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
