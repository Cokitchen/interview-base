import React, {
  InputHTMLAttributes,
  useState,
  FC,
  useEffect,
  createElement,
  ComponentClass,
  HTMLInputTypeAttribute,
} from 'react';
import { BasicInput } from './basicInput';
import { RadioCheckbox } from './radioCheckbox';

type ComponentsObjType = {
  BasicInput: ComponentClass | FC;
  RadioCheckbox: ComponentClass | FC;
};

const Components: ComponentsObjType = {
  BasicInput: BasicInput,
  RadioCheckbox: RadioCheckbox,
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  isValid?: boolean;
  inline?: boolean;
  inputClass?: string;
  labelDirection?: 'left' | 'right';
  small?: boolean;
  currency?: boolean;
  currencySymbol?: string;
  checkColor?: 'green' | 'red' | 'gray' | 'darkgray';
};

const Input: FC<InputProps> = ({ type, ...props }) => {
  const [componentKey, setComponentKey] =
    useState<keyof ComponentsObjType>('BasicInput');

  useEffect(() => {
    if (type === 'checkbox' || type === 'radio')
      setComponentKey('RadioCheckbox');
  }, []);

  return createElement<InputProps>(Components[componentKey] as FC, {
    type,
    ...props,
  });
};

export { Input };
