import React, { ReactNode, TextareaHTMLAttributes } from 'react';
import styles from './textarea.module.scss';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function Textarea({ label, className, value, ...props }: TextareaProps) {
  const hasValue = () => {
    return !!value || (typeof value === 'number' && value === 0);
  };

  return (
    <div className={`${styles['textarea__box']} ${className}`}>
      <label className={styles['textarea__label']}>
        {label}
        <div className={styles['textarea__wrapper']}>
          <textarea
            className={`${styles['textarea']}
            ${hasValue() ? styles['textarea__has-value'] : ''} ${
              className ?? ''
            }`}
            value={value}
            {...props}
          />
          <div className={`${styles['textarea__bg']} `}></div>
        </div>
      </label>
    </div>
  );
}
