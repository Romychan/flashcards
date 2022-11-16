import React, { useState } from 'react';
import cx from 'classnames';

import { IFlashcard } from '../../../types/Flashcard';

import { FlashcardPlate } from './FlashcardPlate';

import styles from './Flashcard.module.scss';

interface IFlashcardProps {
  item: IFlashcard;
  isDragging?: React.MutableRefObject<boolean>;
  setIsFlipped?: (value: boolean) => void;
  className?: string;
}

export const Flashcard = ({
  item,
  isDragging,
  setIsFlipped,
  className = '',
}: IFlashcardProps) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);

    if (setIsFlipped) setIsFlipped(!flip);
  };

  return (
    <div
      className={cx(styles.wrapper, styles[className], {
        [styles.clicked]: flip,
      })}
      onClick={() => !isDragging?.current && handleFlip()}
    >
      <FlashcardPlate
        text={item.original.text}
        progress={item.progress}
        language={item.original.language}
        plate="front"
      />
      <FlashcardPlate
        text={item.translate.text}
        progress={item.progress}
        language={item.translate.language}
        plate="back"
      />
    </div>
  );
};
