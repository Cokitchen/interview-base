import React, { useState } from 'react';
import { Input } from './input';

export const BasicInput = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Label text"
      placeholder="Placeholder text"
      data-testid="my-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="checkbox"
      checkColor="darkgray"
    />
  );
};
