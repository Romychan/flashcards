import React from 'react';
import cx from 'classnames';

import styles from './DonutChart.module.scss';

interface IDonutChartProps {
  radius?: number;
  segments: number;
  progress: number;
  size?: number;
  className?: string;
  completedElement?: React.ReactNode;
}

export const DonutChart = ({
  radius = 80,
  segments,
  progress,
  size = 180,
  className = '',
  completedElement,
}: IDonutChartProps) => {
  const circumference = 2 * 3.14 * radius;
  const percentage = (100 / segments) * progress;
  const strokeLength = (circumference / 100) * percentage;

  if (progress === segments && completedElement) {
    return (
      <div className={cx(styles.completed, className)}>{completedElement}</div>
    );
  }

  return (
    <div className={cx(styles.chart, className)}>
      <svg viewBox="0 0 180 180" width={size} height={size}>
        <circle
          className={styles.circle}
          fill="none"
          cx="90"
          cy="90"
          r={radius}
        />
        <circle
          className={styles.progress}
          strokeDasharray={`${strokeLength},${circumference}`}
          strokeLinecap="round"
          fill="none"
          cx="90"
          cy="90"
          r={radius}
        />
      </svg>
    </div>
  );
};
