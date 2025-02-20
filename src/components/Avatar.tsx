import React from 'react';
import avatar from '../../public/badge/avatar.svg';

import './Avatar.css';

interface AvatarProps {
  size?: 'S' | 'L';
}

const Avatar: React.FC<AvatarProps> = ({ size = 'S' }) => {
  const avatarClass = size === 'S' ? 'avatar-small' : 'avatar-large';

  return (
    <div>
      <img src={avatar} alt="Profile" className={avatarClass} />
    </div>
  );
};

export default Avatar;
