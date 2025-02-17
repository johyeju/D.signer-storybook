import React from 'react';
import './Avatar.css';

interface AvatarProps {
	size?: 'S' | 'L';
}

const Avatar: React.FC<AvatarProps> = ({ size = 'S' }) => {
	const avatarClass = size === 'S' ? 'avatar-small' : 'avatar-large';

	return (
		<img
			src="/avatars/avatar.svg"
			alt="Avatar"
			className={`avatar ${avatarClass}`}
		/>
	);
};

export default Avatar;
