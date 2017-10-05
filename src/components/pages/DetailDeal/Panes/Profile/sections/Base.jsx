import React from 'react';
import moment from 'moment';

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
  const onChangeLawyer = id => props.onChange({ field: 'lawyer', value: id }, 'basic');
  const onChangeBroker = id => props.onChange({ field: 'broker', value: id }, 'basic');

  const onChangeStartDate = date => {
    props.onChange({ field: 'endDate', value: date ? date.valueOf() : null }, 'basic');
  };

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
            <DatePicker
              onChange={onChangeStartDate}
              value={props.data.endDate ? moment(props.data.endDate) : null}
              format="DD.MM.YYYY"
            />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Брокер">
            <Select
              showSearch
              onChange={onChangeBroker}
              value={props.data.broker}
            >
              {
                props.brokerList.map((broker, key) => (
                  <Option
                    key={broker.ID}
                    value={broker.ID}
                  >
                    {broker.SHOT_NAME}
                  </Option>
                ))
              }
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Юрист">
            <Select
              showSearch
              onChange={onChangeLawyer}
              value={props.data.lawyer}
            >
              {
                props.lawyerList.map((lawyer, key) => (
                  <Option
                    key={key}
                    value={lawyer.ID}
                  >
                    {lawyer.SHOT_NAME}
                  </Option>
                ))
              }
            </Select>
          </FormItem>
        </Col>
      </Row>
    </div>
  );
};

export default Base;
