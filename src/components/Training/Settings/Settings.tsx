import React from 'react';

import { TRAINING_MODE } from '../../../utils/constants/training';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { SettingsItem } from './SettingsItem';
import { SegmentControl } from '../../UI/SegmentControl/SegmentControl';
import { SwitchToggle } from '../../UI/SwitchToggle/SwitchToggle';

import styles from './Setting.module.scss';

export const Settings = () => {
  const { settings } = useTypedSelector((state) => state.training);
  const { setAutoVoice, setMaxCards } = useActions();

  const defaultSegmentValue =
    settings.maxCards < TRAINING_MODE[0].value
      ? 0
      : TRAINING_MODE.findIndex(
          (element) => element.value === settings.maxCards,
        );

  return (
    <div className={styles.settings}>
      <SettingsItem name="Автовоспроизведение" type="simple">
        <SwitchToggle
          isOn={settings.autoVoice}
          onClick={() => setAutoVoice(!settings.autoVoice)}
        />
      </SettingsItem>

      <SettingsItem name="Количество карточек" type="column">
        <SegmentControl
          items={TRAINING_MODE}
          initialIndex={defaultSegmentValue}
          onChange={(value) => setMaxCards(value)}
        />
      </SettingsItem>
    </div>
  );
};
