import PropTypes from 'prop-types';
import React from 'react';


import preventOverScroll from 'utils/preventOverScroll';
import DropdownHOC from 'components/HOC/DropdownHOC';

import FormSearch from 'components/ui/FormSearch';
import FormControls from 'components/ui/FormControls';
import Checkpoint from 'components/ui/Checkpoint';

function SubwayDropdown(props) {
  const {
    items,
    changeFilterItem,
    resetSection,
    handleSearch,
    searchValue,
    triggerDropdown
  } = props;

  return (
    <div className="form-dropdown">
      <FormSearch autoFocus value={searchValue} onChange={event => handleSearch('PROPERTY_METRO_NEW', event.target.value)} />

      <div className="form-block" ref={node => preventOverScroll(node)}>
        <div className="form-checkboxes">
          {
            items.map((item) => {
              const { ID: id, name, checked } = item;
              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  onChange={changeFilterItem}
                  className="form-checkboxes__item"
                  checked={checked}
                  label={name}
                  name="PROPERTY_METRO_NEW"
                />
              );
            })
          }
        </div>
      </div>

      <FormControls onReset={resetSection} onClose={triggerDropdown} name="PROPERTY_METRO_NEW" />

    </div>
  );
}

SubwayDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownHOC(SubwayDropdown);
