import IconButton from './IconButton';

type PrimaryButtonTheme = 'dark' | 'light';

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  disabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: { alt: string; iconPath: string }; // 아이콘 옵션 추가
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200';

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
};

export default function PrimaryButton({
  theme,
  children,
  onClick,
  disabled,
  icon,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`rounded-button-default w-full h-[59px] ${disabledStyle} ${color[theme]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && (
        <IconButton
          iconPath={icon.iconPath}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            e.stopPropagation()
          }
        />
      )}
      {children}
    </button>
  );
}
