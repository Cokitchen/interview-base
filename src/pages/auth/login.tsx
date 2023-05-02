import React, { FormEvent, useState } from 'react';
import { ROUTE_KEYS } from '../../utils/constants';
import { useNavigate } from 'react-router';
import authService from '../../services/auth.service';

type FormObjType = {
  email: string;
  password: string;
};

const Login = () => {
  const [formData, setFormData] = useState<FormObjType>({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const formIsValid = (): boolean => {
    const email = formData.email.trim();
    const password = formData.password.trim();
    if (email !== '' && password !== '') return true;
    return false;
  };
  const login = async (e: FormEvent) => {
    e.preventDefault();
    if (!formIsValid()) return;
    const res = await authService.login(formData);
    if (res) navigate(ROUTE_KEYS.DASHBOARD);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='md:h-[100vh] bg-red-9 p-4 sm:p-8 md:p-16 md:pt-28'>
      <section className='max-w-[490px] mx-auto py-10'>
        <h4 className='font-semibold text-lg md:text-[24px] pb-2 text-gray-6'>
          Login to your dashboard
        </h4>
        <p className='mb-[48px] text-sm md:text-[16px] text-gray-5'>
          Provide details to login to your account
        </p>
        <form onSubmit={login}>
          <div className='mb-[2rem]'>
            <input
              name='email'
              type='email'
              placeholder='Enter email'
              value={formData.email}
              onChange={handleChange}
              className='border border-gray-3 w-full py-1 px-2 rounded'
            />
          </div>
          <div className='mb-[4rem]'>
            <input
              name='password'
              type='password'
              placeholder='Enter Password'
              value={formData.password}
              onChange={handleChange}
              className='border border-gray-3 w-full py-1 px-2 rounded'
            />
          </div>
          <button color='primary' className='mx-auto bg-red-3 rounded py-1 px-4' onClick={login}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
