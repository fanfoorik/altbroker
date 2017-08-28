import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ToplineTooltip(props) {
  return (
    <div className={`droptip ${props.className}`}>
      {props.children}
    </div>
  );
}

ToplineTooltip.defaultProps = {
  children: null,
  className: '',
};

ToplineTooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

ToplineTooltip.Header = Header;
ToplineTooltip.Footer = Footer;

export default ToplineTooltip;
