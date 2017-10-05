import PropTypes from 'prop-types';
import React from 'react';
import ajax from 'utils/ajax';
import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import { indexUrl } from 'utils/urls';
import { Link } from 'react-router';
import nanoid from 'nanoid';

class DealPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
    };
  }

  componentWillMount() {
    this.fetchOptions();
  }

  fetchOptions = () => {
    ajax.get(`broker/gb/${this.props.id}/listoptions/`)
      .then((data) => {
        if (!data.ERRORS.length) {
          this.setState({ options: data.ANSWER });
        }
      });
  };

  openDetailPage = () => {
    this.props.openDetailPage(this.props.id);
  };

  render() {
    const { options } = this.state;
    const { providePopover } = this.props;

    return (
      <div className="popover popover_visible popover_without-tabs popover_last popover_md" ref={node => providePopover(node)}>
        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active">
            <div className="popover-deal-list">
              {
                options.map((item) => {
                  const {
                    NAME: name,
                    ICO: icon,
                    URL: url,
                    ENABLE: enable,
                    CODE: code,
                  } = item;

                  switch (code) {
                    case 'MENU1':
                      return (
                        <div
                          key={nanoid()}
                          className={`popover-deal-item ${enable === 'N' ? 'style-disabled' : ''}`}
                          onClick={this.openDetailPage}
                          role="button"
                          tabIndex="0"
                        >
                          <Icon className="popover-deal-list-icon" icon={icon} width={16} height={16} />
                          {name}
                        </div>
                      );

                    case 'MENU2':
                      return (
                        <a
                          key={nanoid()}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`popover-deal-item ${enable === 'N' ? 'style-disabled' : ''}`}
                        >
                          <Icon className="popover-deal-list-icon" icon={icon} width={16} height={16} />
                          {name}
                        </a>
                      );

                    case 'MENU3':
                      return (
                        <Link
                          key={nanoid()}
                          to={url}
                          className={`popover-deal-item ${enable === 'N' ? 'style-disabled' : ''}`}
                        >
                          <Icon className="popover-deal-list-icon" icon={icon} width={16} height={16} />
                          {name}
                        </Link>
                      );

                    default:
                      return (
                        <div
                          key={nanoid()}
                          className={`popover-deal-item ${enable === 'N' ? 'style-disabled' : ''}`}
                          role="button"
                          tabIndex="0"
                        >
                          <Icon className="popover-deal-list-icon" icon={icon} width={16} height={16} />
                          {name}
                        </div>
                      );
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DealPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  openDetailPage: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DealPopover);
