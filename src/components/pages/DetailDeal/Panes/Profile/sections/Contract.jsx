import React from 'react';

import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  Input
} from 'antd';

import InputNumber from 'components/ui/inputs/InputNumber';

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
          <FormItem {...formItemLayout} label="Пакет услуг">
            <Select showSearch>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Размер предоплаты">
            <InputNumber money />
          </FormItem>
        </Col>
      </Row>
    </div>
  );
};

export default Base;
