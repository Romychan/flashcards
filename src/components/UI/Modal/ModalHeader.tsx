import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon/Icon';

import styles from './Modal.module.scss';

interface IModalHeaderProps {
  title: string;
  icon?: string;
  text?: string;
  onClose: () => void;
}

export const ModalHeader = ({
  title,
  icon = '',
  text,
  onClose,
}: IModalHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.logo}>
          <Icon name={icon} />
        </div>
        <span className={styles.close} onClick={onClose}>
          <Icon name="close" size={16} />
        </span>
      </div>

      <div className={styles.container}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={cx('text text_small', styles.text)}>{text}</p>}
      </div>
    </div>
  );
};
