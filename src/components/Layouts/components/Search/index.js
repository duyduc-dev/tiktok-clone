import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import Wrapper from '~/components/Wrapper';
import Account from '~/components/Account';
import { IconClose, IconLoadingInput, IconSearch } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import { searchService } from '~/service';

const cx = classnames.bind(styles);

const Search = () => {
  const [searchValueInput, setSearchValueInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isShowSearchResult, setIsShowSearchResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleClickClose = (e) => {
    setIsShowSearchResult(false);
    setSearchValueInput('');
    inputRef.current.focus();
  };

  const handleInputValue = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValueInput(e.target.value);
    }
  };

  const debounceValue = useDebounce(searchValueInput, 800);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setIsShowSearchResult(false);
      setSearchResult([]);
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const data = await searchService(debounceValue);
        setIsShowSearchResult(true);
        setSearchResult(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [debounceValue]);

  return (
    <HeadlessTippy
      visible={isShowSearchResult && searchResult.length > 0}
      interactive
      placement="bottom"
      onClickOutside={(e) => setIsShowSearchResult(false)}
      render={(attr) => (
        <div className={cx('search-result')} tabIndex="-1" {...attr}>
          <Wrapper>
            <h5 className={cx('header-tippy')}>Accounts</h5>
            {searchResult.map((user) => (
              <Account
                key={user.id}
                avatar={user.avatar}
                nickname={user.nickname}
                username={user.full_name}
                tick={user.tick}
              />
            ))}
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
          onChange={handleInputValue}
          onFocus={(e) => setIsShowSearchResult(true)}
        />
        {searchValueInput && !loading && (
          <IconClose className={cx('icon-input')} onClick={handleClickClose} />
        )}
        {loading && <IconLoadingInput className={cx('icon-input', 'icon-loading')} />}
        <div className={cx('wrap-icon-search')}>
          <IconSearch className={cx('icon-search')} />
        </div>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
