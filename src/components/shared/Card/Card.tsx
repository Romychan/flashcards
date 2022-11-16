import React from 'react';
import cx from 'classnames';

import { IFlashcard } from '../../../types/Flashcard';

import { CardContent } from './CardContent';
import { CardActions } from './CardActions';

import styles from './Card.module.scss';

interface ICardProps {
  item: IFlashcard;
  onDelete: () => void;
  className?: string;
}

export const Card = ({ item, onDelete, className = '' }: ICardProps) => {
  return (
    <div className={cx(styles.card, className)}>
      <CardContent
        text={item.original.text}
        language={item.original.language}
      />

      <div className={styles.line}></div>

      <CardContent
        type="Card"
        text={item.translate.text}
        language={item.translate.language}
      />

      <CardActions progress={item.progress} onDelete={onDelete} />
    </div>
  );
};
