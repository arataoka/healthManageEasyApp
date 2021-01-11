import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './store';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
