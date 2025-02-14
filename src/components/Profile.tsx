import React from 'react';
import './Profile.css';

interface ProfileProps {
  profileImg?: string;
  nickName: string;
  blogName?: string;
  date: string;
  visitNum?: number;
  paymentType?: '간편결제' | '영수증';
}

const ProfileIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_d_685_33278)">
        <circle cx="24" cy="24" r="16" fill="#C5C5C7" />
        <circle cx="24" cy="24" r="15" stroke="#E5EAF1" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_685_33278"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_685_33278"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_685_33278"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Profile: React.FC<ProfileProps> = ({
  profileImg,
  nickName,
  blogName,
  date,
  visitNum,
  paymentType,
}) => {
  const infoArray = [
    blogName ? <span className="blogName-style">{blogName}</span> : null,
    <span className="date-style">{date}</span>,
    visitNum !== undefined ? (
      <span className="visit-num-style">{visitNum}번째 방문</span>
    ) : null,
    paymentType ? (
      <span className="payment-type-style">{paymentType}</span>
    ) : null,
  ].filter(Boolean);

  return (
    <div className="profile-container">
      {profileImg ? (
        <img src={profileImg} alt="Profile" className="profile-image" />
      ) : (
        <ProfileIcon />
      )}
      <span className="nickname-style">{nickName}</span>
      {infoArray.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className="dot-style"> · </span>}
          {item}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Profile;
