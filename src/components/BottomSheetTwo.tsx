import React from 'react';
import CtaBtn from './CtaBtn';
import IconSwitch from './IconSwitch';
import BottomSheetHeader from './BottomSheetHeader';
import Badge from './Badge';
import { Dividers } from './DividerType';
import { icons } from './IIconTypes';
import ImageGrid from './imgList';
import BoxSwitch from './BoxSwitch';

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
              {/* 우측 썸네일 */}
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

            {/* 버튼 영역 */}
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

      {/* 2단 & 3단 UI (1단 UI를 덮어씌우지 않도록 별도로 렌더링) */}
      {stage > 1 && (
        <div className="bottom-sheet-expanded">
          {/* 우측 썸네일 */}
          <ImageGrid
            imageCount={5}
            images={[
              'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_208%2F14410456696401P9Uq_JPEG%2F13491723_0.jpg',
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMjNfMTM3%2FMDAxNTUzMzMxNDEyNjQ1.0PQ8A8Lb0R6ZyvuBbtn99mTreoMLli1Rdf2VwCxtREUg.YucjlZSUKPszlO-Y2M22I_9f0Xr_9PxK3bDVwRbrkIkg.JPEG.tnrwlschl%2FIMG_6320.jpg%23886x590',
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMjNfMTcz%2FMDAxNTUzMzMxNDA2OTE1.YjZQekLaqBm1SQv_FZ8M1WQ-5ZRvwLchRf5miJ-HpYog.fe3yMZnQVJEFSk0FUeoN-t65ZWrvcLzn0MhHuMB394wg.JPEG.tnrwlschl%2FIMG_6314.jpg%23886x590',
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMTBfMTky%2FMDAxNTUyMjA5NjQ5MjI3.-gNkn_EpeX9rAFg647sFzZzWGZZ2WBrA6rw81bvR1NAg.-HU18rFi8kYn4gBeJkvry6u45PVTFrITWJ-LmOTz8UUg.JPEG.tnrwlschl%2FIMG_6326.jpg%23886x590',
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMjNfMTQ4%2FMDAxNTUzMzMxMzkxODI0.YDJ_JWkUkNcJOL2MobAKgVZy9tYkfWH0kk843GiFWg8g.GuBGoKaERlhNiTLCaoxwd9b1dg82Y3Z3vZPUjzl1o18g.JPEG.tnrwlschl%2FIMG_6318.jpg%23886x590',
            ]}
          />

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
                <div className="reviews">
                  <div className="black-style">방문자 리뷰 {review}</div>
                  {Dividers.circle}
                  <div className="black-style">블로그 리뷰 {review}</div>
                </div>

                <div className="button-active-style">
                  <CtaBtn
                    label="출발"
                    size="R"
                    type="Secondary"
                    icon="getoff"
                    className="icon-getoff"
                  />
                  <CtaBtn
                    label="도착"
                    size="R"
                    type="Primary"
                    icon="place"
                    className="icon-place"
                  />
                </div>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="buttons">
              <div className="icons">
                <IconSwitch name="star" type="green" isOn={true} size="S" />
                {React.cloneElement(icons['share'] as React.ReactElement, {
                  fill: 'currentColor',
                })}
              </div>
            </div>
            <div>
              <BoxSwitch name="star" isOn={false}></BoxSwitch>{' '}
              <BoxSwitch name="star" isOn={false}></BoxSwitch>
              <BoxSwitch name="star" isOn={false}></BoxSwitch>
              <BoxSwitch name="star" isOn={false}></BoxSwitch>
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
