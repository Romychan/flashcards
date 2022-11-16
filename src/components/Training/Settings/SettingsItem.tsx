import cx from 'classnames';
import React from 'react';

import styles from './Setting.module.scss';

interface ISettingsItemProps {
  name: string;
  children: React.ReactNode;
  type?: string;
}

export const SettingsItem = ({
  name,
  children,
  type = '',
}: ISettingsItemProps) => {
  return (
    <div className={cx(styles.item, styles[type])}>
      <h3 className={cx(styles.name, 'suptitle')}>{name}</h3>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
