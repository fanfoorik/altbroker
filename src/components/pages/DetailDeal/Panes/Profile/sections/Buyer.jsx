import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
} from 'antd';
import Icon from 'components/Icon';
import style from '../profile.module.less';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const columns = [
  { title: 'Column 4', dataIndex: 'legal' },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_FIO_VALUE' },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_TLF_VALUE' },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_EMAIL_VALUE' },
  { title: 'Column 4', render: () => <Icon icon="edit" width={15} height={15} /> },
  { title: 'Column 4', render: () => <Icon icon="close" width={15} height={15} /> },
];

const Base = props => {
  return (
    <div className={style.buyer}>
      <Table pagination={false} showHeader={false} columns={columns} dataSource={props.buyers} />
    </div>
  );
};

export default Base;
