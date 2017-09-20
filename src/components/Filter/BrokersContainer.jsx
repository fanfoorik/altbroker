import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import BrokersDropdown from 'components/Filter/dropdowns/BrokersDropdown';

import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';

import Filter from './Filter';
import Dropdown from './dropdowns/Dropdown';
import Icon from 'components/Icon';

class Brokers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        checked: [],
        all: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isActive, items, selectedItems } = nextProps;
    const { all: stateItems } = this.state.items;

    if (isActive) {
      this.setState({ items: parseCheckObjects(stateItems, selectedItems, false) });
    } else {
      this.setState({ items: parseCheckObjects(items, selectedItems, true) });
    }
  }

  handleDropdownClose = () => {
    if (this.props.searchValue) this.props.handleSearch('PROPERTY_BROKER', '');
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      isActive,
      triggerDropdown,
      changeFilterItem,
      resetSection,
      searchValue,
      handleSearch,
    } = this.props;

    const { items } = this.state;
    const filteredItems = filterItems(searchValue, items.all);
    const value = !!items.checked.length && (items.checked[0].SHOT_NAME || items.checked[0].NAME || 'Нет имени/названия');
    const more = items.checked.length > 1 && `и еще ${items.checked.length - 1}`;

    return (
      <div>
        <Filter.Trigger
          label="Брокер"
          value={value}
          onClick={triggerDropdown}
          more={more}
        />
        {
          isActive &&
          <Dropdown triggerDropdown={triggerDropdown} >
            <FormSearch value={searchValue} autoFocus onChange={event => handleSearch('PROPERTY_BROKER', event.target.value)} />
            rtyuiop <br />
            <FormControls
              left={
                <span
                className="form-control form-control_reset"
                onClick={resetSection}
                role="button"
                tabIndex="0"
                data-name="PROPERTY_BROKER"
              >Сбросить</span>}
              right={(
                <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
                  <Icon className="icon__close" icon="close" width={15} height={15} />
                </div>
              )}
            />
          </Dropdown>
          // <BrokersDropdown
          //   items={filteredItems}
          //   changeFilterItem={changeFilterItem}
          //   searchValue={searchValue}
          //   handleSearch={handleSearch}
          //   resetSection={resetSection}
          //   triggerDropdown={triggerDropdown}
          //   onClose={this.handleDropdownClose}
          // />
        }
      </div>
    );
  }
}

Brokers.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Brokers);
