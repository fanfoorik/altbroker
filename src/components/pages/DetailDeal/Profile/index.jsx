import React, { Component } from 'react';
import {
  Row,
  Col,
  Anchor,
  Form,
} from 'antd';
import { connect } from 'react-redux';

import style from './profile.module.less';
import Base from './Base';
import Contract from './Contract';
import Buyer from './Buyer';
import BuyerEditor from './BuyerEditor';
import Interests from './Interests';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import { sagaInitEditDealPage, clearEditDealPage } from 'actions/deal';
import store from 'store';

const { Link } = Anchor;
class Profile extends Component {
  state = {
    editBuyer: false,
  }

  componentDidMount() {
    store.dispatch(sagaInitEditDealPage(this.props.dealId));
  }

  componentWillUnmount() {
    store.dispatch(clearEditDealPage());
  }

  triggerEditBuyer = () => this.setState({ editBuyer: !this.state.editBuyer })

  render() {
    return (
      <Row gutter={16}>
        <Col span={7}>
          <Anchor offsetTop={80} >
            <Link href="#basic" title="Основное" />
            <Link href="#contract" title="Договор" />
            <Link href="#buyer" title="Покупатель" />
            <Link href="#interests" title="Интересы" />
            <div className="page-aside__buttons">
              <button className="btn page-aside__buttons__btn">Завершить анкету</button>
              <button className="btn page-aside__buttons__btn">Сохранить</button>
            </div>
          </Anchor>
        </Col>
        <Col span={17}>
          <Form>
            <div id="basic" className={style.section}>
              <h2>Основное</h2>
              <Base />
            </div>
            <div id="contract" className={style.section}>
              <h2>Договор</h2>
              <Contract />
            </div>
            <div id="buyer" className={style.section}>
              {
                (this.state.editBuyer) ?
                  <Breadcrumbs
                    items={[
                      { label: 'Покупатель' },
                      { label: 'Добавление' },
                    ]}
                  /> :
                  <h2>
                    Покупатель
                    <span className={style.span} onClick={this.triggerEditBuyer}>
                      + Добавить покупателя
                    </span>
                  </h2>
              }

              {
                (this.state.editBuyer) ? <BuyerEditor triggerEditBuyer={this.triggerEditBuyer} /> : <Buyer />
              }
            </div>
            <div id="interests" className={style.section}>
              <h2>Интересы</h2>
              <Interests />
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default connect(state => ({
  deal: state.editDealPage,
}))(Profile);
