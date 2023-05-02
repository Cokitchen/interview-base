import React, { useState } from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <div>
    <Button
      color="primary"
      variant="block"
      loading
      onClick={(a) => alert('i got clicked')}
    >
      Click me
    </Button>
  </div>
);
