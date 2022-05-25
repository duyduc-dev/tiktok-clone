import { useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Icon3Dot, IconInbox, IconMessage, IconPlus } from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import { MENU_LOGOUT, MENU_USER_LOGIN } from '~/configs/menuHeader';
import Search from '../Search';
import routesConfig from '~/configs/routes';

const cx = classnames.bind(styles);

function Header() {
  const [isUserLogIn, setIsUserLogIn] = useState(true);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.HOME} className={cx('logo-tiktok')}>
          <Image src={images.logo} alt="tiktok" />
        </Link>
        <Search />
        <div className={cx('action')}>
          <Button className={cx('btn-action')} border size="medium" iconLeft={<IconPlus />}>
            Upload
          </Button>
          {!isUserLogIn ? (
            <Button className={cx('btn-action')} primary size="medium">
              Log in
            </Button>
          ) : (
            <>
              <Tippy delay={[0, 20]} content="Message">
                <Button className={cx('btn-action')}>
                  <IconMessage />
                </Button>
              </Tippy>
              <Tippy delay={[0, 20]} content="Inbox">
                <Button className={cx('btn-action')}>
                  <IconInbox />
                  <span className={cx('quantity-nor')}>9+</span>
                </Button>
              </Tippy>
            </>
          )}

          <Menu list={isUserLogIn ? MENU_USER_LOGIN : MENU_LOGOUT}>
            {isUserLogIn ? (
              <Button className={cx('btn-menu')}>
                <Image
                  className={cx('avatar')}
                  src={
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bcb64245911b9f94ef29e2a2e785f20d~c5_720x720.jpeg?x-expires=1653624000&x-signature=tlBmQkrNQsNVfNRvUZydqEAWuvI%3D'
                  }
                  alt="duyduc"
                />
              </Button>
            ) : (
              <Button className={cx('btn-menu')}>
                <Icon3Dot />
              </Button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
