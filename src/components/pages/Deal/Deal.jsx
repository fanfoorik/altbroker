import React, { Component } from 'react';
import { Table, Menu, Dropdown } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { indexUrl } from 'utils/urls';
import Icon from 'components/Icon';
import { sagaSetDeal, clearDeal } from 'actions/deal';
import store from 'store';
import columns from './columnsTable';
import CustomHeader from './CustomHeader';
import BadgeList from './BadgeList';

const showHeader = true;

class Deal extends Component {
  state = {
    selectedRowKeys: [],
    showHeader,
    loading: true,
    countPages: 10,
    currentPage: 1,
  };

  componentDidMount() {
    const queryProps = {
      page: 1,
      count: 10,
    };

    if(window.location.search) {
      const getParams = window.location.search.substring(1).split('&');

      getParams
        .map(param => param.split('='))
        .map(param => queryProps[param[0].toLowerCase()] = parseInt(param[1], 10));
    }

    this.setState({
      countPages: queryProps.count,
      currentPage: queryProps.page,
    });

    store.dispatch(sagaSetDeal(queryProps.page, queryProps.count));
  }

  componentWillUnmount() {
    store.dispatch(clearDeal());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.deals.data === null,
    });
  }

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

  handlePagerOnChange = (page) => {
    this.setState({
      loading: true,
      currentPage: page,
    });

    window.history.replaceState({}, '', `?PAGE=${page}&COUNT=${this.state.countPages}`);
    store.dispatch(sagaSetDeal(page, this.state.countPages));
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      onSelection: this.onSelection,
    };

    if (this.props.deals.data) {
      this.props.deals.data.map((deal, id) => {
        const menu = (
          <Menu>
            <Menu.Item key="0">
              <Link to={`${indexUrl}deal/${this.props.deals.data[id].number}`}>
                Смотреть
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
              Редактировать
            </Menu.Item>
          </Menu>
        );

        this.props.deals.data[id].action = (
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <span className="table-options__trigger" role="button" tabindex="0">
                <span className="table-cell__dot" />
                <span className="table-cell__dot" />
                <span className="table-cell__dot" />
              </span>
            </a>
          </Dropdown>
        );

        this.props.deals.data[id].broker = this.props.deals.data[id].broker.map((broker, key) => (
          <div>
            <a key={key} href={`/${broker.id}`}>{broker.name}</a>
          </div>
        ));

        this.props.deals.data[id].lawyer = this.props.deals.data[id].lawyer.map((lawyer, key) => (
          <div>
            <a key={key} href={`/${lawyer.id}`}>{lawyer.name}</a>
          </div>
        ));

        this.props.deals.data[id].salary = this.props.deals.data[id].salary.map((salary, key) => (
          <div>
            <a key={key} href={`/${salary.id}`}>{salary.name}</a>
          </div>
        ));
      });
    }

    return (
      <div className="container">
        <div className="h1">
          Сделки
          <Link to={`${indexUrl}broker/gb/add/`} className="create-new-link">
            + создать новую
          </Link>
        </div>

        <BadgeList />

        {this.state.showHeader ? '' : <CustomHeader />}

        <Table
          showHeader={this.state.showHeader}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.deals.data}
          loading={!this.props.deals.data || this.state.loading}
          pagination={{
            current: this.state.currentPage,
            pageSize: this.state.countPages,
            total: this.props.deals.pager && this.props.deals.pager.COUNT_OBJ,
            onChange: this.handlePagerOnChange,
          }}
        />
      </div>
    );
  }
}

export default connect(state => ({
  deals: state.deal,
}))(Deal);
