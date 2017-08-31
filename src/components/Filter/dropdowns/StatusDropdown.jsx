import PropTypes from 'prop-types';
import React from 'react';

import DropdownHOC from 'components/HOC/DropdownHOC';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';

function StatusDropdown(props) {
  const {
    items,
    selectedItems,
    changeFilterItem,
    resetSection,
    triggerDropdown,
  } = props;

  return (
    <div className="form-dropdown">

      <div className="form-block">
        <div className="form-checkboxes">
          {
            items.map((item) => {
              const { ID: id, VALUE: name, checked } = item;

              return (
                <Checkpoint
                  key={`status-${id}`}
                  id={id}
                  name="PROPERTY_STATUS_OBJ"
                  onChange={changeFilterItem}
                  className="form-checkboxes__item"
                  type="radio"
                  checked={checked}
                  label={name}
                />
              );
            })
          }
        </div>
      </div>

      <FormControls onReset={resetSection} onClose={triggerDropdown} name="PROPERTY_STATUS_OBJ" />
    </div>
  );
}

StatusDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.string.isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownHOC(StatusDropdown);
