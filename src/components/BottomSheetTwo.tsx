import React from 'react';
import CtaBtn from './CtaBtn';
import IconSwitch from './IconSwitch';
import BottomSheetHeader from './BottomSheetHeader';
import Badge from './Badge';
import { Dividers } from './DividerType';
import { icons } from './IIconTypes';

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

      {/*  1단 UI (내용 유지) */}
      {stage === 1 && (
        <div>
          <div>
            <BottomSheetHeader type="default" />
          </div>
          <div className="container">
            <div className="content">
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
                  <IconSwitch name="star" type="red" isOn={true} />
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
              {/* 우측 썸네일 */}
              <div className="thumbnail">
                <div className="image">
                  <Badge className="image-count-style" text={'7'} />
                </div>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="buttons">
              <div className="icons">
                <IconSwitch name="star" type="green" isOn={true} />
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

      {/* 2단 & 3단 UI (1단 UI를 덮어씌우지 않도록 별도로 렌더링) */}
      {stage > 1 && (
        <div className="bottom-sheet-expanded">
          {/* 우측 썸네일 */}
          <div className="thumbnail">
            <div className="image">
              <Badge className="image-count-style" text={'7'} />
            </div>
          </div>

          {/* 바텀시트 콘텐츠 */}
          <div className="container">
            <div className="content">
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
                  <IconSwitch name="star" type="red" isOn={true} />
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
                <IconSwitch name="star" type="green" isOn={true} />
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

      {/*  3단에서는 추가 상세 정보 표시 */}
      {stage === 3 && (
        <div className="details">
          <p className="address">
            {address} · <span className="distance">{distance}km</span>
          </p>
          <p className="info">부산 출구 신창동4가</p>
          <p className="info">영업 중 · 20:00에 영업 종료</p>
          <p className="info">051-245-7390</p>
        </div>
      )}
    </div>
  );
};

export default BottomSheetTwo;
