import React, {
  useState,
  Fragment,
  HTMLInputTypeAttribute,
  FC,
  useEffect,
} from 'react';
import { ReactComponent as CheckmarkIcon } from './checkmark.svg';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as EyeOpenIcon } from './eye-open.svg';
import { ReactComponent as EyeCloseIcon } from './eye-close.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import styles from './index.module.scss';
import { InputProps } from '../input';

const BasicInput: FC<InputProps> = ({
  error,
  isValid,
  label,
  value,
  type = 'text',
  small,
  className,
  inputClass,
  currency,
  currencySymbol = '₦',
  checkColor,
  ...props
}) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);
  const [hasPrefix, setHasPrefix] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (currency) {
      setInputType('number');
    }
    setHasPrefix(type === 'search' || currency);
  }, []);

  const hasValue = () => {
    return !!value || (typeof value === 'number' && value === 0);
  };

  const toggleInputType = () => {
    setInputType((t) => (t === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={`${styles['input__box']} ${className ?? ''}`}>
      <label className={styles['input__label']}>
        {label}
        <div className={`${styles['input__wrapper']} `}>
          {type === 'search' && (
            <SearchIcon
              className={`${styles['input__icon']} ${styles['input__icon--prefix']}`}
            />
          )}
          {currency && (
            <span
              className={`${styles['input__icon']} ${styles['input__icon--prefix']} ${styles['input__currency']}`}
            >
              {currencySymbol}
            </span>
          )}
          <input
            className={`${styles['input']}
            ${hasValue() ? styles['input__has-value'] : ''}
            ${small ? styles['input--small'] : ''}
            ${hasPrefix ? styles['input--prefix'] : ''}
            ${isValid ? styles['input__valid'] : ''}
            ${error ? styles['input__has-error'] : ''} ${inputClass ?? ''}`}
            value={value}
            type={inputType}
            {...props}
          />
          {type === 'password' ? (
            inputType === 'password' ? (
              <EyeOpenIcon
                className={`${styles['input__icon']} ${styles['input__icon--eye']}`}
                role="button"
                onClick={toggleInputType}
              />
            ) : (
              <EyeCloseIcon
                className={`${styles['input__icon']}  ${styles['input__icon--eye']}`}
                role="button"
                onClick={toggleInputType}
              />
            )
          ) : (
            <Fragment>
              {isValid && <CheckmarkIcon className={styles['input__icon']} />}
              {error && <ErrorIcon className={styles['input__icon']} />}
            </Fragment>
          )}
          <div className={`${styles['input__bg']} `}></div>
        </div>
      </label>
      {error && <p className={styles['input__error']}>{error}</p>}
    </div>
  );
};

export { BasicInput };
