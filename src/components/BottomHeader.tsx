// eslint-disable-next-line react-refresh/only-export-components
export const HeaderType: Record<string, JSX.Element> = {
  default: (
    <svg
      width="375"
      height="30"
      viewBox="0 0 375 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0H359C367.837 0 375 7.16344 375 16V30H0V16Z"
        fill="white"
      />
      <rect x="168.5" y="13" width="38" height="4" rx="2" fill="#CAD1DB" />
    </svg>
  ),
  gradient: (
    <svg
      width="375"
      height="30"
      viewBox="0 0 375 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0H359C367.837 0 375 7.16344 375 16V30H0V16Z"
        fill="url(#paint0_linear_3346_20833)"
      />
      <rect x="168.5" y="13" width="38" height="4" rx="2" fill="#CAD1DB" />
      <defs>
        <linearGradient
          id="paint0_linear_3346_20833"
          x1="187.5"
          y1="30"
          x2="187.5"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#222225" stop-opacity="0" />
          <stop offset="1" stop-color="#222225" stop-opacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  badge: (
    <svg
      width="375"
      height="54"
      viewBox="0 0 375 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 43C0 34.1634 7.16344 27 16 27H359C367.837 27 375 34.1634 375 43V54H0V43Z"
        fill="white"
      />
      <circle
        cx="187.499"
        cy="26.9998"
        r="23.0969"
        fill="#C5C5C7"
        stroke="white"
        stroke-width="3.30612"
      />
      <path
        d="M186.859 13.2259C187.061 12.6041 187.941 12.6041 188.143 13.2259L190.885 21.6668C190.976 21.9449 191.235 22.1332 191.527 22.1332L200.402 22.1332C201.056 22.1332 201.328 22.9699 200.799 23.3543L193.619 28.571C193.382 28.7428 193.283 29.0475 193.374 29.3256L196.116 37.7664C196.318 38.3883 195.607 38.9055 195.078 38.5211L187.897 33.3044C187.661 33.1325 187.34 33.1325 187.104 33.3044L179.924 38.5211C179.395 38.9055 178.683 38.3883 178.885 37.7664L181.628 29.3256C181.718 29.0475 181.619 28.7428 181.382 28.571L174.202 23.3543C173.673 22.9699 173.945 22.1332 174.599 22.1332L183.474 22.1332C183.767 22.1332 184.026 21.9449 184.116 21.6668L186.859 13.2259Z"
        fill="white"
      />
    </svg>
  ),
};

export const HeaderNames = Object.keys(HeaderType) as Array<
  keyof typeof HeaderType
>;
