import React, { useState } from 'react';
import { Multiselect } from './multiselect';

const OPTIONS = [
  {
    text: 'All',
    value: 'all',
  },
  {
    text: 'Potato',
    value: 'potato',
  },
  {
    text: 'Salad Cream',
    value: 'salad',
  },
  {
    text: 'Custard Pie',
    value: 'custard',
  },
  {
    text: 'Premium cake',
    value: 'premium_cake',
  },
];
export const BasicMultiselect = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div style={{ width: '400px' }}>
      <Multiselect
        values={values}
        isSingle
        options={OPTIONS}
        onChange={setValues}
        dropdownPlaceholder="Select all or multiple brands"
        placeholder="Select brands"
      />
    </div>
  );
};
