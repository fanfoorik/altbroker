import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import BrokersDropdown from 'components/Filter/dropdowns/BrokersDropdown';

function Brokers(props) {
  const {
    isActive,
    triggerDropdown,
    brokers,
    selectedBrokers,
    selectBroker,
  } = props;

  return (
    <div className="filter__cell filter__cell_hover">
      <div
        className={`filter-trigger ${selectedBrokers.length ? 'filter-trigger_binded' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">Брокер</span>
        {
          selectedBrokers.length > 1 &&
          <span className="filter-trigger__more">и еще {selectedBrokers.length - 1}</span>
        }
        {
          !!selectedBrokers.length &&
          <span className="filter-trigger__value">
            {
              brokers.map((item) => {
                const {
                  ID: id,
                  NAME: name,
                  SHOT_NAME: shortName,
                } = item;

                if (id === selectedBrokers[0]) return shortName || name || 'Безымянный';
                return false;
              })
            }
          </span>
        }
      </div>
      {
        isActive &&
        <BrokersDropdown
          brokers={brokers}
          selectBroker={selectBroker}
          selectedBrokers={selectedBrokers}
          triggerDropdown={triggerDropdown}
        />
      }
    </div>
  );
}

Brokers.propTypes = {
  brokers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  selectedBrokers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectBroker: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Brokers);
