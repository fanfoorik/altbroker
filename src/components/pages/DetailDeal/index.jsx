import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Lenta from './Panes/Lenta';
import Profile from './Panes/Profile';
import Materials from './Panes/Materials';
import Header from './Header';

class Detail extends Component {
  render() {
    return (
      <div className="container container_min">
        <Header />
        <Tabs defaultActiveKey="2">
          <TabPane tab="Лента" key="1">
            <Lenta />
          </TabPane>
          <TabPane tab="Анкета" key="2">
            <Profile dealId={this.props.params.dealId} />
          </TabPane>
          <TabPane tab="Материалы" key="3">
            <Materials />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
