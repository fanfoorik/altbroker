import React from 'react';

import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
} from 'antd';

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
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Дата начала">
            <span className="ant-form-text">3 августа 2017</span>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Ориентировачная дата завершения">
            <DatePicker />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Брокер">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Юрист">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </div>
  );
};

export default Base;
