import React from 'react';
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
      <button onClick={logout} className='bg-blue-4 rounded mt-4 py-1 px-4'>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
