import React from 'react';

import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  Radio,
  Switch,
  Input,
  Button,
} from 'antd';

import Switcher from 'components/ui/Switcher';

const RadioGroup = Radio.Group;
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
  const { triggerEditBuyer } = props;

  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout}>
            <RadioGroup value={1}>
              <Radio value={1}>Физическое лицо</Radio>
              <Radio value={2}>Юридическое лицо</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout} label="Иностранный гражданин">
            <Switcher />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout} label="Фамилия Имя Отчество">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={7}>
          <FormItem {...formItemLayout} label="Серия паспорта">
            <Input />
          </FormItem>
        </Col>
        <Col span={17}>
          <FormItem {...formItemLayout} label="Номер паспорта">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Кем выдан">
            <Input />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Когда выдан">
            <DatePicker />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout} label="Где зарегистрирован">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Телефон">
            <Input />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Email">
            <Input />
          </FormItem>
        </Col>
      </Row>

      <div>
        <Button onClick={triggerEditBuyer} style={{ marginRight: '10px' }}>Назад</Button>
        <Button type="primary">Сохранить</Button>
      </div>
    </div>
  );
};

export default Base;
