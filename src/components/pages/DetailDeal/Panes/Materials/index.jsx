import React, { Component } from 'react';
import {
  Row,
  Col,
  Anchor,
  Table,
  Avatar,
} from 'antd';

const { Link } = Anchor;

import style from './materials.module.less';

class Materials extends Component {
  render() {
    const onChange = () => {};
    const columns = [
      { title: 'Id', dataIndex: 'id' },
      { title: 'img', dataIndex: 'img' },
      { title: 'description', dataIndex: 'description', width: 160 },
      { title: 'price', dataIndex: 'price' },
      { title: 'income', dataIndex: 'income' },
    ];

    const data =
      [
        {
          key: 1,
          id: 433434,
          img: <Avatar shape="square" size="large" icon="user" />,
          description: 'Деревообрабатывающее производство полного цикла в Ленинградской области',
          price: '250 000 000',
          income: '800 000',
        },
        {
          key: 2,
          id: 433434,
          img: <Avatar shape="square" size="large" icon="user" />,
          description: 'Деревообрабатывающее производство полного цикла в Ленинградской области',
          price: '250 000 000',
          income: '800 000',
        },
      ];
    return (
      <Row gutter={16}>
        <Col span={6}>
          <div>
            <Anchor offsetTop={80} >
              <Link href="#dou" title="ДОУ" />
              <Link href="#objects" title="Объекты" />
              <Link href="#act" title="Акт о закрытии" />
            </Anchor>
          </div>
        </Col>
        <Col span={18}>
          <div id="dou" className={style.section}>
            <h2>ДОУ</h2>
            <p>
              Использовать шаблонный договор или поставить задачу юристу на
              создание нестандартного договора?
            </p>
            <button className="btn" style={{ marginRight: '20px' }} >Шаблон</button>
            <button className="btn">Задачу юристу</button>
          </div>
          <div id="objects" className={style.section}>
            <h2>Объекты</h2>
            <Table
              columns={columns}
              pagination={false}
              showHeader={false}
              dataSource={data}
              onChange={onChange}
              style={{ fontSize: '12px', lineHeight: '16px' }}
            />
          </div>
          <div id="act" className={style.section}>
            <h2>Акт о закрытии</h2>
            <p>
              Этим актом будет подтверждено полная передача документов и
              завершнеие трансферных переводов.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Materials;
