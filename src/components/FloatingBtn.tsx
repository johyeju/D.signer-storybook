interface IFloatingBtnProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function FloatingBtn({
  children,
  isChecked,
  onClick,
}: IFloatingBtnProps) {
  const buttonStyle = isChecked
    ? 'bg-white text-primary'
    : 'text-white bg-dark-opacity';

  return (
    <button
      className={`
        rounded-Floating-button
        px-[10px] border
        border-white
        h-[33px]
        text-sm
        font-medium
        ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
