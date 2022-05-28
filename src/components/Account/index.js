import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Account.module.scss';
import Image from '../Image';
import { IconTick } from '../Icons';

const cx = classnames.bind(styles);

const Account = ({ avatar, nickname, username, tick = false }) => {
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={avatar} alt={nickname} />
      <div className={cx('user')}>
        <h5 className={cx('username')}>
          <p>{username}</p>
          {tick && <IconTick />}
        </h5>
        <p className={cx('nickname')}>{nickname}</p>
      </div>
    </Link>
  );
};

Account.propTypes = {
  avatar: PropTypes.string,
  nickname: PropTypes.string,
  username: PropTypes.string,
  tick: PropTypes.bool,
};

export default Account;
