import React from 'react';
import ReactDOM from 'react-dom/client';
import {Global} from '@emotion/react'
import { globalStyles } from './globals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Global styles={globalStyles}/>
    <App />
  </>
  
);


