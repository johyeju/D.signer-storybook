import IconButton from './IconButton';

type PillBtnTheme = 'dark' | 'light';

interface IPillBtnProps {
  theme: PillBtnTheme;
  disabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: { alt: string; iconPath: string }; // 아이콘 옵션 추가
}

const dark = 'bg-Pill text-white';
const light = 'bg-white text-Pill';
const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200';

const color: Record<PillBtnTheme, string> = {
  dark,
  light,
};

export default function PillBtn({
  theme,
  children,
  onClick,
  disabled,
  icon,
}: IPillBtnProps) {
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
