import React from 'react';

import { Button } from '../../UI/Button/Button';

interface IAddingButtonsProps {
  onCancel: () => void;
  onAdding: () => void;
}

export const AddingButtons = ({ onCancel, onAdding }: IAddingButtonsProps) => {
  return (
    <>
      <Button clickHandler={onCancel} type="secondary">
        Отменить
      </Button>

      <Button clickHandler={onAdding} type="primary">
        Добавить
      </Button>
    </>
  );
};
