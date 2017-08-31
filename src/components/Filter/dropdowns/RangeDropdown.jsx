import PropTypes from 'prop-types';
import React from 'react';

import DropdownHOC from 'components/HOC/DropdownHOC';
import FormControls from 'components/ui/FormControls';

function RangeDropdown(props) {
  const {
    name,
    onChange,
    from,
    to,
    rangeControls,
    resetSection,
    triggerDropdown,
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

        <ul className="form-range__list" onClick={onChange}>
          <li
            className="form-range__list_item"
            data-value={500000}
            data-name={`from_${name}`}
          >500 000</li>
          <li
            className="form-range__list_item"
            data-value={1000000}
            data-name={`from_${name}`}
          >1 000 000</li>
          <li
            className="form-range__list_item"
            data-value={2000000}
            data-name={`from_${name}`}
          >2 000 000</li>
          <li
            className="form-range__list_item"
            data-value={3000000}
            data-name={`from_${name}`}
          >3 000 000</li>
          <li
            className="form-range__list_item"
            data-value={5000000}
            data-name={`from_${name}`}
          >5 000 000</li>
        </ul>
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

        <ul className="form-range__list" onClick={onChange}>
          <li
            className="form-range__list_item"
            data-value={500000}
            data-name={`to_${name}`}
          >500 000</li>
          <li
            className="form-range__list_item"
            data-value={1000000}
            data-name={`to_${name}`}
          >1 000 000</li>
          <li
            className="form-range__list_item"
            data-value={2000000}
            data-name={`to_${name}`}
          >2 000 000</li>
          <li
            className="form-range__list_item"
            data-value={3000000}
            data-name={`to_${name}`}
          >3 000 000</li>
          <li
            className="form-range__list_item"
            data-value={5000000}
            data-name={`to_${name}`}
          >5 000 000</li>
        </ul>
      </div>

      <FormControls onReset={resetSection} onClose={triggerDropdown} name={name} />

    </div>
  );
}

RangeDropdown.defaultProps = {
  rangeControls: [],
};

RangeDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  rangeControls: PropTypes.arrayOf(PropTypes.number),
};

export default DropdownHOC(RangeDropdown);
