import React from 'react';
import { Button } from '../../bit-components/form/button';
import { useNavigate } from 'react-router';
import { ROUTE_KEYS } from '../../utils/constants';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate(ROUTE_KEYS.LOGIN);
  };
  return (
    <div>
      <p>My dashabord page</p>
      <Button onClick={logout} color='primary' variant='block'>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
