import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/Icon';

export default function Navigation({ nav }) {
  return (
    <nav className="nav">
      {
        Object.values(nav).map(link => (
          <div className="nav__section" key={`nav-item-id-${link.ID}`}>
            <Link
              activeClassName="nav__link_active"
              className={`nav__link nav__link-enabled-${link.ENABLED}`}
              data-enabled={link.ENABLED}
              onClick={e => e.preventDefault()}
              to={link.URL}
            >{link.NAME}</Link>

            <div className={`nav__subnav nav__section_item-${link.ID} subnav`}>
              {
                Object.values(link.CHILDREN).map(subLink => (
                  <Link
                    className={`subnav__link subnav__link-enabled-${subLink.ENABLED}`}
                    key={`nav-item-link-id-${subLink.ID}`}
                    to={subLink.URL}
                  >
                    <span className="subnav__icon">
                      <Icon icon={subLink.ICO_CODE} width="22" height="19" />
                    </span>
                    {subLink.NAME}
                  </Link>
                ))
              }
            </div>
          </div>
        ))
      }
    </nav>
  );
}

Navigation.propTypes = {
  nav: PropTypes.objectOf(PropTypes.shape({
    CHILDREN: PropTypes.object.isRequired,
  })).isRequired,
};
