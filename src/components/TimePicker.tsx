import { useEffect, useRef } from 'react';
import { useTimePicker } from './useTimePicker';
import PickerColumn from './PickerColumn';
import './TimePicker.css';

// TimePicker 컴포넌트의 props 타입 정의
type TimePickerProps = {
  onChange?: (value: string) => void; // 시간 변경 시 호출되는 콜백 (선택적)
};

export const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  // useTimePicker 훅을 사용하여 날짜, 시간, 상태 관리
  const {
    dateList, // 날짜 리스트 (30일치)
    date, // 현재 선택된 날짜
    setDate, // 날짜 변경 함수
    meridiem, // 오전/오후 상태
    setMeridiem, // 오전/오후 변경 함수
    hour, // 선택된 시간
    setHour, // 시간 변경 함수
    minute, // 선택된 분
    setMinute, // 분 변경 함수
  } = useTimePicker();

  // 선택된 요소를 스크롤 중앙에 맞추기 위한 ref
  const dateRef = useRef<HTMLUListElement>(null);
  const meridiemRef = useRef<HTMLUListElement>(null);
  const hourRef = useRef<HTMLUListElement>(null);
  const minuteRef = useRef<HTMLUListElement>(null);

  // 스크롤 조정
  useEffect(() => {
    const scrollIntoView = (
      ref: React.RefObject<HTMLUListElement>,
      value: string | number
    ) => {
      if (ref.current) {
        const items = Array.from(ref.current.children) as HTMLLIElement[];
        const selectedItem = items.find(
          (item) => item.textContent?.trim() === String(value)
        );

        if (selectedItem) {
          selectedItem.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
          });
        }
      }
    };

    scrollIntoView(dateRef, date);
    scrollIntoView(meridiemRef, meridiem);
    scrollIntoView(hourRef, hour);
    scrollIntoView(minuteRef, minute);
  }, [date, meridiem, hour, minute]);

  // 날짜나 시간이 변경될 때 onChange 콜백을 실행하여 변경된 값을 전달
  useEffect(() => {
    if (onChange) {
      onChange(`${date} ${meridiem} ${hour}:${minute}`);
    }
  }, [date, meridiem, hour, minute, onChange]);

  return (
    <div className="time-picker">
      <div className="selection-bar"></div>
      {/* 날짜 선택 컬럼 */}
      <PickerColumn
        ref={dateRef}
        items={dateList} // 날짜 리스트
        selected={date} // 현재 선택된 날짜
        onSelect={(value) => setDate(String(value))} // 선택된 값을 문자열로 변환하여 저장
      />

      {/* 오전/오후 선택 컬럼 */}
      <PickerColumn
        ref={meridiemRef}
        items={['오전', '오후']} // 오전, 오후 옵션
        selected={meridiem} // 현재 선택된 값
        onSelect={(value) => setMeridiem(String(value))} // 문자열 변환 후 저장
      />

      {/* 시간 선택 컬럼 */}
      <PickerColumn
        ref={hourRef}
        items={Array.from({ length: 12 }, (_, i) => i + 1)} // 1~12까지의 숫자 리스트
        selected={Number(hour)} // 현재 선택된 시간 (숫자 변환)
        onSelect={(value) => setHour(String(value))} // 선택된 값을 문자열로 변환 후 저장
      />

      {/* 분 선택 컬럼 */}
      <PickerColumn
        ref={minuteRef}
        items={Array.from({ length: 60 }, (_, i) => i)} // 0~59까지의 숫자 리스트
        selected={Number(minute)} // 현재 선택된 분 (숫자 변환)
        onSelect={(value) => setMinute(String(value))} // 선택된 값을 문자열로 변환 후 저장
      />
    </div>
  );
};

export default TimePicker;
