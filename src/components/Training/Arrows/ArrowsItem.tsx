import React from 'react';

import { Icon } from '../../UI/Icon/Icon';

import styles from './Arrows.module.scss';

interface IArrowsItemProps {
  type?: string;
  text: string;
}

export const ArrowsItem = ({ type = 'up', text = '' }: IArrowsItemProps) => {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <div className={`${styles.arrow}`}>
        <div className={styles.square}>
          <Icon name="arrow" size={27} className={styles.icon} />
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
