import React, { ButtonHTMLAttributes, FC } from 'react';
import { ReactComponent as Loader } from './loader.svg';
import styles from './button.module.css';

// add more button colors here and style in the module
type ButtonColor = 'primary' | 'gray' | 'transparent';
type ButtonVariant = 'link' | 'block' | 'outline';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor;
  variant: ButtonVariant;
  loading?: boolean;
  small?: boolean;
  inline?: boolean;
};

const Button: FC<ButtonProps> = ({
  color = 'primary',
  variant = 'block',
  inline,
  children,
  loading,
  small,
  className = '',
  ...buttonProps
}) => {
  const colorClass = `btn-${color}`;
  const variantClass = `btn-${variant}`;
  return (
    <button
      {...buttonProps}
      className={`${styles['btn']} ${small ? styles['btn--small'] : ''} ${
        styles[colorClass]
      } ${inline ? styles['btn--inline'] : ''}
        ${styles[variantClass]} ${loading ? styles['btn-loading'] : ''} ${
        className ?? ''
      }`}
    >
      {loading && (
        <span className={styles['btn__loader']}>
          <Loader />
        </span>
      )}
      {children}
    </button>
  );
};

export { Button };
