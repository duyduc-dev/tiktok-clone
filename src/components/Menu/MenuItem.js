import classnames from 'classnames/bind';
import Button from '../Button';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const MenuItem = ({ icon, title, to, separate = false, ...props }) => {
  return (
    <Button
      iconLeft={icon}
      to={to}
      className={cx('menu-item', {
        separate,
      })}
      {...props}
    >
      <h5>{title}</h5>
    </Button>
  );
};

export default MenuItem;
