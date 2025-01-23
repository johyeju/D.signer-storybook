export default function IconButton({
  iconPath,
  type,
  onClick,
}: {
  iconPath?: string;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const resolvedIconPath = iconPath;

  if (!resolvedIconPath) return null;

  return (
    <button onClick={onClick}>
      <img alt={type || 'icon'} src={resolvedIconPath} />{' '}
      {/* alt 기본값 설정 */}
    </button>
  );
}
