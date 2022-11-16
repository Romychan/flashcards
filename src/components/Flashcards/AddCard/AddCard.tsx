import React from 'react';

import { Icon } from '../../UI/Icon/Icon';

import styles from './AddCard.module.scss';

interface IAddCardProps {
  text: string;
  onAction?: () => void;
}

export const AddCard = ({ text, onAction }: IAddCardProps) => {
  return (
    <div className={styles.add} onClick={onAction}>
      <div className={styles.square}>
        <Icon name="plus" className={styles.icon} />
      </div>
      <p className={`${styles.text} text`}>{text}</p>
    </div>
  );
};
