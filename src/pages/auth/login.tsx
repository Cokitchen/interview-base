import React, { FormEvent, useState } from 'react';
import { Input } from '../../bit-components/form/input';
import { Button } from '../../bit-components/form/button';
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
  const [formError, setFormError] = useState<Partial<FormObjType>>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formIsValid = (): boolean => {
    setFormError({
      email: '',
      password: ''
    });
    const email = formData.email.trim();
    const password = formData.password.trim();
    if (email !== '' && password !== '') return true;
    if (email === '') setFormError({ email: 'Email is required' });
    if (password === '') {
      setFormError((p) => ({ ...p, password: 'Password is required' }));
    }
    return false;
  };
  const login = async (e: FormEvent) => {
    e.preventDefault();
    if (!formIsValid()) return;
    setLoading(true);
    const res = await authService.login(formData);
    if (res) navigate(ROUTE_KEYS.DASHBOARD);
    setLoading(false);
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
            <Input
              name='email'
              label='Email'
              type='email'
              placeholder='Enter email'
              value={formData.email}
              error={formError.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-[4rem]'>
            <Input
              name='password'
              type='password'
              label='Password'
              placeholder='Enter Password'
              value={formData.password}
              error={formError.password}
              onChange={handleChange}
              className='mt-3 mb-4'
            />
          </div>
          <Button
            color='primary'
            className='mx-auto'
            variant='block'
            onClick={login}
            loading={loading}>
            Login
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
