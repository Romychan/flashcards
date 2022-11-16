import React from 'react';

import { ResultButtons } from './ResultButtons';
import { ResultText } from './ResultText';

import styles from './Result.module.scss';

export const Result = () => {
  return (
    <div className={styles.container}>
      <ResultText />
      <ResultButtons />
    </div>
  );
};
