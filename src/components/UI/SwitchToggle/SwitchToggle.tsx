import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';

import styles from './SwitchToggle.module.scss';

interface ISwitchToggleProps {
  isOn?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SwitchToggle = ({
  isOn = false,
  onClick,
  className = '',
}: ISwitchToggleProps) => {
  return (
    <div
      className={cx(styles.switch, className, {
        [styles.on]: isOn,
      })}
      onClick={onClick}
    >
      <motion.div
        animate
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        className={styles.handle}
        layoutId="SwitchToggle"
      ></motion.div>
    </div>
  );
};
