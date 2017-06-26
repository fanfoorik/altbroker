import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import DropdownHOC from 'components/HOC/DropdownHOC';
import Checkpoint from 'components/ui/Checkpoint';

function BrokersDropdown(props) {
  const { brokers, selectedBrokers, selectBroker } = props;

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
            brokers.map((item) => {
              const {
                ID: id,
                NAME: name,
                SHOT_NAME: shortName,
              } = item;

              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  onChange={selectBroker}
                  className="form-checkboxes__item"
                  checked={selectedBrokers.indexOf(id) !== -1}
                  label={shortName || name || 'Безымянный'}
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

BrokersDropdown.propTypes = {
  brokers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedBrokers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectBroker: PropTypes.func.isRequired,
};

export default DropdownHOC(BrokersDropdown);
