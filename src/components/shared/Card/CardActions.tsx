import React from 'react';

import { MAX_LEARNING_STEP } from '../../../utils/constants/flashcard';

import { DonutChart } from '../../UI/DonutChart/DonutChart';
import { Icon } from '../../UI/Icon/Icon';
import { Button } from '../../UI/Button/Button';

import styles from './Card.module.scss';

interface ICardActions {
  progress: number;
  onDelete: () => void;
}

export const CardActions = ({ progress, onDelete }: ICardActions) => {
  return (
    <div className={styles.actions}>
      <Button
        type="transparent"
        className={styles.delete}
        clickHandler={onDelete}
      >
        <Icon name="delete" className={styles.icon} />
        Удалить
      </Button>
      <DonutChart
        segments={MAX_LEARNING_STEP}
        progress={progress}
        className={styles.chart}
        size={32}
        completedElement={<Icon name="completed" />}
      />
    </div>
  );
};
