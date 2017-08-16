import React from 'react';
import Icon from 'components/Icon';

export default function FormSearch(props) {
  return (
    <div className="form-search">
      <input placeholder="Поиск" className="form-search__input input" type="text" {...props} />
      <span className="form-search__submit">
        <Icon className="form-search__icon" icon="lens" width="15" height="15" />
      </span>
    </div>
  );
}
