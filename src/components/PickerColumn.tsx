import { forwardRef } from 'react';

type PickerColumnProps = {
  items: (string | number)[]; // 문자열과 숫자 배열 모두 허용
  selected: string | number; // 선택된 값도 동일하게 변경
  onSelect: (value: string | number) => void; // 이벤트에서 전달받는 값도 확장
};

// 선택 리스트 렌더링 PickerColumn 컴포넌트
export const PickerColumn = forwardRef<HTMLUListElement, PickerColumnProps>(
  ({ items, selected, onSelect }, ref) => {
    return (
      <ul className="picker-column" ref={ref}>
        {items.map((item) => (
          <li
            key={String(item)} // key로 사용 가능하도록 숫자 문자열 변환
            className={selected === item ? 'selected' : ''} // 현재 선택된 값이면 selected 클래스 추가
            onClick={() => {
              onSelect(item); // 클릭 시 해당 값이 선택되도록 부모에게 전달
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
);

export default PickerColumn;
