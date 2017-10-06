import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  Table,
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
  { title: 'Column 4', dataIndex: 'legal', width: 20 },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_FIO', width: 50 },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_TLF', width: 50 },
  { title: 'Column 4', dataIndex: 'PROPERTY_KLIENT_EMAIL', width: 50 },
  { title: 'Column 4', width: '20px', render: () => <Icon icon="edit" width={15} height={15} /> },
  { title: 'Column 4', width: '20px', render: () => <Icon icon="close" width={15} height={15} /> },
];

const Base = props => {
  const newBuyer = props.buyers.map((buyer, key) => ({ key, ...buyer }));

  return (
    <div className={style.buyer}>
      <Table pagination={false} showHeader={false} columns={columns} dataSource={newBuyer} />
    </div>
  );
};

export default Base;
