import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Breadcrumbs from 'components/ui/Breadcrumbs';
import Lenta from './Panes/Lenta';
import Profile from './Profile';

class Detail extends Component {
  render() {
    return (
      <div className="container container__min">
        <Breadcrumbs
          items={[
            { label: 'Сделки' },
            { label: 'Сделка на поиск #535252' },
          ]}
        />

        <Tabs defaultActiveKey="2">
          <TabPane tab="Лента" key="1">
            <Lenta />
          </TabPane>
          <TabPane tab="Анкета" key="2">
            <Profile dealId={this.props.params.dealId} />
          </TabPane>
          <TabPane tab="Материалы" key="3">Материалы</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
