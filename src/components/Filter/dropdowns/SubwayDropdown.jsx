import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import DropdownHOC from 'components/HOC/DropdownHOC';
import Checkpoint from 'components/ui/Checkpoint';

function SubwayDropdown(props) {
  const { subways, selectedSubways, selectSubway } = props;

  return (
    <div className="form-dropdown">
      <div className="form-search">
        <input className="form-search__input input" placeholder="Поиск" type="text" />
        <button type="submit" className="form-search__submit">
          <Icon className="form-search__icon" icon="lens" width="15" height="15" />
        </button>
      </div>
      <div className="form-block">
        <div className="form-checkboxes">
          {
            subways.map((item) => {
              const { ID: id, NAME: name } = item;
              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  onChange={selectSubway}
                  className="form-checkboxes__item"
                  checked={selectedSubways.indexOf(id) !== -1}
                  label={name}
                />
              );
            })
          }
        </div>
      </div>

      <div className="form-controls">
        <span className="form-controls__reset">Сбросить</span>
        <div className="form-controls__actions">
          <button type="submit" className={'form-controls__actions_item disabled'}>
            <Icon
              icon="check"
              width={20}
              height={15}
            />
          </button>
          <div className="form-controls__actions_item" role="button" tabIndex="0">
            <Icon
              className="icon__close"
              icon="close"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

SubwayDropdown.propTypes = {
  subways: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedSubways: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectSubway: PropTypes.func.isRequired,
};

export default DropdownHOC(SubwayDropdown);
