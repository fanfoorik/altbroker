import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';
import { hostUrl } from 'utils/urls';

import Checkpoint from 'components/ui/Checkpoint';

// Panels
import TablePrice from './Table/TablePrice';
import TableBroker from './Table/TableBroker';
import TableDealer from './Table/TableDealer';
import TableComments from './Table/TableComments';
import TableTask from './Table/TableTask';
import TableOptions from './Table/TableOptions';

export default class BrokerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: props.listing || [],
    };
  }

  componentDidMount() {
    this.props.fetchGBListing();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ listing: nextProps.listing });
  }

  render() {
    const { listing } = this.state;
    const { loading } = this.props;

    function getImage(item) {
      return item.DETAIL_PICTURE_TEXT ?
        `${hostUrl}${item.DETAIL_PICTURE_TEXT}` :
        'http://via.placeholder.com/200?text=A';
    }

    const {
      openDetailPage,
      getStatusColor,
    } = this.props;

    function renderTable() {
      if (listing.length) {
        return listing.map((item) => {
          const {
            ID: id,
            COMMENT: comments,
            DATE_CREATE_TEXT: created,
            IBLOCK_SECTION_ID_TEXT: category,
            NAME: name,
            PROPERTY_ACTUAL_VALUE_TEXT: lastUpdate,
            PROPERTY_BROKER_VALUE_TEXT: broker,
            PROPERTY_GEO_ID_VALUE_TEXT: location,
            PROPERTY_KLIENT_FIO_VALUE: dealer,
            SCORE: likes,
            SHOW_COUNTER: viewed,
            DETAIL_PAGE_URL: pageUrl,
            PROPERTY_BROKER_VALUE_EMAIL: brokerEmail,
            commentsPopoverActive,
          } = item;
          const statusColor = getStatusColor(item.PROPERTY_STATUS_OBJ_ENUM_ID);
          const price = +item.PROPERTY_PRICE_BUSINESS_VALUE;
          const profit = formatNumber(item.PROPERTY_CHIST_PRIB_VALUE, '-');

          return (
            <div className="table-row" key={`table-item-${id}`}>
              <div className="table-cell table-col__checkbox style-disabled">
                <Checkpoint id={id} />
              </div>
              <div className="table-cell table-col__color no-padding">
                <span className={`table-status table-status_${statusColor}`} />
              </div>
              <div className="table-cell table-col__id">
                <div
                  className="table-cell__id"
                  onClick={() => openDetailPage(id)}
                  role="button"
                  tabIndex="0"
                >{id}</div>
              </div>
              <div className="table-cell table-col__img no-padding">
                <div className="table-col__img">
                  <img className="table-cell__img table-tooltip" src={getImage(item)} alt={name} />
                  <span className="table-tooltip__content clearfix">
                      <img className="table-tooltip__content-img" src={getImage(item)} alt={name} />
                    </span>
                </div>
              </div>
              <div className="table-cell table-col__name">
                <span className="table-cell__span table-cell__name-text">{name}</span>
              </div>
              <div className="table-cell table-col__category">{category}</div>
              <div className="table-cell table-col__location no-padding">{location}</div>
              <div className="table-cell table-col__price align-right no-padding-left">
                <TablePrice id={id} price={price} />
              </div>
              <div className="table-cell table-col__profit align-right no-padding-left">{profit}</div>
              <div className="table-cell table-col__broker no-padding-left">
                <TableBroker id={id} broker={broker} />
              </div>
              <div className="table-cell table-col__dealer no-padding-left">
                <TableDealer id={id} dealer={dealer} />
              </div>
              <div className="table-cell table-col__created no-padding-left">{created}</div>
              <div className="table-cell table-col__updated no-padding-left">{lastUpdate}</div>
              <div className="table-cell table-col__watched align-right no-padding-right">{viewed || '-'}</div>
              <div className="table-cell table-col__like align-right no-padding-right">{likes}</div>
              <div className="table-cell table-col__comments align-center no-padding-right">
                <TableComments
                  id={id}
                  comments={comments}
                  commentsPopoverActive={commentsPopoverActive}
                />
              </div>
              <div className="table-cell table-col__actions no-padding">
                <div className="table-cell__actions">
                  <div className="table-cell__action-left">
                    <TableTask id={id} pageUrl={pageUrl} brokerEmail={brokerEmail} />
                  </div>
                  <div className="table-cell__action-right">
                    <TableOptions id={id} openDetailPage={openDetailPage} />
                  </div>
                </div>
              </div>
            </div>
          );
        });
      }
      return <div className="table-cover"><div className="table-cover__not-found">Нет данных.</div></div>;
    }

    return (
      <div>
        {loading ? <div className="table-cover">
          <div className="preloader"><hr /><hr /><hr /><hr /></div>
        </div> : renderTable()}
      </div>
    );
  }
}

BrokerTable.propTypes = {
  openDetailPage: PropTypes.func.isRequired,
  getStatusColor: PropTypes.func.isRequired,
  fetchGBListing: PropTypes.func.isRequired,
  updateGBOptions: PropTypes.func.isRequired,
  listing: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.shape({
    COUNT: PropTypes.string,
    PAGE: PropTypes.string,
  }),
};

BrokerTable.defaultProps = {
  listing: [],
  query: PropTypes.shape({
    COUNT: 15,
    PAGE: 0,
  }),
};
