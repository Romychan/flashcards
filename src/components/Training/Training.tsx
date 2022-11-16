import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { DEFAULT_PATH } from '../../utils/constants/routes';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';

import { FlashcardDrag } from '../shared/Flashcard/FlashcardDrag';
import { ActionList } from './Action/ActionList';
import { Arrows } from './Arrows/Arrows';
import { Result } from './Result/Result';

import styles from './Training.module.scss';

export const Training = () => {
  const { speak } = useSpeechSynthesis();
  const { cards, currentCard, settings } = useTypedSelector(
    (state) => state.training,
  );
  const { setCurrentCard, updateProgressCard } = useActions();

  const switchCard = (position: number, id: number | string) => {
    updateProgressCard({ id, progress: position < 0 });
    setCurrentCard();
  };

  useEffect(() => {
    if (cards.length > currentCard && settings.autoVoice) {
      speak(
        cards[currentCard].original.text,
        cards[currentCard].original.language,
      );
    }
  }, [currentCard]);

  if (cards.length < 1) {
    return <Navigate to={DEFAULT_PATH} />;
  }

  return (
    <div className={styles.container}>
      {cards.length > currentCard ? (
        <>
          <ActionList />
          <Arrows />

          <div className={styles.cards}>
            {cards.slice(currentCard).map((card, index) => (
              <FlashcardDrag
                key={card.id}
                item={card}
                onAction={switchCard}
                order={cards.slice(currentCard).length - index}
              />
            ))}
          </div>
        </>
      ) : (
        <Result />
      )}
    </div>
  );
};
