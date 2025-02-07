import React from 'react';

interface TextBtnProps {
  text: string;
}

const TextBtn: React.FC<TextBtnProps> = ({ text }) => {
  return (
    <button
      style={{
        all: 'unset',
        cursor: 'pointer',
        color: '#006CFF', // 기본 글자 색상
        padding: '4px 8px', // 클릭 영역 확보
        borderRadius: '4px', // 살짝 둥글게 처리
      }}
      onMouseDown={(e) =>
        (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)')
      } // 눌렀을 때 배경색 적용
      onMouseUp={(e) => (e.currentTarget.style.backgroundColor = 'transparent')} // 뗐을 때 배경색 초기화
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      } // 마우스가 벗어날 때 초기화
    >
      {text}
    </button>
  );
};

export default TextBtn;
