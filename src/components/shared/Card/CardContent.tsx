import React from 'react';
import cx from 'classnames';

import { LANGUAGE_LIST } from '../../../utils/constants/languages';

import { Speech } from '../../UI/Speech/Speech';

import styles from './Card.module.scss';

interface ICardContentProps {
  text: string;
  language: string;
  type?: string;
}

export const CardContent = ({
  text,
  language,
  type = 'original',
}: ICardContentProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <Speech
          language={language}
          text={text}
          content={LANGUAGE_LIST[language]}
          className={styles.audio}
        />
      </div>

      <div className={cx('text', styles.text, styles[type])}>{text}</div>
    </div>
  );
};
