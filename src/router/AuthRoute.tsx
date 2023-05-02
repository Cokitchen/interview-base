import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_KEYS, STORAGE_KEYS } from '../utils/constants';

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  return token ? children : <Navigate to={ROUTE_KEYS.LOGIN} />;
};
export default AuthRoute;
