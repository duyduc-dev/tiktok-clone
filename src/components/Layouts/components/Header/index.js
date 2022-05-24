import { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import {
  Icon3Dot,
  IconClose,
  IconLoadingInput,
  IconPlus,
  IconSearch,
} from '~/components/Icons';
import Button from '~/components/Button';
import Wrapper from '~/components/Wrapper';
import Account from '~/components/Account';
import Menu from '~/components/Menu';

const cx = classnames.bind(styles);

function Header() {
  const [searchValueInput, setSearchValueInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isShowSearchResult, setisShowSearchResult] = useState(false);

  const inputRef = useRef();

  const handleClickClose = (e) => {
    setSearchValueInput('');
    inputRef.current.focus();
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Button to={'/'} className={cx('logo-tiktok')}>
          <Image src={images.logo} alt="tiktok" />
        </Button>
        <HeadlessTippy
          visible={isShowSearchResult && searchResult.length > 0}
          interactive
          placement="bottom"
          render={(attr) => (
            <div tabIndex="-1" {...attr}>
              <Wrapper>
                <h5 className={cx('header-tippy')}>Accounts</h5>
                <Account />
                <Account />
                <Account />
              </Wrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              ref={inputRef}
              className={cx('input-search')}
              placeholder="Search accounts and videos"
              value={searchValueInput}
              onChange={(e) => setSearchValueInput(e.target.value)}
            />
            {searchValueInput && (
              <IconClose
                className={cx('icon-input')}
                onClick={handleClickClose}
              />
            )}
            {/* <IconLoadingInput className={cx('icon-input')} /> */}
            <div className={cx('wrap-icon-search')}>
              <IconSearch className={cx('icon-search')} />
            </div>
          </div>
        </HeadlessTippy>
        <div className={cx('action')}>
          <Button
            className={cx('btn-action')}
            border
            to="/upload"
            size="medium"
            iconLeft={<IconPlus />}
          >
            Upload
          </Button>
          <Button className={cx('btn-action')} primary size="medium">
            Log in
          </Button>
          <Menu>
            <button className={cx('btn-menu')}>
              <Icon3Dot />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
