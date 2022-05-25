import classnames from 'classnames/bind';

import styles from './Wrapper.module.scss';

const cx = classnames.bind(styles);

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
