import React from "react";
import "./BottomSheet.css";
import { Dividers } from "@components//DividerType";
import BottomSheetHeader from "./header/BottomSheetHeader";
import IconSwitch from "@components/switch/IconSwitch";
import CtaBtn from "@/components/buttons/cta-button/CtaBtn";
import { iconVariable } from "@components/icon/IconTypes";
import Badge from "../badge/Badge";

type BottomSheetProps = {
	title: string;
	subtitle: string;
	address: string;
	review: number;
	score: number;
	distance: number;
};

const BottomSheetOne: React.FC<BottomSheetProps> = ({
	title,
	subtitle,
	address,
	review,
	score,
	distance,
}) => {
	return (
		<div className="bottom-sheet stage-1">
			<div>
				<BottomSheetHeader type="default" />
				{/* 우측 썸네일 */}
				<div className="thumbnail">
					<div className="image">
						<Badge className="image-count-style" text={"7"} />
					</div>
				</div>
			</div>

			{/* content */}
			<div className="container">
				<div className="content">
					{/* 좌측 텍스트 그룹 */}

					<div className="text-group">
						<div className="text-header">
							<div className="text-title">
								<h3 className="title">{title}</h3>
								<p className="subtitle">{subtitle}</p>
							</div>
						</div>
						<div className="state">
							<div className="bold-style">영업 중</div> {Dividers.circle}
							<div className="black-style">20:00에 영업 종료</div>
						</div>
						<div className="reviews">
							<IconSwitch name="star" type="red" isOn={true} size={"S"} />
							<span className="black-style">{score}</span>
							{Dividers.circle}
							<div className="black-style">방문자 리뷰 {review}</div>
						</div>
						<div className="location">
							<span className="bold-style">{distance}km</span>
							{Dividers.circle}
							<span className="black-style">{address}</span>
						</div>
					</div>
				</div>

				{/* 버튼 영역 */}
				<div className="buttons">
					<div className="icons">
						<IconSwitch
							name="star"
							type="green"
							isOn={true}
							style={{
								display: "block",
							}}
							size={"M"}
						/>
						{React.cloneElement(iconVariable["share"] as React.ReactElement, {
							fill: "currentColor",
						})}
					</div>
					<div className="button-active-style">
						<CtaBtn label="출발" size="S" type="Secondary" />
						<CtaBtn label="도착" size="S" type="Primary" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BottomSheetOne;
