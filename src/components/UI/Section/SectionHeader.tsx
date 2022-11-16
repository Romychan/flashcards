import React from 'react';
import cx from 'classnames';

import styles from './Section.module.scss';

interface ISectionHeader {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({
  title,
  children,
  className = '',
}: ISectionHeader) => (
  <div className={cx(styles.header, className)}>
    <h2 className={cx(styles.title, 'title')}>{title}</h2>
    {children}
  </div>
);
