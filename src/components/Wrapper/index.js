import classnames from 'classnames/bind';

import styles from './Wrapper.module.scss';

const cx = classnames.bind(styles);

const Wrapper = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

export default Wrapper;
