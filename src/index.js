import ReactDOM, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Game from './game';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

  // ========================================
  
  root.render(
    <Game />
  );
  
  