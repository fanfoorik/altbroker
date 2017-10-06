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
  Table,
} from 'antd';
import Filename from 'react-fine-uploader/filename';

import Switcher from 'components/ui/Switcher';
import {
  hostUrl,
  apiUrl,
} from 'utils/urls';
import InputPhone from 'components/ui/inputs/InputPhone';
import InputNumber from 'components/ui/inputs/InputNumber';

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

const fineUploaderSettings = {
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
};

const columns = [
  { title: 'Column 4', dataIndex: 'preview' },
  { title: 'Column 4', dataIndex: 'type' },
  { title: 'Column 4', dataIndex: 'nameFile' },
  { title: 'Column 4', dataIndex: 'dateUpload' },
  { title: 'Column 4', dataIndex: 'actions' },
];

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
    documents: [
      // {
      //   id: 0,
      //   preview: 'HELLO',
      //   type: 'СНИЛС',
      //   fileName: '123.jpg',
      //   dateUpload: '12.07.2017',
      //   action: 'just do it!',
      // },
    ],
    phone: '',
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

  handlerChangeSeries = value => {
    this.setState({
      passport: {
        ...this.state.passport,
        series: value,
      },
    });
  }

  handlerChangeNumber = value => {
    this.setState({
      passport: {
        ...this.state.passport,
        number: value,
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

  handlerChangePhone = value => {
    this.setState({
      phone: value,
    });
  }

  handlerChangeEmail = e => {
    this.props.form.setFieldsValue({
      email: e.target.value,
    });

    this.setState({
      email: this.props.form.getFieldValue('email'),
    });
  }

  componentDidMount() {
    this.uploaderInn.on('statusChange', (id, oldStatus, newStatus) => {
      if (newStatus === 'submitting') {
        this.setState({
          documents: [...this.state.documents, { id }],
        });
      }
    });

    this.uploaderInn.on('complete', (id, name, resp, responseJSON) => {
      console.log(JSON.parse(responseJSON.response));
    });

    this.uploaderPassport.on('complete', (id, name, resp, responseJSON) => {
      console.log(responseJSON);
    });

    this.uploaderSnils.on('complete', (id, name, resp, responseJSON) => {
      console.log(responseJSON);
    });

    this.uploaderOther.on('complete', (id, name, resp, responseJSON) => {
      console.log(responseJSON);
    });
  }

  uploaderInn = new FineUploaderTraditional(fineUploaderSettings);
  uploaderPassport = new FineUploaderTraditional(fineUploaderSettings);
  uploaderSnils = new FineUploaderTraditional(fineUploaderSettings);
  uploaderOther = new FineUploaderTraditional(fineUploaderSettings);

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
            PROPERTY_KLIENT_MESTO: null,
            PROPERTY_KLIENT_SAIT: null,

            PROPERTY_PASS_SERIES: this.state.passport.series,
            PROPERTY_PASS_NUMBER: this.state.passport.number,
            PROPERTY_PASS_ISSUED: this.state.passport.department,
            PROPERTY_PASS_ISSUED_DATE: this.state.passport.date,
            PROPERTY_PASS_REGISTRATION: this.state.passport.reegistration,

            PROPERTY_SCAN_INN: [],
            PROPERTY_SCAN_PASS: [],
            PROPERTY_SCAN_SNILS: [],

            PROPERTY_INDIVIDUAL: this.state.legal === 1 ? 'Y' : 'N',
            PROPERTY_SELLER: null,
            PROPERTY_BUYER: null,
            PROPERTY_ENTITY: this.state.legal === 2 ? 'Y' : 'N',

            PROPERTY_COMPANY_OWNERSHIP: null,
            PROPERTY_COMPANY_OGRN: null,
            PROPERTY_COMPANY_INN: null
          });
        }
      });
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
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
              <InputNumber type="passport_series" placeholder="XX XX" value={this.state.passport.series} onChange={this.handlerChangeSeries} />
            </FormItem>
          </Col>
          <Col span={17}>
            <FormItem {...formItemLayout} label="Номер паспорта">
              <InputNumber type="passport_number" placeholder="XXXXXX" value={this.state.passport.number} onChange={this.handlerChangeNumber} />
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
              {getFieldDecorator('phone', {
                valuePropName: 'checked',
                rules: [
                  {
                    required: true,
                    message: 'Необходимо ввести номер телефона',
                  },
                  {
                    pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/gim,
                    message: 'Неверный формат номера телефона',
                  },
                ],
              })(
                <InputPhone value={this.state.phone} onChange={this.handlerChangePhone} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email',
                  message: 'Неверный формат email!',
                }],
              })(
                <Input placeholder="email@email.com" onChange={this.handlerChangeEmail} />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            {/* <Table
              pagination={false}
              showHeader={false} 
              columns={columns}
              dataSource={this.state.documents}
            /> */}
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone uploader={this.uploaderInn} >
                <FileInput uploader={this.uploaderInn} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploaderPassport} >
                <FileInput multiple uploader={this.uploaderPassport} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone uploader={this.uploaderSnils} >
                <FileInput uploader={this.uploaderSnils} />
              </Dropzone>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100px", margin: "0 auto" }}>
              <Dropzone multiple uploader={this.uploaderOther} >
                <FileInput multiple uploader={this.uploaderOther} />
              </Dropzone>
            </div>
          </Col>
        </Row>
        {
          this.state.documents.map((document, key) => {
            console.log(document)
            return (
              <Filename key={key} id={document.id} uploader={this.uploaderInn} />
            );
          })
        }

        <div style={{ marginTop: "30px" }}>
          <Button onClick={triggerEditBuyer} style={{ marginRight: '10px' }}>Назад</Button>
          <Button onClick={handlerClickSubmitBtn} type="primary">Добавить</Button>
        </div>
      </div>
    );
  }
}

export default BueyrEditor;
