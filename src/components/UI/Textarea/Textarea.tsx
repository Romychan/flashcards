import React from 'react';
import cx from 'classnames';

import styles from '../Input/Input.module.scss';

interface ITextareaProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  error?: boolean;
  className?: string;
  [x: string]: any;
}

export const Textarea = ({
  placeholder = '',
  onChange,
  value,
  error,
  className = '',
  ...rest
}: ITextareaProps) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      className={cx(styles.textarea, className, {
        [styles.error]: error,
      })}
      placeholder={placeholder}
      {...rest}
    />
  );
};
