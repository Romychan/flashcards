import React from 'react';
import cx from 'classnames';

import styles from './Section.module.scss';

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  sticky?: boolean;
}

export const Section = ({
  children,
  sticky,
  className = '',
}: ISectionProps) => (
  <section
    className={cx(styles.section, className, {
      [styles.sticky]: sticky,
    })}
  >
    <div className="container">
      <div className={styles.container}>{children}</div>
    </div>
  </section>
);
