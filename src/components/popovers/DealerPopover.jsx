import PropTypes from 'prop-types';
import React from 'react';
import ajax from 'utils/ajax';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';

class DealerPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      dealer: {},
    };
  }
  componentDidMount() {
    this.fetchDealler();
  }

  fetchDealler = () => {
    const url = `broker/gb/${this.props.id}/getseller/`;
    const ths = this;

    ajax.get(url)
      .then((data) => {
        ths.setState({
          dealer: data.ANSWER,
        });
      });
  };

  render() {
    const { delegateDealerTrigger, providePopover, triggerPopover } = this.props;
    const {
      NAME: name,
      PROPERTY_KLIENT_FIO_VALUE: fullName,
      PROPERTY_KLIENT_TLF_VALUE: phone,
      PROPERTY_KLIENT_EMAIL_VALUE: email,
      PROPERTY_KLIENT_MESTO_VALUE: address,
      PROPERTY_KLIENT_SAIT_VALUE: website,
    } = this.state.dealer;

    return (
      <div className="popover popover_visible popover_without-tabs popover_md" ref={node => providePopover(node)}>
        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active">
            <div className="popover-deal-list">
              {
                (fullName || name) &&
                <div className="popover-deal-item">
                  <Icon className="popover-deal-list-icon" icon="user" width={16} height={16} />
                  {fullName || name}
                </div>
              }
              {
                phone &&
                <a href={`tel:${phone}`} className="popover-deal-item popover-deal-item_link">
                  <Icon className="popover-deal-list-icon" icon="phone" width={16} height={16} />
                  {phone}
                </a>
              }
              {
                email &&
                <a href={`mailto:${email}`} className="popover-deal-item popover-deal-item_link">
                  <Icon className="popover-deal-list-icon" icon="email" width={16} height={16} />
                  {email}
                </a>
              }
              {
                website &&
                <a href={website} target="_blank" rel="noopener noreferrer" className="popover-deal-item popover-deal-item_link">
                  <Icon className="popover-deal-list-icon" icon="web" width={16} height={16} />
                  {website}
                </a>
              }
              {
                address &&
                <div className="popover-deal-item">
                  <Icon className="popover-deal-list-icon" icon="location" width={16} height={16} />
                  {address}
                </div>
              }
            </div>

            <div className="popover-actions-list">
              <div
                className="popover-actions-item popover-actions-item_share"
                onClick={() => {
                  triggerPopover();
                  delegateDealerTrigger();
                }}
                role="button"
                tabIndex="0"
              >
                <Icon icon="share" width={16} height={16} />
              </div>
              <div className="popover-actions-item" onClick={triggerPopover} role="button" tabIndex="0">
                <Icon icon="close" width={15} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DealerPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  delegateDealerTrigger: PropTypes.func.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DealerPopover);
