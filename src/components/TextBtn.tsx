import React from 'react';

interface TextBtnProps {
  text: string;
  state?: 'Default' | 'Disabled';
  type?: 'Primary' | 'Secondary';
}

const TextBtn: React.FC<TextBtnProps> = ({
  text,
  state = 'Default',
  type = 'Primary',
}) => {
  return (
    <button
      style={{
        all: 'unset',
        cursor: state === 'Disabled' ? 'not-allowed' : 'pointer',
        color:
          state === 'Disabled'
            ? '#999999'
            : type === 'Primary'
            ? '#006CFF'
            : '#373737', // Disabled 시 컬러 변경
        padding: '4px 8px', // 클릭 영역 확보
        borderRadius: '4px', // 살짝 둥글게 처리
        opacity: state === 'Disabled' ? 0.5 : 1, // Disabled 상태일 때 투명도 적용
      }}
      disabled={state === 'Disabled'}
      onMouseDown={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // 눌렀을 때 배경색 적용
        }
      }}
      onMouseUp={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.style.backgroundColor = 'transparent'; // 뗐을 때 배경색 초기화
        }
      }}
      onMouseLeave={(e) => {
        if (state !== 'Disabled') {
          e.currentTarget.style.backgroundColor = 'transparent'; // 마우스가 벗어날 때 초기화
        }
      }}
    >
      {text}
    </button>
  );
};

export default TextBtn;
