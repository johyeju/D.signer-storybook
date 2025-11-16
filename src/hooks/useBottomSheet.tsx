import { useEffect, useRef, useState } from "react";

export default function useBottomSheet() {
	const sheetRef = useRef<HTMLDivElement>(null);

	const [stage, setStage] = useState(1);
	const [height, setHeight] = useState(220);
	const [imageLoaded, setImageLoaded] = useState(false);
	const startY = useRef(0);
	const isDragging = useRef(false);
	const screenHeight = window.innerHeight;
	const [mapZIndex, setMapZIndex] = useState(0);

	useEffect(() => {
		const handleStart = (event: MouseEvent | TouchEvent) => {
			startY.current =
				"touches" in event ? event.touches[0].clientY : event.clientY;
			isDragging.current = true;
		};

		const handleMove = (event: MouseEvent | TouchEvent) => {
			if (!isDragging.current) return;
			const moveY =
				"touches" in event ? event.touches[0].clientY : event.clientY;
			const newHeight = screenHeight - moveY;
			setHeight(newHeight);
		};

		const handleEnd = () => {
			if (!isDragging.current) return;
			isDragging.current = false;

			const fullThreshold = screenHeight * 0.75;
			const minHeight = 220; // 1단 높이

			if (height > fullThreshold) {
				// 3단 (완전 확장)
				setStage(3);
				setHeight(screenHeight);
			} else if (height > minHeight) {
				// 2단 (필요하면)
				setStage(2);
				setHeight(400); // 중간 높이 아무 값
			} else {
				// ✅ 아래로 충분히 내리면 1단으로 복귀
				setStage(1);
				setHeight(minHeight);
			}
		};

		document.addEventListener("mousedown", handleStart);
		document.addEventListener("mousemove", handleMove);
		document.addEventListener("mouseup", handleEnd);

		return () => {
			document.removeEventListener("mousedown", handleStart);
			document.removeEventListener("mousemove", handleMove);
			document.removeEventListener("mouseup", handleEnd);
		};
	}, [height, screenHeight]);

	useEffect(() => {
		if (sheetRef.current) {
			sheetRef.current.style.height = `${height}px`;
		}
	}, [height]);

	useEffect(() => {
		if (stage === 3) {
			setImageLoaded(true);
		}
	}, [stage]);

	const openBottomSheet = () => {
		setStage(1);
		setHeight(220);
		setMapZIndex(-1);
	};

	const closeBottomSheet = () => {
		setStage(0);
		setHeight(0);
		setMapZIndex(0);
	};

	return {
		sheetRef,
		stage,
		setStage,
		height,
		setHeight,
		imageLoaded,
		mapZIndex,
		openBottomSheet,
		closeBottomSheet,
	};
}
