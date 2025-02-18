import React, { useState } from 'react';
import TextBtn from './TextBtn';
import ListRadio, { ListRadioProps } from './ListRadio';

export interface ModalProps {
  type?: 'Radio' | 'TimePicker';
  title: string; // 항상 존재
  options: ListRadioProps[]; // 4개 픽스
}

const Modal: React.FC<ModalProps> = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // 하나의 선택 상태만

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* 타이틀 */}
        <h2 className="modal-title">{title}</h2>

        {/* 리스트 라디오 */}
        <div className="modal-options">
          {options.map((option) => (
            <ListRadio
              key={option.title}
              {...option}
              size="S"
              isSelected={selectedOption === option.title} // 선택된 옵션만 활성화
              onClick={() => setSelectedOption(option.title)} // 중앙에서 선택 상태 관리
            />
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="btn-footer">
          <TextBtn text={'취소'} state="Disabled" type="Primary" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
