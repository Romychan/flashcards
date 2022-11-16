import React from 'react';

import styles from './Modal.module.scss';

interface IModalBodyProps {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: IModalBodyProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
