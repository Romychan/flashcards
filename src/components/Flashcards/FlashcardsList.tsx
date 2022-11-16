import React from 'react';
import Masonry from 'react-masonry-css';

import { FLASHCARDS_COLUMN_SIZE } from '../../utils/constants/flashcard';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Card } from '../shared/Card/Card';
import { FlashcardsAdding } from './FlashcardsAdding';

import styles from './Flashcards.module.scss';

export const FlashcardsList = () => {
  const { cards } = useTypedSelector((state) => state.flashcard);
  const { deleteCard } = useActions();

  return (
    <div className={styles.container}>
      <FlashcardsAdding />

      <Masonry
        breakpointCols={FLASHCARDS_COLUMN_SIZE}
        className={styles.list}
        columnClassName={styles.column}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            item={card}
            className={styles.item}
            onDelete={() => deleteCard(card.id)}
          />
        ))}
      </Masonry>
    </div>
  );
};
