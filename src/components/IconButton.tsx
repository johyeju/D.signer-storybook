export default function IconButton({
  alt = 'icon', // 기본값 설정
  iconPath,
  onClick,
}: IIconButtonProps) {
  const resolvedIconPath = iconPath;

  if (!resolvedIconPath) return null;

  return (
    <button onClick={onClick}>
      <img alt={alt} src={resolvedIconPath} />
    </button>
  );
}
