import React from 'react';
import cx from 'classnames';

import { useSpeechSynthesis } from '../../../hooks/useSpeechSynthesis';

import { Icon } from '../Icon/Icon';

import styles from './Speech.module.scss';

interface ISpeechProps {
  text?: string;
  language: string;
  content?: string;
  className?: string;
}

export const Speech = ({
  text = '',
  language,
  content,
  className = '',
}: ISpeechProps) => {
  const { speak, cancel, isPlaying } = useSpeechSynthesis();

  const onClickHandle = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (isPlaying) {
      cancel();
    } else {
      speak(text, language);
    }
  };

  return (
    <div onClick={onClickHandle} className={cx(className, styles.speech)}>
      <Icon name="audio" />
      {content ? (
        <span className={cx('text', styles.text)}>{content}</span>
      ) : null}
    </div>
  );
};
