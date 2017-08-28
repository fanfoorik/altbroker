import PropTypes from 'prop-types';
import React from 'react';

import FormControls from 'components/ui/FormControls';
import DropdownHOC from 'components/HOC/DropdownHOC';
import Icon from 'components/Icon';
import { formatNumber } from 'utils/formaters';

function RangeDropdown(props) {
  const {
    name,
    onChange,
    from,
    to,
    resetSection,
    triggerDropdown,
    rangeFrom,
    rangeTo,
  } = props;

  return (
    <div className="form-dropdown form-range">
      <div className="form-block">
        <span className="form-range__zone">От</span>
        <input
          className="form-range__input align-right"
          value={from}
          onChange={onChange}
          type="text"
          name={`from_${name}`}
        />

        <div className="form-range__list" onClick={onChange}>
          {
            rangeFrom.map((item, ind) => {
              return (
                <div
                  key={`recoup-from-${ind}`}
                  className="form-range__list_item"
                  data-value={item}
                  data-name={`from_${name}`}
                >{formatNumber(parseInt(item, 10), '')}</div>
              );
            })
          }
        </div>
      </div>

      <div className="form-block">
        <span className="form-range__zone">До</span>
        <input
          className="form-range__input align-right"
          value={to}
          onChange={onChange}
          type="text"
          data-range="to"
          name={`to_${name}`}
        />

        <div className="form-range__list" onClick={onChange}>
          {
            rangeTo.map((item, ind) => {
              return (
                <div
                  key={`recoup-to-${ind}`}
                  className="form-range__list_item"
                  data-value={item}
                  data-name={`to_${name}`}
                >{formatNumber(parseInt(item, 10), '')}</div>
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
            data-name={name}
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

RangeDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
};

export default DropdownHOC(RangeDropdown);
