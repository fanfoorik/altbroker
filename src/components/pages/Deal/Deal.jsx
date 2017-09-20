import React, { Component } from 'react';
import { Table, Menu, Dropdown, Badge } from 'antd';
import { Link } from 'react-router';
import { indexUrl } from 'utils/urls';
import style from './Deal.module.less';
import Icon from 'components/Icon';
import CSSModules from 'react-css-modules';

const columns = [{
  title: '#',
  dataIndex: 'number',
}, {
  title: 'Этап',
  dataIndex: 'step',
}, {
  title: 'Сумма',
  dataIndex: 'sum',
}, {
  title: 'Комиссия',
  dataIndex: 'commission',
}, {
  title: 'Брокер',
  dataIndex: 'broker',
}, {
  title: 'Юрист',
  dataIndex: 'lawyer',
}, {
  title: 'Продавец',
  dataIndex: 'salary',
}, {
  title: 'Создана',
  dataIndex: 'creating',
}, {
  title: 'Окончание',
  dataIndex: 'ending',
}, {
  title: 'Действие',
  dataIndex: 'action',
}];

const menu = (
  <Menu>
    <Menu.Item key="0">
        Смотреть
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      Редактировать
    </Menu.Item>
  </Menu>
);

const dropdown = (
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      Click me
    </a>
  </Dropdown>
);

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    number: i,
    step: '3 / 8 Основной договор',
    sum: '320 000',
    commission: '20 000',
    broker: 'Панахов A.',
    lawyer: 'Мечников К.',
    salary: 'Путин В.',
    creating: '12.03.17',
    ending: '12.03.18',
    action: dropdown,
  });
}
const showHeader = true;

const Header = (
  <div style={{
    width: '100%',
    height: '50px',
    backgroundColor: 'red',
  }} />
);

class Deal extends Component {
  state = {
    selectedRowKeys: [],
    showHeader,
  };

  onSelectChange = (selectedRowKeys) => {
    if (selectedRowKeys.length !== 0) {
      this.handleHeaderChange(false);
    } else {
      this.handleHeaderChange(true);
    }

    this.setState({ selectedRowKeys });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      onSelection: this.onSelection,
    };

    return (
      <div className="container">
        <div className="h1">Сделки <Link to={`${indexUrl}broker/gb/add/`} className="create-new-link">+ создать новую</Link></div>
        <div styleName="test">
          <span style={{marginRight: '10px'}}>
            <span style={{marginRight: '5px'}}>
              На продажу
            </span>
            <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
          </span>
          <span style={{marginRight: '10px'}}>
            <span style={{marginRight: '5px'}}>
              На поиск
            </span>
            <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
          </span>
          <span style={{marginRight: '10px'}}>
            <span style={{marginRight: '5px'}}>
              Сделки
            </span>
            <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
          </span>
        </div>
        {this.state.showHeader ? '' : Header}
        <Table
          showHeader={this.state.showHeader}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default Deal;
