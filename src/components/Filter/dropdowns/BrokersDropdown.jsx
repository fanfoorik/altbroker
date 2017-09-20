import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';
import DropdownHOC from 'components/HOC/DropdownHOC';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';
import Icon from 'components/Icon';

function BrokersDropdown(props) {
  const {
    items,
    changeFilterItem,
    searchValue,
    handleSearch,
    resetSection,
    triggerDropdown,
    selectCheckGroup,
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
        onClose={triggerDropdown}
        left={[
          <div
            className="form-control"
            key="check-all-brokers"
            onClick={() => selectCheckGroup(items, 'PROPERTY_BROKER')}
            role="button"
            tabIndex="0"
          >Все</div>,
          <span
            key="close-trigger-brokers"
            className="form-control form-control_reset"
            onClick={resetSection}
            role="button"
            tabIndex="0"
            data-name="PROPERTY_BROKER"
          >Сбросить</span>,
        ]}
        right={(
          <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
            <Icon className="icon__close" icon="close" width={15} height={15} />
          </div>
        )}
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
  selectCheckGroup: PropTypes.func.isRequired,
};

export default DropdownHOC(BrokersDropdown);
