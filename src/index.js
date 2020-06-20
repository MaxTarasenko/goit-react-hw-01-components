import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './sass/container.scss';
import './sass/friendList.scss';
import './sass/profile.scss';
import './sass/statistics.scss';
import './sass/transactionHistory.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
