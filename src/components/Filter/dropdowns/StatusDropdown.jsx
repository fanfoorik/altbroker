import PropTypes from 'prop-types';
import React from 'react';

import Checkpoint from 'components/ui/Checkpoint';
import DropdownHOC from 'components/HOC/DropdownHOC';
import FormControls from 'components/ui/FormControls';
import Icon from 'components/Icon';

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

      <FormControls
        onClose={triggerDropdown}
        left={(
          <span
            key="close-trigger"
            className="form-control form-control_reset"
            onClick={resetSection}
            role="button"
            tabIndex="0"
            data-name="PROPERTY_STATUS_OBJ"
          >Сбросить</span>
        )}
        right={(
          <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
            <Icon className="icon__close" icon="close" width={15} height={15} />
          </div>
        )}
      />
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
