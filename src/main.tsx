import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import '@fontsource/pretendard/400.css'; // Pretendard (400 weight)
import 'typeface-noto-sans-kr';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
