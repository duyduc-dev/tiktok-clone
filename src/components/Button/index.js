import classnames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = React.forwardRef(
  (
    {
      primary = false,
      outline = false,
      border = false,
      size = false,
      to,
      href,
      className,
      children,
      onClick,
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
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
      outline,
      border,
      [className]: className,
      [_size]: _size,
    });

    return (
      <Component ref={ref} className={classes} {..._props}>
        {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
        <span className={cx('content')}>{children}</span>
        {iconRight && <span className={cx('icon')}>{iconRight}</span>}
      </Component>
    );
  }
);
Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Button;
