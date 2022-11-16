import React from 'react';
import { Link } from 'react-router-dom';

import { DEFAULT_PATH } from '../../../utils/constants/routes';
import { shuffleArray } from '../../../utils/functions/shuffleArray';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { Button } from '../../UI/Button/Button';

import styles from './Result.module.scss';

export const ResultButtons = () => {
  const { cards } = useTypedSelector((state) => state.flashcard);
  const { settings } = useTypedSelector((state) => state.training);
  const { setTrainingCard } = useActions();

  return (
    <div className={styles.buttons}>
      {cards.length !== 0 ? (
        <Button
          type="primary"
          clickHandler={() =>
            setTrainingCard(shuffleArray(cards, settings.maxCards))
          }
          className={styles.return}
        >
          Повторить
        </Button>
      ) : (
        ''
      )}

      <Link to={DEFAULT_PATH} className={styles.button}>
        Вернуться на главную
      </Link>
    </div>
  );
};
