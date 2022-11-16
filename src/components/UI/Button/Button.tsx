import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  children?: React.ReactNode;
  type?: string;
  className?: string;
  disabled?: boolean;
  clickHandler?: () => void;
}

export const Button = ({
  type = '',
  className = '',
  clickHandler,
  children,
  disabled,
}: IButtonProps) => {
  return (
    <button
      className={cx(styles.button, className, styles[type], {
        [styles.disabled]: disabled,
      })}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
