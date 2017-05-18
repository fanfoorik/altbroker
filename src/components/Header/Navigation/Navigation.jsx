import React from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon';

export default function Navigation(props) {
  const { nav } = props;

  return (
    <nav className="nav">
      {
        nav.map((link) => {
          return (
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
                  link.subnav.map((subLink) => {
                    return (
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
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </nav>
  );
}
