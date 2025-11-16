import { useEffect, useRef } from "react";
import PickerColumn from "./PickerColumn";
import "./TimePicker.css";
import { useTimePicker } from "@/hooks/useTimePicker";

type TimePickerProps = {
	onChange?: (value: string) => void;
};

export const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
	const {
		dateList,
		date,
		setDate,
		meridiem,
		setMeridiem,
		hour,
		setHour,
		minute,
		setMinute,
	} = useTimePicker();

	const dateRef = useRef<HTMLUListElement>(null);
	const meridiemRef = useRef<HTMLUListElement>(null);
	const hourRef = useRef<HTMLUListElement>(null);
	const minuteRef = useRef<HTMLUListElement>(null);

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
						block: "center",
						inline: "center",
						behavior: "smooth",
					});
				}
			}
		};

		scrollIntoView(dateRef, date);
		scrollIntoView(meridiemRef, meridiem);
		scrollIntoView(hourRef, hour);
		scrollIntoView(minuteRef, minute);
	}, [date, meridiem, hour, minute]);

	useEffect(() => {
		if (onChange) {
			onChange(`${date} ${meridiem} ${hour}:${minute}`);
		}
	}, [date, meridiem, hour, minute, onChange]);

	return (
		<div className="time-picker">
			<div className="selection-bar"></div>
			<PickerColumn
				ref={dateRef}
				items={dateList}
				selected={date}
				onSelect={(value) => setDate(String(value))}
			/>

			<PickerColumn
				ref={meridiemRef}
				items={["오전", "오후"]}
				selected={meridiem}
				onSelect={(value) => setMeridiem(String(value))}
			/>

			<PickerColumn
				ref={hourRef}
				items={Array.from({ length: 12 }, (_, i) => i + 1)}
				selected={Number(hour)}
				onSelect={(value) => setHour(String(value))}
			/>

			<PickerColumn
				ref={minuteRef}
				items={Array.from({ length: 60 }, (_, i) => i)}
				selected={Number(minute)}
				onSelect={(value) => setMinute(String(value))}
			/>
		</div>
	);
};

export default TimePicker;
