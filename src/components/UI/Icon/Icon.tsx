import React from 'react';

import IconsSVG from '../../../assets/img/general/icons.svg';

export interface IIcon {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon = ({
  name,
  color = '',
  size = 16,
  className = '',
}: IIcon) => (
  <svg
    className={`icon icon-${name} ${className}`}
    stroke={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
