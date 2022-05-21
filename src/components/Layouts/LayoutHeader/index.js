import classnames from 'classnames/bind';

import Header from '../components/Header';
import styles from './LayoutHeader.module.scss';

const cx = classnames.bind(styles);

function LayoutHeader({ children }) {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>{children}</div>
    </>
  );
}

export default LayoutHeader;
