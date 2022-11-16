import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { DEFAULT_PATH } from '../../../utils/constants/routes';

import { useOutsideClick } from '../../../hooks/useOutsideClick';

import { Icon } from '../../UI/Icon/Icon';
import { Popup } from '../../UI/Popup/Popup';
import { Settings } from '../Settings/Settings';

import styles from './Action.module.scss';

export const ActionList = () => {
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(menuRef, false);

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div className={styles.action}>
      <Link className={`text text_small ${styles.item}`} to={DEFAULT_PATH}>
        <Icon name="back" size={20} color="#9ca3af" />
        Назад
      </Link>

      <Popup
        ref={menuRef}
        title="Настройки"
        isActive={isActive}
        buttonElement={
          <button
            className={`text text_small ${styles.item}`}
            onClick={onClick}
          >
            <Icon name="setting" size={20} color="#9ca3af" />
            Настройки
          </button>
        }
      >
        <Settings />
      </Popup>
    </div>
  );
};
