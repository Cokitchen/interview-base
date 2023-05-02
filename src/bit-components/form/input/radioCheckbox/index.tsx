import React, { FC } from 'react';
import { InputProps } from '../input';
import styles from './index.module.scss';

const RadioCheckbox: FC<InputProps> = ({
  label,
  className,
  inline,
  inputClass,
  type,
  disabled,
  labelDirection = 'right',
  checkColor = 'red',
  ...props
}) => {
  return (
    <label
      className={`${styles['radio__label']} ${
        inline ? styles['radio__label--inline'] : ''
      } ${disabled ? styles['radio__label--disabled'] : ''} ${className ?? ''}`}
    >
      <input
        className={`${styles['radio']} 
        ${styles[`radio--${checkColor}`]} 
        ${type === 'checkbox' ? styles['radio--checkbox'] : ''} 
        ${labelDirection === 'left' ? styles['radio--left'] : ''} 
        ${inputClass ?? ''}`}
        type={type}
        disabled={disabled}
        {...props}
      />
      {label && <span className={styles['radio__text']}>{label}</span>}
    </label>
  );
};

export { RadioCheckbox };
