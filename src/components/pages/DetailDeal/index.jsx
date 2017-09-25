import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Breadcrumbs from 'components/ui/Breadcrumbs';
import Lenta from './Panes/Lenta';

class Detail extends Component {
  render() {
    return (
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Сделки' },
            { label: 'Сделка на поиск #535252' },
          ]}
        />

        <Tabs defaultActiveKey="1">
          <TabPane tab="Лента" key="1">
            <Lenta />
          </TabPane>
          <TabPane tab="Анкета" key="2">Анкета</TabPane>
          <TabPane tab="Материалы" key="3">Материалы</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
