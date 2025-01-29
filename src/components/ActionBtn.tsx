interface IActionBtnProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function ActionBtn({
  children,
  isChecked,
  onClick,
}: IActionBtnProps) {
  const BtnStyle = isChecked
    ? 'bg-white text-primary'
    : 'text-white bg-dark-opacity';

  return (
    <button
      className={`
        rounded-Action-Btn
        px-[10px] border
        border-white
        h-[33px]
        text-sm
        font-medium
        ${BtnStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
