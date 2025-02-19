import React from 'react';
import { badgeIcons, IconName, BadgeIconProps } from './IconMapMaker';

interface MapMakerProps {
  size: 'R' | 'L';
  color?: string;
  iconName: IconName;
  theme?: 'Green' | 'Red' | 'Blue';
  text?: '출발' | '도착';
}

const MapMaker: React.FC<MapMakerProps> = ({
  size,
  color,
  text,
  iconName,
  theme,
}) => {
  const SelectedIcon = iconName ? badgeIcons[iconName] : null;

  let iconProps: BadgeIconProps;

  if (iconName === 'star_maker') {
    iconProps = { backgroundColor: color };
  } else if (iconName === 'spot') {
    iconProps = { theme: theme as 'Green' | 'Red' };
  } else if (iconName === 'pin') {
    iconProps = { size, theme: theme as 'Red' | 'Blue' };
  } else {
    iconProps = {};
  }

  return (
    <div className={`map-container ${size}`}>
      <span>{text}</span>
      {SelectedIcon ? (
        React.createElement(
          SelectedIcon as React.ComponentType<BadgeIconProps>,
          iconProps
        )
      ) : (
        <p>error</p>
      )}
    </div>
  );
};

export default MapMaker;
