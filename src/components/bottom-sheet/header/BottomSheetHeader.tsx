import React from "react";
import { HeaderType } from "./BottomHeader";
import "./BottomSheetHeader.css";

interface BottomSheetHeaderProps {
	type?: keyof typeof HeaderType;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
	type = "default",
}) => {
	const HeaderSvg = HeaderType[type];
	return <header>{HeaderSvg}</header>;
};

export default BottomSheetHeader;
