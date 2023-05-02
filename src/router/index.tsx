import React from 'react';
import { ROUTE_KEYS } from '../utils/constants';
import AuthRoute from './AuthRoute';
import UnauthRoute from './UnauthRoute';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

type RouteType = {
  element: JSX.Element;
  path: string;
};

const ALL_ROUTES: RouteType[] = [
  {
    path: ROUTE_KEYS.LOGIN,
    element: (
      <UnauthRoute>
        <Login />
      </UnauthRoute>
    )
  },
  {
    path: ROUTE_KEYS.DASHBOARD,
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    )
  }
];

export default ALL_ROUTES;
