import React from 'react';
import { icons } from './IIconTypes';
import './PhotoBadge.css';

interface PhotoBadgeProps {
  icon?: keyof typeof icons;
  count?: number;
}

const PhotoBadge: React.FC<PhotoBadgeProps> = ({ icon, count }) => {
  return (
    <div className="photo-badge">
      {icon && (
        <span className="photo-badge-icon">
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      {typeof count === 'number' && (
        <span className="photo-badge-count">
          {count > 999 ? '999+' : count}
        </span>
      )}
    </div>
  );
};

export default PhotoBadge;
