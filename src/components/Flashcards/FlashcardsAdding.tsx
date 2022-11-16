import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AddingCardValues } from '../../types/FormValues/AddingCard';

import { FLASHCARDS_DEFAULT_VALUES } from '../../utils/constants/flashcard';

import { useActions } from '../../hooks/useActions';
import { useModal } from '../../hooks/useModal';

import { Modal } from '../UI/Modal/Modal';
import { AddCard } from './AddCard/AddCard';
import { AddingButtons } from './Adding/AddingButtons';
import { AddingInputs } from './Adding/AddingInputs';

export const FlashcardsAdding = () => {
  const { control, handleSubmit, reset } = useForm<AddingCardValues>({
    mode: 'onChange',
    defaultValues: FLASHCARDS_DEFAULT_VALUES,
  });
  const { isVisible, toggleVisible, transition } = useModal();
  const { addCard } = useActions();

  const onAddCard: SubmitHandler<AddingCardValues> = (data) => {
    addCard(data);
    reset();
    toggleVisible();
  };

  const resetWindow = () => {
    toggleVisible();
    reset();
  };

  return (
    <>
      <AddCard text="Добавить карточку" onAction={toggleVisible} />

      <Modal
        title="Добавление карточки"
        icon="addModal"
        text="Введите английское слово и его перевод на русском"
        footer={
          <AddingButtons
            onCancel={resetWindow}
            onAdding={handleSubmit(onAddCard)}
          />
        }
        visible={isVisible}
        transition={transition}
        onClose={resetWindow}
        content={<AddingInputs control={control} />}
      />
    </>
  );
};
