import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter} from 'react-router-dom';
import './main.scss'
import { Provider } from 'react-redux'
import {store} from '@/store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </HashRouter>
  </React.StrictMode>,
)
