import React from 'react';

import { ArrowsItem } from './ArrowsItem';

import styles from './Arrows.module.scss';

export const Arrows = () => {
  return (
    <div className={styles.container}>
      <ArrowsItem text="Помню" />

      <ArrowsItem text="Не помню" type="down" />
    </div>
  );
};
