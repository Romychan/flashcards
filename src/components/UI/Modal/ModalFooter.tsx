import React from 'react';

import styles from './Modal.module.scss';

interface IModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};
