import React from 'react';

import Icon from 'components/Icon';

const base = [{
  title: '#',
  dataIndex: 'number',
}, {
  title: 'Этап',
  dataIndex: 'step',
}, {
  title: 'Сумма',
  dataIndex: 'sum',
}, {
  title: 'Комиссия',
  dataIndex: 'comission',
}, {
  title: 'Брокер',
  dataIndex: 'broker',
}, {
  title: 'Юрист',
  dataIndex: 'lawyer',
}, {
  title: 'Создана',
  dataIndex: 'creating',
}, {
  title: 'Окончание',
  dataIndex: 'ending',
}, {
  title: <Icon icon="info" width={20} height={20} />,
  dataIndex: 'action',
}];

export default {
  sale: [...base.slice(0, 5), {
    title: 'Продавец',
    dataIndex: 'salary',
  }, ...base.slice(5)],
  search: [...base.slice(0, 5), {
    title: 'Покупатель',
    dataIndex: 'buyer',
  }, ...base.slice(5)],
  deal: [...base.slice(0, 5), {
    title: 'Продавец',
    dataIndex: 'salary',
  },
    {
      title: 'Покупатель',
      dataIndex: 'npm ',
    }, ...base.slice(5)],
};
