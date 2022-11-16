/* eslint-disable react/display-name */
import React from 'react';
import cx from 'classnames';

import styles from './Popup.module.scss';

interface IPopupProps {
  children: React.ReactNode;
  title?: string;
  isActive: boolean;
  buttonElement?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export const Popup = React.forwardRef<HTMLDivElement, IPopupProps>(
  ({ children, title = '', isActive, buttonElement, className = '' }, ref) => {
    return (
      <>
        <div ref={ref} className={styles.popup}>
          {buttonElement}

          <div
            className={cx(styles.content, className, {
              [styles.active]: isActive,
            })}
          >
            <div className={styles.scroll}>
              <div className={styles.header}>
                <h1 className={cx(styles.title, 'subtitle')}>{title}</h1>
              </div>
              {children}
            </div>
          </div>
        </div>
        <div
          className={cx(styles.background, {
            [styles.active]: isActive,
          })}
        ></div>
      </>
    );
  },
);
