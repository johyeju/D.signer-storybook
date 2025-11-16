import React from 'react';
import './Chip.css';

type ChipProps = {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Chip: React.FC<ChipProps> = ({
  text = 'Chip',
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`chip ${isActive ? 'chip-active' : ''}`.trim()}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Chip;
