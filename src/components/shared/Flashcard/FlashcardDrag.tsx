import React, { useRef, useState } from 'react';
import {
  motion,
  useAnimation,
  useTransform,
  useMotionValue,
  PanInfo,
} from 'framer-motion';

import { IFlashcard } from '../../../types/Flashcard';

import { Flashcard } from './Flashcard';

import styles from './Flashcard.module.scss';

interface IFlashcardDragProps {
  order: number;
  item: IFlashcard;
  onAction: (position: number, id: number | string) => void;
}

export const FlashcardDrag = ({
  order,
  item,
  onAction,
}: IFlashcardDragProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isDragging = useRef(false);
  const animControls = useAnimation();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-250, 250], [-10, 10]);
  const background = useTransform(
    y,
    [-350, 0, 350],
    [
      'linear-gradient(180deg, #9BE15D 0%, #00E3AE 100%)',
      isFlipped
        ? 'linear-gradient(180deg, #F2F7FA 0%, #F2F7FA 100%)'
        : 'linear-gradient(180deg, #040303 0%, #040303 100%)',
      'linear-gradient(180deg, #F78CA0 0%, #FD868C 100%)',
    ],
  );

  const onDragEndHandler = (info: PanInfo) => {
    setTimeout(() => {
      isDragging.current = false;
    }, 100);

    if (Math.abs(info.offset.y) <= 70) {
      animControls.start({ x: 0, y: 0 });
    } else {
      animControls
        .start({
          y: info.offset.y < 0 ? -700 : 700,
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => onAction(info.offset.y, item.id));
    }
  };

  return (
    <motion.div
      drag
      style={{ x, y, rotate, background, zIndex: order }}
      className={styles.card}
      whileTap={{ cursor: 'grabbing' }}
      animate={animControls}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      onDragStart={() => (isDragging.current = true)}
      onDragEnd={(_event, info) => onDragEndHandler(info)}
    >
      <div className={styles.background}></div>
      <Flashcard
        item={item}
        isDragging={isDragging}
        setIsFlipped={setIsFlipped}
      />
    </motion.div>
  );
};
