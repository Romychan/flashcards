export const RU_LANGUAGE = {
  required: {
    value: true,
    message: 'Это поле обязательное',
  },
  minLength: {
    value: 1,
    message: 'Минимальное количество символов - 1',
  },
  maxLength: {
    value: 128,
    message: 'Максимальное количество символов - 128',
  },
  pattern: {
    value: /^[\p{Script=Cyrl}\p{P}\s]*$/u,
    message: 'Введите только русские символы',
  },
};

export const EN_LANGUAGE = {
  required: {
    value: true,
    message: 'Это поле обязательное',
  },
  minLength: {
    value: 1,
    message: 'Минимальное количество символов - 1',
  },
  maxLength: {
    value: 128,
    message: 'Максимальное количество символов - 128',
  },
  pattern: {
    value: /^[\p{Script=Latin}\p{P}\s]*$/u,
    message: 'Введите только английский символы',
  },
};
