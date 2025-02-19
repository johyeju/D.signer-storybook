import React from 'react';
import { badgeIcons, IconName } from './IconMapMaker';

interface MapMakerProps {
  size: 'R' | 'M' | 'L';
  color: string;
  iconName?: IconName;
  theme?: 'Green' | 'Red'; // spot 아이콘에서만 사용됨
}

const MapMaker: React.FC<MapMakerProps> = ({
  size,
  color,
  iconName,
  theme,
}) => {
  const SelectedIcon = iconName ? badgeIcons[iconName] : null;

  return (
    <div
      className={`map-container ${size}`}
      style={{ backgroundColor: color, padding: '10px', borderRadius: '8px' }}
    >
      {/* 동적 아이콘 렌더링 */}
      {SelectedIcon ? (
        iconName === 'star_maker' ? (
          <SelectedIcon backgroundColor={color} />
        ) : iconName === 'spot' ? (
          <SelectedIcon theme={theme} />
        ) : (
          <p>error</p>
        )
      ) : (
        <p>error</p>
      )}
    </div>
  );
};

export default MapMaker;
