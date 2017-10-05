import React, { Component } from 'react';
import moment from 'moment';
import Dropzone from 'react-fine-uploader/dropzone';
import FileInput from 'react-fine-uploader/file-input';
import FineUploaderTraditional from 'fine-uploader-wrappers';
import {
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  Radio,
  Input,
  Button,
  Upload,
  Icon,
} from 'antd';

import Switcher from 'components/ui/Switcher';
import {
  hostUrl,
  apiUrl,
} from 'utils/urls';

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

class BueyrEditor extends Component {
  state = {
    legal: 1,
    FIO: '',
    passport: {
      series: '',
      number: '',
      date: null,
      department: '',
      reegistration: '',
    },
    phone: '',
    number: '',
    email: '',
  }

  triggerLegal = e => {
    this.setState({
      legal: this.state.legal === 1 ? 2 : 1,
    });
  }

  handlerChangeFIO = e => {
    this.setState({
      FIO: e.target.value,
    });
  }

  handlerChangeSeries = e => {
    this.setState({
      passport: {
        ...this.state.passport,
        series: e.target.value,
      },
    });
  }

  handlerChangeNumber = e => {
    this.setState({
      passport: {
        ...this.state.passport,
        number: e.target.value,
      },
    });
  }

  handlerChangeDepartment = e => {
    this.setState({
      passport: {
        ...this.state.passport,
        department: e.target.value,
      },
    });
  }

  handlerChangePassportDate = e => {
    this.setState({
      passport: {
        ...this.state.passport,
        date: e ? e.valueOf() : null,
      },
    });
  }

  handlerChangePassportRegistration = e => {
    this.setState({
      passport: {
        ...this.state.passport,
        registration: e.target.value,
      },
    });
  }

  handlerChangePhone = e => {
    this.setState({
      phone: e.target.value,
    });
  }

  handlerChangeEmail = e => {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangeImg = data => {
    console.log(data);
  }

  uploader = new FineUploaderTraditional({
    options: {
      deleteFile: {
        enabled: true,
        endpoint: `${hostUrl + apiUrl}tools/picture/delet/`,
      },
      request: {
        endpoint: `${hostUrl + apiUrl}tools/picture/add/`,
        customHeaders: {
          login: localStorage.getItem('login'),
          token: localStorage.getItem('token'),
        },
      },
    },
  });

  render() {
    const { triggerEditBuyer } = this.props;

    const handlerClickSubmitBtn = () => {
      this.props.form.submit(handleSubmit);
    };

    const handleSubmit = e => {
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.saveBuyer({
            NAME: this.state.FIO,
            PROPERTY_KLIENT_FIO: this.state.FIO,
            PROPERTY_KLIENT_TLF: this.state.phone,
            PROPERTY_KLIENT_EMAIL: this.state.email,
          });
        }
      });
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Row gutter={16}>
          <Col span={24}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('legal', { valuePropName: 'checked' })(
                <RadioGroup value={this.state.legal} onChange={this.triggerLegal} >
                  <Radio value={1}>Физическое лицо</Radio>
                  <Radio value={2}>Юридическое лицо</Radio>
                </RadioGroup>,
              )}
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
              {getFieldDecorator('FIO', { valuePropName: 'checked', rules: [{ required: true }] })(
                <Input placeholder="Петров Петр Петрович" value={this.state.FIO} onChange={this.handlerChangeFIO} />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={7}>
            <FormItem {...formItemLayout} label="Серия паспорта">
              <Input placeholder="XX XX" value={this.state.passport.series} onChange={this.handlerChangeSeries} />
            </FormItem>
          </Col>
          <Col span={17}>
            <FormItem {...formItemLayout} label="Номер паспорта">
              <Input placeholder="XXXXXX" value={this.state.passport.number} onChange={this.handlerChangeNumber} />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Кем выдан">
              <Input value={this.state.passport.department} onChange={this.handlerChangeDepartment} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Когда выдан">
              <DatePicker
                value={this.state.passport.date ? moment(this.state.passport.date) : null}
                format="DD.MM.YYYY"
                onChange={this.handlerChangePassportDate}
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <FormItem {...formItemLayout} label="Где зарегистрирован">
              <Input value={this.state.passport.registration} onChange={this.handlerChangePassportRegistration} />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Телефон">
              {getFieldDecorator('phone', { valuePropName: 'checked', rules: [{ required: true }] })(
                <Input placeholder="+7 9XX XXX XX XX" value={this.state.phone} onChange={this.handlerChangePhone} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Email">
              <Input placeholder="email@email.com" value={this.state.email} onChange={this.handlerChangeEmail} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploader} >
                <FileInput multiple uploader={this.uploader} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploader} >
                <FileInput multiple uploader={this.uploader} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploader} >
                <FileInput multiple uploader={this.uploader} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploader} >
                <FileInput multiple uploader={this.uploader} />
              </Dropzone>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: "30px" }}>
          <Button onClick={triggerEditBuyer} style={{ marginRight: '10px' }}>Назад</Button>
          <Button onClick={handlerClickSubmitBtn} type="primary">Добавить</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(BueyrEditor);
