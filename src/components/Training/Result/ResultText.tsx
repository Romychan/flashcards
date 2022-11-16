import React from 'react';
import cx from 'classnames';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './Result.module.scss';
import popper from '../../../assets/img/general/party-popper.png';

export const ResultText = () => {
  const { cards } = useTypedSelector((state) => state.flashcard);

  return (
    <div className={styles.content}>
      <div className={styles.img}>
        <img src={popper} alt="party-popper-emoji" />
      </div>

      <h1 className={cx('title', styles.title)}>Великолепно!</h1>
      {cards.length !== 0 ? (
        <p className={cx('text', styles.text)}>
          Вы закончили тренировку! Хотите повторить слова или вернуться?
        </p>
      ) : (
        <p className={cx('text', styles.text)}>
          Вы закончили тренировку! Вы выучили все слова!
        </p>
      )}
    </div>
  );
};
