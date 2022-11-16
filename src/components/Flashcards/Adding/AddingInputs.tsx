import React from 'react';
import { Control } from 'react-hook-form';

import { AddingCardValues } from '../../../types/FormValues/AddingCard';

import { EN_LANGUAGE, RU_LANGUAGE } from './validate';

import { InputForm } from '../../UI/Input/InputForm';

import styles from './Adding.module.scss';

interface IAddingInputs {
  control: Control<AddingCardValues>;
}

export const AddingInputs = ({ control }: IAddingInputs) => {
  return (
    <form className={styles.container}>
      <InputForm
        control={control}
        name="original.text"
        placeholder="Слово или фраза на английском"
        minLength={1}
        maxLength={128}
        type="text"
        rules={EN_LANGUAGE}
      />
      <InputForm
        control={control}
        name="translate.text"
        placeholder="Перевод на русском"
        minLength={1}
        maxLength={128}
        type="text"
        rules={RU_LANGUAGE}
      />
    </form>
  );
};
