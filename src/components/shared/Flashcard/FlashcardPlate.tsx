import React from 'react';

import { MAX_LEARNING_STEP } from '../../../utils/constants/flashcard';
import { resizeFontToFit } from './utils';

import { DonutChart } from '../../UI/DonutChart/DonutChart';
import { Speech } from '../../UI/Speech/Speech';
import { Icon } from '../../UI/Icon/Icon';

import styles from './Flashcard.module.scss';

interface IFlashcardPlateProps {
  text: string;
  language?: string;
  progress: number;
  plate?: string;
}

export const FlashcardPlate = ({
  text,
  language = 'en',
  progress,
  plate = 'front',
}: IFlashcardPlateProps) => {
  return (
    <div className={styles[plate]}>
      <Speech text={text} language={language} className={styles.audio} />

      <h2
        className={styles.name}
        style={{
          fontSize: text.length > 36 ? resizeFontToFit(text.length) : '',
        }}
      >
        {text}
      </h2>

      <div className={styles.info}>
        <p className={styles.language}>{language}</p>
        <DonutChart
          segments={MAX_LEARNING_STEP}
          progress={progress}
          className={styles.chart}
          size={32}
          completedElement={<Icon name="completed" />}
        />
      </div>
    </div>
  );
};
