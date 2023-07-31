import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter} from "react-router-dom";
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>,
)
