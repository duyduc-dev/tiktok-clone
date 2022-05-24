import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { forwardRef } from 'react';

import styles from './Menu.module.scss';
import Button from '../Button';
import { Icon3Dot } from '../Icons';
import Wrapper from '../Wrapper';

const cx = classnames.bind(styles);

const Menu = ({ children }) => {
  return <Tippy>{children}</Tippy>;
};

export default Menu;
