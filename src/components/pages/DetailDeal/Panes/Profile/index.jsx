import React, { Component } from 'react';
import {
  Row,
  Col,
  Anchor,
  Form,
} from 'antd';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';

import style from './profile.module.less';
import Base from './sections/Base';
import Contract from './sections/Contract';
import Buyer from './sections/Buyer';
import BuyerEditor from './sections/BuyerEditor';
import Interests from './sections/Interests';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import { sagaInitEditDealPage, clearEditDealPage } from 'actions/deal';
import store from 'store';
import { fetchLib } from 'api/editPage';
import { editDeal, saveDeal } from 'api/deal';

const { Link } = Anchor;
class Profile extends Component {
  state = {
    editBuyer: false,
    lib: {
      ALL_CITY: [],
      ALL_RAYONS: [],
      ALL_CATEGORY_GB_1: [],
    },
    interests: {
      city: null,
      rayon: null,
      category: [],
    },
    basic: {
      broker: null,
      lawyer: null,
      startDate: null,
      endDate: null,
    },
    buyers: [],
    listBroker: null,
    listLawyer: null,
    notifications: OrderedSet(),
  }

  componentDidMount() {
    store.dispatch(sagaInitEditDealPage(this.props.dealId));

    editDeal(this.props.dealId).then(data => {
      let item = data.ITEM;

      let requests = item.PROPERTY_REQUESTS_JSON ?
      item.PROPERTY_REQUESTS_JSON :
      {
        PROPERTY_GEO_ID: [],
        PROPERTY_RAYON2: [],
      };

      this.setState({
        basic: {
          broker: Object.values(item.PROPERTY_BROKER)[0].ID,
          lawyer: Object.values(item.PROPERTY_LAWYER)[0].ID,
          endDate: item.PROPERTY_DATE_COMPLETION * 1000,
        },
        interests: {
          city: requests.PROPERTY_GEO_ID[0],
          rayon: requests.PROPERTY_RAYON2[0],
          category: requests.SECTION_ID,
        },
        buyers: item.PROPERTY_SELLER,
        listBroker: data.LIST.BROKER,
        listLawyer: data.LIST.LAWYER,
      });
    });

    fetchLib().then(data => this.setState({ lib: data.ANSWER }));
  }

  prepareDataForSending() {
    console.log(this.state.buyers)
    return {
      ID: this.props.dealId,
      NAME: 'Объект с нового альтброкера',
      PROPERTY_ELEMENT_ID: '',
      PROPERTY_BROKER: [this.state.basic.broker],
      PROPERTY_LAWYER: [this.state.basic.lawyer],
      PROPERTY_SELLER: this.state.buyers,
      PROPERTY_COST: '',
      PROPERTY_COMMISSION: '',
      PROPERTY_INCOME: '',
      PROPERTY_PREPAYMENT_AMOUNT: '',
      PROPERTY_TIP: '',
      PROPERTY_DATE_COMPLETION: this.state.basic.endDate ? Math.floor(this.state.basic.endDate / 1000) : '',
      PROPERTY_SERVICE_PACKAGES: '',
      SELLER: this.state.buyers,
      REQUESTS: {
        PROPERTY_GEO_ID: [this.state.interests.city],
        PROPERTY_RAYON2: [this.state.interests.rayon],
        SECTION_ID: this.state.interests.category,
        from_PROPERTY_CHIST_PRIB: '',
        to_PROPERTY_CHIST_PRIB: '',

        from_PROPERTY_PRICE_BUSINESS: '',
        to_PROPERTY_PRICE_BUSINESS: '',

        from_PROPERTY_OKUP: '',
        to_PROPERTY_OKUP: '',
      },
    };
  }

  componentWillUnmount() {
    store.dispatch(clearEditDealPage());
  }

  onChangeSection = (data, nameSection) => {
    if (Array.isArray(data)) {
      const newState = {};

      data.map(field => newState[field.field] = field.value);

      this.setState({
        [nameSection]: {
          ...this.state[nameSection],
          ...newState,
        },
      });
    } else {
      this.setState({
        [nameSection]: {
          ...this.state[nameSection],
          [data.field]: data.value,
        },
      });
    }
  }

  triggerEditBuyer = () => this.setState({ editBuyer: !this.state.editBuyer })

  saveDealHandler = () => {
    this.props.form.submit(this.hadleSubmit);
  }

  addNotification = (text) => {
    const { notifications } = this.state;
    const count = this.state.count + 1;

    return this.setState({
      count,
      notifications: notifications.add({
        dismissAfter: 3000,
        key: `notification-id-${count}`,
        message: text,
      }),
    });
  };

  handleNotificationDismiss = (notification) => {
    this.setState({
      notifications: this.state.notifications.delete(notification),
    });
  };

  hadleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        saveDeal(this.prepareDataForSending()).then(result => {
          if (!result.ANSWER.ERROR) {
            this.addNotification('Объект успешно обновлен!');
          } else {
            this.addNotification(result.ANSWER.ERROR[0].VAL);
          }
        });
      }
    });
  }

  saveBuyer = buyer => {
    this.setState({
      buyers: [...this.state.buyers, buyer],
    }, this.triggerEditBuyer);
  }

  render() {
    const HeaderForByerSection = this.state.editBuyer ?
      (<Breadcrumbs
        items={[
          { label: 'Покупатель' },
          { label: 'Добавление' },
        ]}
      />) :
      (<h2>
        Покупатель
        <span className={style.span} onClick={this.triggerEditBuyer}>
          + Добавить покупателя
        </span>
      </h2>);

    return (
      <Row gutter={14}>
        <Col span={6}>
          <div className={style.leftPanel}>
            <Anchor offsetTop={80} >
              <Link href="#basic" title="Основное" />
              <Link href="#contract" title="Договор" />
              <Link href="#buyer" title="Покупатель" />
              <Link href="#interests" title="Интересы" />
              <div className="page-aside__buttons">
                <button className="btn page-aside__buttons__btn">Завершить анкету</button>
                <button onClick={this.saveDealHandler} className="btn page-aside__buttons__btn">Сохранить</button>
              </div>
            </Anchor>
          </div>
        </Col>
        <Col span={18}>
          <Form onSubmit={this.hadleSubmit} >
            <div id="basic" className={style.section}>
              <h2>Основное</h2>
              <Base
                brokerList={this.state.listBroker ? this.state.listBroker : []}
                lawyerList={this.state.listLawyer ? this.state.listLawyer : []}
                data={this.state.basic}
                onChange={this.onChangeSection}
              />
            </div>
            <div id="contract" className={style.section}>
              <h2>Договор</h2>
              <Contract />
            </div>
            <div id="buyer" className={style.section}>
              { HeaderForByerSection }

              {
                (this.state.editBuyer) ?
                  <BuyerEditor saveBuyer={this.saveBuyer} triggerEditBuyer={this.triggerEditBuyer} /> :
                  <Buyer buyers={this.state.buyers} />
              }
            </div>
            <div id="interests" className={style.section}>
              <h2>Интересы</h2>
              <Interests
                lib={this.state.lib}
                {...this.props}
                onChange={this.onChangeSection}
                data={this.state.interests}
              />
            </div>
          </Form>
        </Col>
        <NotificationStack
          notifications={this.state.notifications.toArray()}
          onDismiss={instance => this.handleNotificationDismiss(instance)}
        />
      </Row>
    );
  }
}

export default connect(state => ({
  deal: state.editDealPage,
}))(Form.create()(Profile));
