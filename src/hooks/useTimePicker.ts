import { useState, useMemo } from "react";

const generateDateList = () => {
	const today = new Date();

	return Array.from({ length: 30 }, (_, i) => {
		const date = new Date(today);
		date.setDate(today.getDate() + i);

		const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
		const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일(${
			dayNames[date.getDay()]
		})`;

		if (i === 0) return "오늘";
		if (i === 1) return "내일";
		return formattedDate;
	});
};

export const useTimePicker = () => {
	const dateList = useMemo(() => generateDateList(), []);
	const [date, setDate] = useState(dateList[0]);
	const [meridiem, setMeridiem] = useState("오전");
	const [hour, setHour] = useState("10");
	const [minute, setMinute] = useState("41");

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
