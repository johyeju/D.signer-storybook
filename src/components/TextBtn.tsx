import React from 'react';
import './TextBtn.css';

interface TextBtnProps {
  text: string;
  state?: 'Default' | 'Disabled';
  type?: 'Primary' | 'Secondary';
  className?: string;
}

const TextBtn: React.FC<TextBtnProps> = ({
  text,
  state = 'Default',
  type = 'Primary',
  className,
}) => {
  return (
    <button
      className={`text-btn ${state.toLowerCase()} ${type.toLowerCase()} ${className}`}
      disabled={state === 'Disabled'}
      onMouseDown={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.classList.add('active');
        }
      }}
      onMouseUp={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.classList.remove('active');
        }
      }}
      onMouseLeave={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.classList.remove('active');
        }
      }}
    >
      {text}
    </button>
  );
};

export default TextBtn;
