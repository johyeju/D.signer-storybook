import React from 'react';
import CtaBtn from './CtaBtn';
import IconSwitch from './IconSwitch';
import BottomSheetHeader from './BottomSheetHeader';
import Badge from './Badge';
import { Dividers } from './DividerType';
import { icons } from './IIconTypes';
import ImageGrid from './imgList';
// import BoxSwitch from './BoxSwitch';

type BottomSheetProps = {
  stage: number;
  sheetRef: React.RefObject<HTMLDivElement>;
  title: string;
  subtitle: string;
  address: string;
  review: number;
  score: number;
  distance: number;
};

const BottomSheetTwo: React.FC<BottomSheetProps> = ({
  stage,
  sheetRef,
  title,
  subtitle,
  address,
  review,
  score,
  distance,
}) => {
  return (
    <div ref={sheetRef} className={`bottom-sheet stage-${stage}`}>
      {/* 드래그 핸들 */}
      <div className="drag-handle"></div>

      {/* 3단 */}
      {stage === 3 ? (
        <div className="image-container">
          <img
            src="D.signer-storybook/frame.png"
            alt="로드된 화면 이미지"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      ) : (
        // 1~2단에서는 기존 UI
        <div className="bottom-sheet-content">
          <BottomSheetHeader type="default" />
          <div className="container">
            <div className="content">
              <div className="text-group">
                <div className="text-title">
                  <h3 className="title">{title}</h3>
                  <p className="subtitle">{subtitle}</p>
                </div>
                <div className="state">
                  <div className="bold-style">영업 중</div> {Dividers.circle}
                  <div className="black-style">20:00에 영업 종료</div>
                </div>
                <div className="reviews">
                  <IconSwitch name="star" type="red" isOn={true} size="S" />
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
              <div className="thumbnail">
                <ImageGrid
                  imageCount={1}
                  images={[
                    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_208%2F14410456696401P9Uq_JPEG%2F13491723_0.jpg',
                  ]}
                />
              </div>
              <Badge className="image-count-style" text={'7'} />
            </div>

            {/* 버튼 */}
            <div className="buttons">
              <div className="icons">
                <IconSwitch name="star" type="green" isOn={true} size="M" />
                {React.cloneElement(icons['share'] as React.ReactElement, {
                  fill: 'currentColor',
                })}
              </div>
              <div className="button-active-style">
                <CtaBtn label="출발" size="S" type="Secondary" />
                <CtaBtn label="도착" size="S" type="Primary" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomSheetTwo;
