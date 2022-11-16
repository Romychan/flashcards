import React, { useEffect } from 'react';
import cx from 'classnames';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

import styles from './Modal.module.scss';

interface IModalProps {
  visible?: boolean;
  transition?: boolean;
  icon?: string;
  title?: string;
  text?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  className?: string;
}

export const Modal = ({
  visible = false,
  icon = '',
  title = '',
  text,
  content = '',
  footer = '',
  onClose,
  transition = false,
  className = '',
}: IModalProps) => {
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && visible) {
      onClose();
    }
  };

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={cx(styles.modal, {
        [styles.delete]: transition,
      })}
    >
      <div
        className={cx(styles.background, className, {
          [styles.delete]: transition,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.wrapper}>
          <ModalHeader
            onClose={onClose}
            title={title}
            icon={icon}
            text={text}
          />

          {content && <ModalBody>{content}</ModalBody>}

          {footer && <ModalFooter>{footer}</ModalFooter>}
        </div>
      </div>
    </div>
  );
};
