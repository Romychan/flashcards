import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { shuffleArray } from '../../utils/functions/shuffleArray';
import { TRAINING_PATH } from '../../utils/constants/routes';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import { Menu } from './Menu/Menu';
import { SectionHeader } from '../UI/Section/SectionHeader';
import { Section } from '../UI/Section/Section';
import { Button } from '../UI/Button/Button';

import styles from './Flashcards.module.scss';

export const Flashcards = () => {
  const navigate = useNavigate();
  const { cards } = useTypedSelector((state) => state.flashcard);
  const { settings } = useTypedSelector((state) => state.training);
  const { setTrainingCard } = useActions();

  const startTrainingHandle = () => {
    setTrainingCard(shuffleArray(cards, settings.maxCards));
    navigate(TRAINING_PATH);
  };

  return (
    <Section sticky>
      <SectionHeader title="Мои карточки" className={styles.header}>
        <Button
          clickHandler={startTrainingHandle}
          type="primary"
          disabled={cards.length === 0}
          className={styles.button}
        >
          Начать изучение
        </Button>
      </SectionHeader>

      <Menu />

      <Outlet />
    </Section>
  );
};
