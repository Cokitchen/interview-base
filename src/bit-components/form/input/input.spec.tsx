/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicInput } from './input.composition';

it('should render with the correct input text', () => {
  const { getByTestId } = render(<BasicInput />);
  const MyInput = getByTestId('my-input');
  fireEvent.change(MyInput, { target: { value: 'matti' } });
  expect((MyInput as HTMLInputElement).value).toBe('matti');
});
