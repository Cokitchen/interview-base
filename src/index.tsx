import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ALL_ROUTES from './router';
import { ROUTE_KEYS } from './utils/constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        {ALL_ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path='*' element={<Navigate to={ROUTE_KEYS.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
reportWebVitals();
