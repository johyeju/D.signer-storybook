// 각 아이콘별로 필요한 props만 정의
interface StarMakerProps {
  backgroundColor?: string; // 배경 원 색상 (star_maker 전용)
}

interface SpotProps {
  theme?: 'Green' | 'Red';
}

interface PinProps {
  size?: 'R' | 'L';
  theme?: 'Red' | 'Blue';
}

export type BadgeIconProps = StarMakerProps | SpotProps | PinProps;

export const badgeIcons = {
  pin: ({ theme = 'Red', size = 'L' }: PinProps) => {
    const colorMap = {
      Red: { fill: ' #F56652', stroke: '#FFF' },
      Blue: { fill: '#006CFF', stroke: '#FFF;' },
    };

    const { fill, stroke } = colorMap[theme];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === 'L' ? '46' : '30'}
        height={size === 'L' ? '57' : '37'}
        viewBox="0 0 46 57"
        fill="none"
      >
        <g filter="url(#filter0_d_3388_16403)">
          <path
            d="M33.2445 39.2941C28.6653 43.7539 25.6192 48.8554 24.1122 51.7257C23.6905 52.529 22.3519 52.5135 21.9264 51.7122C20.5909 49.197 17.8468 44.7755 12.7867 39.2941C5.2352 31.114 3.58318 27.2964 4.08152 20.987C4.57986 14.6775 10.5599 4 23.0185 4C35.477 4 41.4571 14.1922 41.9554 20.987C42.4537 27.7818 38.7262 33.9553 33.2445 39.2941Z"
            fill={fill}
          />
          <path
            d="M32.8956 38.9359C28.264 43.4467 25.1892 48.5989 23.6695 51.4933C23.5672 51.6882 23.3293 51.8232 23.0248 51.8207C22.7201 51.8182 22.4744 51.6781 22.368 51.4777C21.013 48.9259 18.2444 44.469 13.1541 38.955C9.38453 34.8716 7.12848 31.9191 5.86825 29.2271C4.61933 26.5592 4.33572 24.1188 4.57997 21.0264C4.82014 17.9856 6.39258 13.8416 9.43645 10.4621C12.4682 7.09607 16.9477 4.5 23.0185 4.5C35.1454 4.5 40.972 14.4144 41.4567 21.0236C41.9392 27.6016 38.3346 33.6388 32.8956 38.9359Z"
            stroke={stroke}
          />
        </g>
      </svg>
    );
  },

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
    </svg>
  ),

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
            d="M24.6565 28.3517C21.2378 31.7581 19.0544 35.6819 18.1023 37.6037C17.9269 37.5981 17.9259 37.596 17.0876 35.8968C15.1712 32.569 11.3831 28.3709 8.80609 25.5149C7.27551 23.4622 6.42311 21.5993C5.58135 19.7597 5.3885 18.077 5.5543 15.9294C5.7162 13.8322 6.77932 10.9612 8.84077 8.61961C10.8903 6.29154 13.9133 4.5 18.0126 4.5C26.1963 4.5 30.1424 11.3458 30.4708 15.9266C30.7966 20.4712 28.3637 24.6579 24.6565 28.3517Z"
            stroke={stroke}
          />
        </g>
      </svg>
    );
  },
};

export type IconName = keyof typeof badgeIcons;
