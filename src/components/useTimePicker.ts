import { useState, useMemo } from 'react';

// 오늘 날짜를 기준으로 30일 날짜 목록 생성하는 함수
const generateDateList = () => {
  const today = new Date(); //로컬 기준 날짜 생성

  return Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i); // 날짜 변경 후 getDay() 호출, 날짜 하루씩 증가

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일(${
      dayNames[date.getDay()]
    })`;

    if (i === 0) return '오늘'; // 오늘이면 "오늘"로 표시
    if (i === 1) return '내일'; // 내일이면 "내일"로 표시
    return formattedDate; // 나머지는 기존 날짜 형식 유지
  });
};

//타임 피커 상태 관리 훅
export const useTimePicker = () => {
  const dateList = useMemo(() => generateDateList(), []); // 날짜 목록 캐싱, 불필요한 연산 방지
  const [date, setDate] = useState(dateList[0]); // 날짜 기본값 첫 번째 값으로
  const [meridiem, setMeridiem] = useState('오전'); //기본값 설정
  const [hour, setHour] = useState('10'); //기본 시간 설정
  const [minute, setMinute] = useState('41'); //기본 분 설정

  return {
    dateList,
    date,
    setDate,
    meridiem,
    setMeridiem,
    hour,
    setHour,
    minute,
    setMinute,
  };
};
