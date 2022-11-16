import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Input } from './Input';
import { Textarea } from '../Textarea/Textarea';

import styles from './InputForm.module.scss';

interface IInputFormProps {
  control: Control<any>;
  name: string;
  rules?: any;
  label?: string;
  className?: string;
  type?: string;
  [rest: string]: any;
}

export const InputForm = ({
  control,
  className = '',
  label,
  name,
  rules,
  type = 'input',
  ...rest
}: IInputFormProps) => (
  <div className={`${styles.form} ${className}`}>
    {label && <h4 className={`subtitle ${styles.form}`}>{label}</h4>}
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {type === 'input' ? (
            <Input
              error={!!error}
              onChange={onChange}
              value={value || ''}
              className={styles.input}
              {...rest}
            />
          ) : (
            <Textarea
              error={!!error}
              onChange={onChange}
              value={value || ''}
              className={styles.textarea}
              {...rest}
            />
          )}

          {error && (
            <p className={styles.error}>{error?.message || 'Ошибка'}</p>
          )}
        </>
      )}
    />
  </div>
);
