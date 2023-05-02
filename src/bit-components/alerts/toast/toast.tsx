import React, { FC } from 'react';
import { ToastContainerProps } from 'react-toastify';
import { ReactComponent as CloseIcon } from './close.svg';
import styles from './toast.module.scss';
import './toast-global.scss';

// add more toast types here and style in the module
type ToastType = 'success' | 'error' | 'warn';

export const DEFAULT_TOAST_OPTIONS: ToastContainerProps = {
  autoClose: 5000,
  closeButton: false,
  icon: false,
  hideProgressBar: true,
  toastClassName: 'toastify__wrapper',
  bodyClassName: 'toastify__body',
};

export type ToastMessageProps = {
  type: ToastType;
  message?: string | JSX.Element;
  onClose?: () => void;
  isNetworkError?: boolean;
};

const ToastMessage: FC<ToastMessageProps> = ({
  onClose,
  message,
  type,
  isNetworkError,
}) => {
  const bgColor = `toastify__${type}`;
  return (
    <div className={`${styles['toastify__content']} ${styles[bgColor]}`}>
      <span className={`${styles['toastify__alert']}`}>
        {type === 'success' ? 'ALERT 🎉' : 'OOPS 😓'}
      </span>
      <span className={styles['toastify__text']}>
        {isNetworkError ? 'Network Error, Kindly Refresh' : message}
      </span>
      <button onClick={onClose} className={`${styles['toastify__close']}`}>
        <CloseIcon />
      </button>
    </div>
  );
};

export { ToastMessage };
