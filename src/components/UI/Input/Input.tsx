import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

interface IInputProps {
  placeholder?: string;
  error?: boolean | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  type?: string;
  [rest: string]: any;
}

export const Input = ({
  placeholder = '',
  error,
  onChange,
  value,
  className = '',
  type = 'text',
  ...rest
}: IInputProps) => (
  <input
    type={type}
    onChange={onChange}
    value={value}
    className={cx(styles.input, className, {
      [styles.error]: error,
    })}
    placeholder={placeholder}
    {...rest}
  />
);
