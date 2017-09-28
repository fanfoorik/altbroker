import React from 'react';

import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
} from 'antd';

import style from './profile.module.less';

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

const Base = props => {
  return (
    <div>
      <table className={style.byer}>
        <tr>
          <td>Физ.</td>
          <td>Васильева Е.М.</td>
          <td>+7 903 412 88 41</td>
          <td>kenny_keebler@mitchell.com</td>
        </tr>
      </table>
    </div>
  );
};

export default Base;
