import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = ({ primary = false, size = false, to, href, className, children, onClick, ...props }) => {
  let Component = 'button';
  const _props = {
    onClick,
    ...props,
  };

  if (to) {
    Component = Link;
    _props.to = to;
  } else if (href) {
    Component = 'a';
    _props.href = href;
  }
  let _size = false;

  if (size === 'small' || size === 'medium' || size === 'large') {
    _size = size;
  }

  const classes = cx('button-component', {
    primary,
    [_size]: _size,
  });

  return (
    <Component className={classes} {..._props}>
      <span>{children}</span>
    </Component>
  );
};

export default Button;
