import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import styles from './base-modal.module.scss';
import { ReactComponent as CloseIcon } from './close.svg';
import { ReactComponent as BackIcon } from './back.svg';

export type BaseModalProps = {
  show: boolean;
  title: string;
  titleCta?: JSX.Element;
  hasBackButton?: boolean;
  description?: string;
  fixed?: boolean;
  onClose: () => void;
  onAfterOpen?: () => void;
  onBackButton?: () => void;
  titleIcon: JSX.Element;
  titleIconColor: 'danger' | 'info';
  footer?: JSX.Element;
  children?: ReactNode;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: 'none',
    padding: '0px',
    overflow: 'unset',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(3px)',
    zIndex: 10000,
  },
};

export function BaseModal({
  children,
  show,
  title,
  titleCta,
  hasBackButton,
  fixed,
  titleIcon,
  titleIconColor,
  description,
  onAfterOpen,
  onClose,
  onBackButton,
  footer,
}: BaseModalProps) {
  return (
    <div>
      <Modal
        isOpen={show}
        onAfterOpen={onAfterOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel={title}
        shouldCloseOnOverlayClick={!fixed}
        ariaHideApp={false}
      >
        <div className={styles['b-modal__content']}>
          <div className={styles['b-modal__header']}>
            <div className={styles['b-modal__icons']}>
              <div
                className={`${styles['b-modal__icon--wrapper']} ${
                  styles[`b-modal__icon--${titleIconColor}`]
                }`}
              >
                {titleIcon}
              </div>
              <CloseIcon
                className={styles['b-modal__icon']}
                role="button"
                onClick={onClose}
              />
            </div>
            {hasBackButton && (
              <div
                className={styles['b-modal__back']}
                role="button"
                onClick={onBackButton}
              >
                <BackIcon /> <span>Back</span>
              </div>
            )}
            <div className={styles['b-modal__title']}>
              <h3>{title}</h3>
              {titleCta}
            </div>
            <p className={styles['b-modal__desc']}>{description}</p>
          </div>
          <div className={styles['b-modal__body']}>{children}</div>
          {footer && <div className={styles['b-modal__footer']}>{footer}</div>}
        </div>
      </Modal>
    </div>
  );
}
