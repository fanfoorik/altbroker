import React from 'react';

import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  Input,
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
          <FormItem {...formItemLayout} label="Город">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Район">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout} label="Категории">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Цена">
            <Input />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Прибыль">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Окупаемость">
            <Input />
          </FormItem>
        </Col>
        <Col span={12} />
      </Row>
    </div>
  );
};

export default Base;
