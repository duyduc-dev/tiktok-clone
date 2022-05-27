import classnames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import { IconArrowLeft } from '../Icons';

const cx = classnames.bind(styles);

const defaultFN = () => {};

const Menu = ({ children, hideOnClick = false, list = [], onChange = defaultFN }) => {
  const [history, setHistory] = useState([{ data: list }]);
  const currentMenu = history[history.length - 1];

  return (
    <Tippy
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      delay={[0, 500]}
      onHide={(e) => setHistory((prev) => prev.slice(0, 1))}
      render={(attr) => (
        <Wrapper {...attr} className={cx('menu-settings')}>
          {history.length > 1 && (
            <header className={cx('header-menu')}>
              <div
                className={cx('icon-cancel')}
                onClick={(e) => setHistory((prev) => prev.slice(0, prev.length - 1))}
              >
                <IconArrowLeft />
              </div>
              <span className={cx('header-title')}>{currentMenu.title}</span>
            </header>
          )}
          <div className={cx('menu-scrollbar')}>
            {currentMenu.data.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                to={item.to}
                separate={item.separate}
                onClick={(e) => {
                  if (item.children) {
                    setHistory((prev) => [...prev, item.children]);
                  } else {
                    onChange(item);
                  }
                }}
              />
            ))}
          </div>
        </Wrapper>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
