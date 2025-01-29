interface ITextBtnProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TextBtn({
  children,
  isChecked,
  onClick,
}: ITextBtnProps) {
  const buttonStyle = isChecked
    ? 'bg-white text-primary'
    : 'text-white bg-dark-opacity';

  return (
    <button
      className={`
        rounded-Text-button
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
