import React, { useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

import styles from './SegmentControl.module.scss';

interface ISegmentControl {
  items: {
    label: number | string;
    value: number | string;
  }[];
  initialIndex?: number;
  onChange: (value: number | string) => void;
}

export const SegmentControl = ({
  items,
  initialIndex = 0,
  onChange,
}: ISegmentControl) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const onChangeIndex = (index: number) => {
    setCurrentIndex(index);
    onChange(items[index].value);
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            className={cx(styles.item, {
              [styles.selected]: isActive || index === currentIndex - 1,
            })}
            key={item.value}
          >
            <div onClick={() => onChangeIndex(index)} className={styles.button}>
              {isActive && (
                <motion.div
                  layoutId="SegmentControl"
                  className={styles.active}
                />
              )}
              <span className={styles.label}>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
