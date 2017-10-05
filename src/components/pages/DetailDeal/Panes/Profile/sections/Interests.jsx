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
  const onChangeCity = id => props.onChange([
    { field: 'city', value: id },
    { field: 'rayon', value: null },
  ], 'interests');

  const onChangeRayon = id => props.onChange({ field: 'rayon', value: id }, 'interests');
  const onChangeCategory = categories => props.onChange({ field: 'category', value: categories }, 'interests');

  const { getFieldDecorator } = props.form;
  const optionsRayon = props.lib.ALL_RAYONS
      .filter(rayon => rayon.PROPERTY_CITY_VALUE === props.data.city)
      .map(rayon => (
        <Option key={rayon.ID} value={rayon.ID}>
          {rayon.NAME}
        </Option>
  ));

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Город">
            <Select showSearch value={props.data.city} onChange={onChangeCity} >
              {
                props.lib.ALL_CITY.map(city => (
                  <Option key={city.ID} value={city.ID}>
                    {city.NAME}
                  </Option>
                ))
              }
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Район">
            <Select
              disabled={!props.data.city || !optionsRayon.length}
              value={props.data.rayon}
              showSearch
              onChange={onChangeRayon}
            >
              { optionsRayon }
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem {...formItemLayout} label="Категории">
            <Select
              showSearch
              mode="multiple"
              value={props.data.category}
              onChange={onChangeCategory}
            >
              {
                props.lib.ALL_CATEGORY_GB_1.map((category, key) => (
                  <Option
                    value={category.ID}
                    key={key}
                  >
                    {category.NAME}
                  </Option>
                ))
              }
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

Base.defaultProps = {
  city: null,
};

export default Base;
