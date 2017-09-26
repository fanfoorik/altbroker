import React, { Component } from 'react';
import { Table, Menu, Dropdown } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

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
    currentTypeDeal: 'sale',
  };

  componentDidMount() {
    const queryProps = {
      page: 1,
      count: 10,
      type: 'sale',
    };

    if (this.props.location.search) {
      const getParams = this.props.location.search.substring(1).split('&');

      getParams
        .map(param => param.split('='))
        .map(param => queryProps[param[0].toLowerCase()] = param[1]);
    }

    this.setState({
      countPages: queryProps.count,
      currentPage: queryProps.page,
      currentTypeDeal: queryProps.type,
    });

    store.dispatch(sagaSetDeal(queryProps.page, queryProps.count, queryProps.type));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.deals.data === null,
    });
  }

  componentWillUnmount() {
    store.dispatch(clearDeal());
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

    browserHistory.push({
      pathname: `${indexUrl}deal/`,
      search: `?PAGE=${page}&COUNT=${this.state.countPages}&TYPE=${this.state.currentTypeDeal}`,
    });

    store.dispatch(sagaSetDeal(page, this.state.countPages, this.state.currentTypeDeal));
  }

  handleChangeType = (type) => {
    this.setState({
      loading: true,
      currentTypeDeal: type,
      currentPage: 1,
    });

    browserHistory.push({
      pathname: `${indexUrl}deal/`,
      search: `?PAGE=${this.state.currentPage}&COUNT=${this.state.countPages}&TYPE=${type}`,
    });

    store.dispatch(sagaSetDeal(1, this.state.countPages, type));
  };

  render() {
    const {
      selectedRowKeys,
      currentPage,
      countPages,
      loading,
      showHeader,
    } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      onSelection: this.onSelection,
    };

    const data = this.props.deals.data ? [...this.props.deals.data] : null;
    const pager = this.props.deals.pager;

    if (data) {
      data.map((deal, id) => {
        const menu = (
          <Menu>
            <Menu.Item key="0">
              <Link to={`${indexUrl}deal/${data[id].number}`}>
                Смотреть
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
              Редактировать
            </Menu.Item>
          </Menu>
        );

        data[id].action = (
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <span className="table-options__trigger" role="button">
                <span className="table-cell__dot" />
                <span className="table-cell__dot" />
                <span className="table-cell__dot" />
              </span>
            </a>
          </Dropdown>
        );

        data[id].broker = data[id].broker.map((broker, brokerId) => (
          <div key={brokerId}>
            <a href={`/${broker.id}`}>{broker.name}</a>
          </div>
        ));

        data[id].lawyer = data[id].lawyer.map((lawyer, lawyerId) => (
          <div key={lawyerId}>
            <a href={`/${lawyer.id}`}>{lawyer.name}</a>
          </div>
        ));

        data[id].salary = data[id].salary.map((salary, salaryId) => (
          <div key={salaryId}>
            <a href={`/${salary.id}`}>{salary.name}</a>
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

        <BadgeList onClick={this.handleChangeType} current={this.state.currentTypeDeal} />

        {showHeader ? '' : <CustomHeader />}

        <Table
          showHeader={showHeader}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          loading={!data || loading}
          pagination={{
            current: currentPage,
            pageSize: countPages,
            total: pager && pager.COUNT_OBJ,
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
