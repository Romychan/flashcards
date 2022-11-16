import React from 'react';
import Masonry from 'react-masonry-css';

import { FLASHCARDS_COLUMN_SIZE } from '../../utils/constants/flashcard';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Card } from '../shared/Card/Card';

import styles from './Flashcards.module.scss';

export const FlashcardsCompleted = () => {
  const { completed } = useTypedSelector((state) => state.flashcard);
  const { deleteCompletedCard } = useActions();

  return (
    <div className={styles.container}>
      <Masonry
        breakpointCols={FLASHCARDS_COLUMN_SIZE}
        className={styles.list}
        columnClassName={styles.column}
      >
        {completed.length > 0 ? (
          completed.map((card) => (
            <Card
              key={card.id}
              item={card}
              className={styles.item}
              onDelete={() => deleteCompletedCard(card.id)}
            />
          ))
        ) : (
          <div className={styles.empty}>Здесь пока пусто</div>
        )}
      </Masonry>
    </div>
  );
};
