interface ITrainingSettings {
  autoVoice: boolean;
  maxCards: number;
}

export const DEFAULT_SETTINGS: ITrainingSettings = {
  autoVoice: true,
  maxCards: 5,
};

export const TRAINING_MODE = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
];
