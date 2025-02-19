// 각 아이콘별로 필요한 props만 정의
interface StarMakerProps {
  backgroundColor?: string; // 배경 원 색상 (star_maker 전용)
}

interface SpotProps {
  fill?: string;
  stroke?: string;
  theme?: 'Green' | 'Red'; // 테마 선택 (radio로 변경 가능)
}

export const badgeIcons = {
  star_maker: ({ backgroundColor = '#CAD1DB' }: StarMakerProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="52"
      viewBox="0 0 57 52"
      fill="none"
    >
      <g filter="url(#filter0_d_3137_7395)">
        <circle cx="26" cy="26" r="16" fill={backgroundColor} />
        <circle cx="26" cy="26" r="15.5" stroke="white" />
      </g>

      <g transform="translate(18,16)"></g>
      <path
        d="M9.20745 2.4391C9.45691 1.67134 10.5431 1.67134 10.7925 2.4391L12.058 6.3339C12.1696 6.67725 12.4896 6.90972 12.8506 6.90972H16.9458C17.7531 6.90972 18.0887 7.94273 17.4356 8.41724L14.1225 10.8244C13.8305 11.0366 13.7082 11.4127 13.8198 11.7561L15.0853 15.6509C15.3348 16.4186 14.456 17.057 13.8029 16.5825L10.4898 14.1754C10.1977 13.9632 9.80225 13.9632 9.51018 14.1754L6.19706 16.5825C5.54397 17.057 4.66523 16.4186 4.91469 15.6509L6.18019 11.7561C6.29175 11.4127 6.16954 11.0366 5.87746 10.8244L2.56435 8.41724C1.91125 7.94273 2.2469 6.90972 3.05417 6.90972H7.1494C7.51043 6.90972 7.83039 6.67725 7.94195 6.3339L9.20745 2.4391Z"
        fill="white"
      />

      <defs>
        <filter
          id="filter0_d_3137_7395"
          x="-5"
          y="-10"
          width="62"
          height="62"
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
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3137_7395"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3137_7395"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),

  // Spot: fill & stroke을 theme 선택으로 변경 가능
  spot: ({ theme = 'Green' }: SpotProps) => {
    const colorMap = {
      Green: { fill: '#00C768', stroke: '#01A054' },
      Red: { fill: '#F23F5C', stroke: '#D32F43' },
    };

    const { fill, stroke } = colorMap[theme];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="47"
        viewBox="0 0 37 47"
        fill="none"
      >
        <g filter="url(#filter0_d_3137_7407)">
          <path
            d="M25.0094 28.7059C21.6455 32.0576 19.4908 35.9272 18.5503 37.8257C18.3473 38.2355 17.6798 38.2274 17.4775 37.8172C16.6586 36.1574 14.7677 32.8682 11.0119 28.7059C5.84513 22.9798 4.71481 20.3075 5.05578 15.8909C5.39675 11.4743 9.48839 4 18.0126 4C26.5369 4 30.6285 11.1345 30.9695 15.8909C31.3105 20.6473 28.7601 24.9687 25.0094 28.7059Z"
            fill={fill}
          />
          <path
            d="M24.6565 28.3517C21.2378 31.7581 19.0544 35.6819 18.1023 37.6037C18.102 37.6043 18.101 37.608 18.0895 37.6141C18.0756 37.6216 18.0507 37.6293 18.0184 37.629C17.9861 37.6287 17.9598 37.6205 17.9437 37.6116C17.9298 37.6039 17.9269 37.5981 17.9259 37.596C17.0876 35.8968 15.1712 32.569 11.3831 28.3709C8.80609 25.5149 7.27551 23.4622 6.42311 21.5993C5.58135 19.7597 5.3885 18.077 5.5543 15.9294C5.7162 13.8322 6.77932 10.9612 8.84077 8.61961C10.8903 6.29154 13.9133 4.5 18.0126 4.5C26.1963 4.5 30.1424 11.3458 30.4708 15.9266C30.7966 20.4712 28.3637 24.6579 24.6565 28.3517Z"
            stroke={stroke}
          />
        </g>
      </svg>
    );
  },
};

export type IconName = keyof typeof badgeIcons;
