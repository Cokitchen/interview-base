import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { DEFAULT_TOAST_OPTIONS } from './bit-components/alerts/toast';
import ALL_ROUTES from './router';
import { ToastContainer } from 'react-toastify';
import { ROUTE_KEYS } from './utils/constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <ToastContainer {...DEFAULT_TOAST_OPTIONS} />
      <Routes>
        {ALL_ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path='*' element={<Navigate to={ROUTE_KEYS.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
