import PropTypes from 'prop-types';
import React from 'react';

import ajax from 'utils/ajax';

import Icon from 'components/Icon';
import DetailPageHeader from './DetailPageHeader';
import DetailPageCarousel from './DetailPageCarousel';
import DetailPageMain from './DetailPageMain';
import DetailPageFinance from './DetailPageFinance';
import DetailPageStaff from './DetailPageStaff';
import DetailPageRoom from './DetailPageRoom';
import DetailPageActives from './DetailPageActives';
import DetailPageSeller from './DetailPageSeller';
import DetailPageComments from './DetailPageComments';

class DetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      main: {},
      finance: {},
      staff: {},
      room: {},
      actives: {},
      client: {},
      comments: {},
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onOuterClick);
    document.addEventListener('keyup', this.onOuterClick);
    this.fetchDetails();

    const detailsMenuLinks = Array.from(document.querySelectorAll('.js-detail-menu-link'));
    detailsMenuLinks.forEach(el => el.addEventListener('click', this.onMenuLinkClick));

    this.detailBody = document.querySelector('.detail-page-body');
    this.detailPanels = Array.from(document.querySelectorAll('.detail-page-blank'));

    // this.detailBody.addEventListener('scroll', this.onDetailBodyScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOuterClick);
    document.removeEventListener('keyup', this.onOuterClick);
  }

  onMenuLinkClick = (ev) => {
    const linkData = ev.currentTarget.dataset.anchor;

    const target = this.detailPanels.filter((element) => {
      if (element.dataset.anchor === linkData) {
        return element;
      }
      return false;
    })[0];

    if (target) {
      this.detailBody.scrollTop = target.offsetTop - 130;
    }
  };

  onOuterClick = (event) => {
    const clickEvent = event.type === 'click' && event.target === this.detailPage;
    const keyupEvent = event.type === 'keyup' && event.which === 27;

    if (clickEvent || keyupEvent) {
      this.props.triggerDetailPage();
    }
  };

  fetchDetails = () => {
    const url = `broker/gb/${this.props.id}/detail/`;

    ajax.all([
      ajax.post(url, { TAB: 'MAIN' }),
      ajax.post(url, { TAB: 'FIN' }),
      ajax.post(url, { TAB: 'STAFF' }),
      ajax.post(url, { TAB: 'ROOM' }),
      ajax.post(url, { TAB: 'ACTIVE' })])
      .then(ajax.spread((main, finance, staff, room, actives) => {
        this.setState({
          main: main.ANSWER.ITEM,
          client: main.ANSWER.KLIENT,
          comments: main.ANSWER.COMMENTS,
          finance: finance.ANSWER.ITEM,
          staff: staff.ANSWER.ITEM,
          room: room.ANSWER.ITEM,
          actives: actives.ANSWER.ITEM,
        });
      }));
  };

  updateComments = (data) => {
    this.setState({
      comments: data.ANSWER.COMMENTS,
    });
  };

  render() {
    const { id, triggerDetailPage } = this.props;
    const {
      NAME: name = 'Загрузка...',
      TIMESTAMP_X: timestamp = '',
      IMGS: images = [],
      PROPERTY_GEO_ID_VALUE_TEXT: city = '',
      IBLOCK_SECTION_ID_TEXT: category = '',
      PROPERTY_REASON_FOR_SALE_VALUE: sellReason = '',
      DOP_ICON: advantages = [],
      PROPERTY_DOP_INFO_VALUE: description = '',
    } = this.state.main;

    const {
      PROPERTY_CHIST_PRIB_VALUE: profitPerMonth = '',
      PROPERTY_OKUP_VALUE: recoupmentPerMonth = '',
      PROPERTY_SREDMES_OBOR_VALUE: turnoverPerMonth = '',
      PROPERTY_SREDMES_RASH_VALUE: expensePerMonth = '',
    } = this.state.finance;

    const {
      PROPERTY_KOLVO_SOTR_VALUE: employeesAmount = '',
      PROPERTY_FOND_ZP_VALUE: wages = '',
      PROPERTY_STATE_INFORMATION_VALUE: staffInfo = '',
    } = this.state.staff;

    const {
      PROPERTY_SOBSTVEN_VALUE: own = '',
      PROPERTY_LANDLORD_VALUE: landlord = '',
      PROPERTY_DOP_BUSINESS_INFO_NEW_VALUE: roomInfo = '',
    } = this.state.room;

    const {
      PROPERTY_OPF_VALUE: legalForm = '',
      PROPERTY_DOLYA_VALUE: activesPart = '',
      PROPERTY_VOZR_BUSINESS_VALUE: businessAge = '',
    } = this.state.actives;

    const {
      PROPERTY_KLIENT_FIO_VALUE: sellerName = '',
      PROPERTY_KLIENT_TLF_VALUE: sellerPhone = '',
      PROPERTY_KLIENT_EMAIL_VALUE: sellerEmail = '',
    } = this.state.client;

    const {
      INNER_COM: staffComment = [],
      KLIENT_COM: clientComment = [],
    } = this.state.comments;

    const detailsMain = {
      id,
      city,
      category,
      sellReason,
      advantages,
      description,
    };

    const detailsFinance = {
      profitPerMonth,
      recoupmentPerMonth,
      turnoverPerMonth,
      expensePerMonth,
    };

    const detailsStaff = {
      employeesAmount,
      wages,
      staffInfo,
    };

    const detailsRoom = {
      own,
      landlord,
      roomInfo,
    };

    const detailsActives = {
      legalForm,
      activesPart,
      businessAge,
    };

    const detailsSeller = {
      sellerName,
      sellerPhone,
      sellerEmail,
    };

    const detailsComments = {
      id,
      staffComment,
      clientComment,
      updateComments: this.updateComments,
    };

    return (
      <div className="detail-page" ref={(node) => { this.detailPage = node; }}>
        <div className="detail-page-aside">
          <span className="detail-page__close" onClick={() => triggerDetailPage(id)} role="button" tabIndex="0">
            <Icon icon="close" className="detail-page__close-icon" width={18} height={18} />
          </span>

          <DetailPageHeader name={name} timestamp={timestamp} />

          <div className="detail-page-body">
            <div className="detail-page-blank" data-anchor="main">

              <DetailPageCarousel images={images} />

              <DetailPageMain {...detailsMain} />

            </div>

            <DetailPageFinance {...detailsFinance} />

            <DetailPageStaff {...detailsStaff} />

            <DetailPageRoom {...detailsRoom} />

            <DetailPageActives {...detailsActives} />

            <DetailPageSeller {...detailsSeller} />

            <DetailPageComments {...detailsComments} />

          </div>
        </div>
      </div>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  triggerDetailPage: PropTypes.func.isRequired,
};

export default DetailPage;
