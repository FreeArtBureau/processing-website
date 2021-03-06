import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import classnames from 'classnames';
import grid from '../styles/grid.module.css';
import css from './SearchBar.module.css';

import SearchIcon from '../images/search-icon.svg';

const SearchBar = ({ className, size }) => {
  const intl = useIntl();
  const [searchTerm, setSearchTerm] = useState();

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onKeyEnter = (e) => {
    if (e.key === 'Enter') {
      window.open(
        'https://www.google.com/search?as_sitesearch=processing.org&as_q=' +
          e.target.value,
        '_blank'
      );
    }
  };

  return (
    <div
      className={classnames(
        { [className]: className },
        grid.col,
        { [css.large]: size === 'large' },
        css.root
      )}>
      {size === 'large' ? (
        <input
          className={css.input}
          type="text"
          value={searchTerm || ''}
          onChange={onChangeHandler}
          onKeyDown={onKeyEnter}
          placeholder={intl.formatMessage({ id: 'search' })}
        />
      ) : (
        <SearchIcon />
      )}
    </div>
  );
};

export default SearchBar;
