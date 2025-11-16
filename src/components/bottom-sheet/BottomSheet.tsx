import React from "react";
import "./BottomSheet.css";
import useBottomSheet from "@/hooks/useBottomSheet";
import BottomSheetTwo from "./BottomSheetTwo";

const BottomSheet: React.FC = () => {
	const { sheetRef, stage } = useBottomSheet();

	return (
		<div ref={sheetRef} className={`bottom-sheet-container`}>
			<BottomSheetTwo
				stage={stage}
				sheetRef={sheetRef}
				title="국제시장"
				subtitle="시장"
				address="부산 중구"
				review={292}
				distance={3.2}
				score={3.4}
			/>
		</div>
	);
};

export default BottomSheet;
