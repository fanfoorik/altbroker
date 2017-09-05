import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';
import DropdownHOC from 'components/HOC/DropdownHOC';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';

function BrokersDropdown(props) {
  const {
    items,
    changeFilterItem,
    searchValue,
    handleSearch,
    resetSection,
    triggerDropdown,
  } = props;

  return (
    <div className="form-dropdown">

      <FormSearch value={searchValue} autoFocus onChange={event => handleSearch('PROPERTY_BROKER', event.target.value)} />

      <div className="form-block" ref={node => preventOverScroll(node)}>
        <div className="form-checkboxes">
          {
            items.map((item) => {
              const { ID: id, name, checked } = item;

              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  name="PROPERTY_BROKER"
                  onChange={changeFilterItem}
                  className="form-checkboxes__item"
                  checked={checked}
                  label={name}
                />
              );
            })
          }
        </div>
      </div>

      <FormControls
        // onReset={resetSection}
        onClose={triggerDropdown}
        left={[
          <span
            className="form-controls__reset"
            onClick={resetSection}
            role="button"
            tabIndex="0"
            data-name="PROPERTY_BROKER"
          >Сбросить</span>,
        ]}
        name="PROPERTY_BROKER"
      />
    </div>
  );
}

BrokersDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownHOC(BrokersDropdown);
