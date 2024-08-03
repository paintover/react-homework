import '@/styles/main.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

const container = document.getElementById('react-app');

if(!container) throw new Error('문서에 "#react-app" 요소가 존재하지 않습니다.');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)