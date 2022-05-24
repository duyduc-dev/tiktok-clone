import classnames from 'classnames/bind';

import styles from './Account.module.scss';
import Image from '../Image';

const cx = classnames.bind(styles);

const Account = () => {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653570000&x-signature=1%2BkcZuDzpCq6U3kiEZo%2FDjcr1iU%3D"
        alt="hoaa"
      />
      <div className={cx('user')}>
        <h5 className={cx('username')}>Nguyen Van A</h5>
        <p className={cx('nickname')}>nguyenvana</p>
      </div>
    </div>
  );
};

export default Account;
