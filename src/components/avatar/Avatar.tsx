import "./Avatar.css";

export interface AvatarProps {
	size?: "S" | "L";
}

const Avatar: React.FC<AvatarProps> = ({ size = "S" }) => {
	const avatarClass = size === "S" ? "avatar-small" : "avatar-large";

	return (
		<div>
			<img src={"/badge/avatar.svg"} alt="Profile" className={avatarClass} />
		</div>
	);
};

export default Avatar;
