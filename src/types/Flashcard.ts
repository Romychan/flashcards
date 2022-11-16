export interface IFlashcard {
  id: number;
  original: ICardText;
  translate: ICardText;
  progress: number;
}

export interface ICardText {
  text: string;
  language: string;
}
