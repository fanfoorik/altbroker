import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterDropdown from './dropdowns/FilterDropdown';
import BrokersDropdown from 'components/Filter/dropdowns/BrokersDropdown';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';
import preventOverScroll from 'utils/preventOverScroll';

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
    // const { isActive, items, selectedItems } = nextProps;
    // const { all: stateItems } = this.state.items;
    //
    // if (isActive) {
    //   this.setState({ items: parseCheckObjects(stateItems, selectedItems, false) });
    // } else {
    //   this.setState({ items: parseCheckObjects(items, selectedItems, true) });
    // }
  }

  handleDropdownClose = () => {
    if (this.props.searchValue) this.props.handleSearch('PROPERTY_BROKER', '');
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      items,
      onChange,
      onDropdownClose,

      isActive,
      triggerDropdown,
      changeFilterItem,
      resetSection,
      searchValue,
      handleSearch,
    } = this.props;

    // const { items } = this.state;
    // const filteredItems = filterItems(searchValue, items.all);
    // const value = !!items.checked.length && (items.checked[0].SHOT_NAME || items.checked[0].NAME || 'Нет имени/названия');
    // const more = items.checked.length > 1 && `и еще ${items.checked.length - 1}`;

    const value = items.filter(item => item.checked);

    return (
      <div>
        <Filter.Trigger
          label="Брокер"
          value={value[0] && (value[0].SHOT_NAME || value[0].NAME || 'Нет имени')}
          onClick={triggerDropdown}
          more={value.length > 1 && `и еще ${value.length - 1}`}
        />
        {isActive &&
          <Dropdown triggerDropdown={triggerDropdown} onClose={() => onDropdownClose('ALL_BROKER')} >
            <FilterDropdown>

              <FilterDropdown.Column>
                <FormSearch value={searchValue} autoFocus onChange={event => handleSearch('PROPERTY_BROKER', event.target.value)} />
                <div className="form-block" ref={node => preventOverScroll(node)}>
                  <div className="form-checkboxes">
                    {
                      items.map((item) => {
                        const { ID: id, checked, NAME, SHOT_NAME, position } = item;

                        return (
                          <Checkpoint
                            checked={checked}
                            className="form-checkboxes__item"
                            id={id}
                            key={`brokers-${id}`}
                            label={SHOT_NAME || NAME || 'Нет имени'}
                            name="ALL_BROKER"
                            onChange={onChange}
                            data-positon={position}
                          />
                        );
                      })
                    }
                  </div>
                </div>

                <FormControls
                  left={
                    <span
                      className="form-control form-control_reset"
                      // onClick={resetSection}
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

              </FilterDropdown.Column>

            </FilterDropdown>

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

// Brokers.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
//   selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
//   changeFilterItem: PropTypes.func.isRequired,
//   searchValue: PropTypes.string.isRequired,
//   handleSearch: PropTypes.func.isRequired,
//   resetSection: PropTypes.func.isRequired,
//   submitOnDropdownClose: PropTypes.func.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   triggerDropdown: PropTypes.func.isRequired,
// };

export default DropdownTriggerHOC(Brokers);
