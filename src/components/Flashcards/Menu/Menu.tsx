import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { COMPLETE_PATH, LEARN_PATH } from '../../../utils/constants/routes';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './Menu.module.scss';

export const Menu = () => {
  const { cards, completed } = useTypedSelector((state) => state.flashcard);

  return (
    <div className={styles.menu}>
      <NavLink
        className={({ isActive }) =>
          cx('text', styles.link, { [styles.active]: isActive })
        }
        to={LEARN_PATH}
      >
        На изучении
        <span>{cards.length}</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cx('text', styles.link, { [styles.active]: isActive })
        }
        to={COMPLETE_PATH}
      >
        Изучены
        <span>{completed.length}</span>
      </NavLink>
    </div>
  );
};
