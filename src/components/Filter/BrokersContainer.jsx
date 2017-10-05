import PropTypes from 'prop-types';
import React from 'react';
import { filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import Dropdown from 'components/Dropdown';

import FilterDropdown from './dropdowns/FilterDropdown';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';
import Icon from 'components/Icon';
import Filter from './Filter';

class BrokersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleDropdownClose = () => {
    if (this.state.search) this.setState({ search: '' });
    this.props.onDropdownClose('ALL_BROKER');
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const {
      items,
      onChange,
      isActive,
      triggerDropdown,
      checksSelectAll,
      checksReset,
      checkMyDepartment,
      checkMyself,
    } = this.props;

    const { search } = this.state;
    const filteredItems = filterItems(search, items);
    const val = items.filter(item => item.checked);
    const value = val[0] && (val[0].SHOT_NAME || val[0].NAME || 'Нет имени');
    const more = val.length > 1 && `и еще ${val.length - 1}`;

    return (
      <div>
        <Filter.Trigger
          label="Брокер"
          value={value}
          onClick={triggerDropdown}
          more={more}
        />
        {isActive &&
          <Dropdown triggerDropdown={triggerDropdown} onClose={this.handleDropdownClose}>
            <FilterDropdown>

              <FilterDropdown.Column>
                <FormSearch
                  autoFocus
                  onChange={this.handleSearch}
                  value={search}
                />
                <FilterDropdown.Scrollpane>
                  <div className="form-checkboxes">
                    {
                      filteredItems.map((item) => {
                        const { ID: id, checked, name, position } = item;

                        return (
                          <Checkpoint
                            checked={checked}
                            className="form-checkboxes__item"
                            id={id}
                            key={`brokers-${id}`}
                            label={name}
                            name="ALL_BROKER"
                            onChange={onChange}
                            data-positon={position}
                          />
                        );
                      })
                    }
                  </div>
                </FilterDropdown.Scrollpane>

                <FormControls
                  left={[
                    <span
                      className="form-control"
                      key="check-myself"
                      onClick={checkMyself}
                      role="button"
                      tabIndex="0"
                      data-name="ALL_BROKER"
                    >Я</span>,
                    <span
                      className="form-control"
                      key="check-my-department"
                      onClick={checkMyDepartment}
                      role="button"
                      tabIndex="0"
                      data-name="ALL_BROKER"
                    >Мой отдел</span>,
                    <span
                      className="form-control"
                      key="check-all"
                      onClick={checksSelectAll}
                      role="button"
                      tabIndex="0"
                      data-name="ALL_BROKER"
                    >Все</span>,
                    <span
                      key="reset-all"
                      className="form-control form-control_reset"
                      onClick={checksReset}
                      role="button"
                      tabIndex="0"
                      data-name="ALL_BROKER"
                    >Сбросить</span>,
                  ]}
                  right={(
                    <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
                      <Icon className="icon__close" icon="close" width={15} height={15} />
                    </div>
                  )}
                />

              </FilterDropdown.Column>
            </FilterDropdown>
          </Dropdown>
        }
      </div>
    );
  }
}

BrokersContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  checksSelectAll: PropTypes.func.isRequired,
  checkMyDepartment: PropTypes.func.isRequired,
  checkMyself: PropTypes.func.isRequired,
  checksReset: PropTypes.func.isRequired,
  onDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(BrokersContainer);
