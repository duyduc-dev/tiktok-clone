import classnames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { IconClose, IconLoadingInput, IconSearch } from '~/components/Icon';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo-tiktok')}>
          <Image src={images.logo} alt="tiktok" />
        </div>
        <div className={cx('search')}>
          <input className={cx('input-search')} placeholder="Search accounts and videos" />
          {/* <IconClose />
          <IconLoadingInput /> */}
          <div className={cx('wrap-icon-search')}>
            <IconSearch className={cx('icon-search')} />
          </div>
        </div>
        <div className={cx('action')}>
          <Button primary to="/upload" size="medium">
            Log in
          </Button>
          {/* <Button primary>Log in</Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
