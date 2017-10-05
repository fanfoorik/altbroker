import ajax from 'utils/ajax';
import { formatNumber } from 'utils/formaters';
import { TYPE_CODE_FOR_FILTER } from 'constants/deal';

export const getDeal = (page = 1, count = 10, type = 'sale') => ajax.post('/finance/deal/', {
  SORT_CODE: ['ID'],
  SORT_METOD: ['ASC'],
  PAGE: page,
  COUNT: count,
  FILTER: {
    ID: '',
    PROPERTY_TIP: TYPE_CODE_FOR_FILTER[type],
  },
}).then(data => ({
  data: data.ANSWER.ITEMS.map(deal => ({
    key: deal.ID,
    number: deal.ID,
    step: `${deal.PROPERTY_STAGE || 1} / 8 Основной договор`,
    sum: formatNumber(parseInt(deal.PROPERTY_COST, 10), ''),
    comission: formatNumber(parseInt(deal.PROPERTY_COMMISSION, 10), ''),
    creating: deal.DATE_CREATE.split(' ')[0],
    ending: '12.03.18',
    _broker: deal.PROPERTY_BROKER.map((id, key) => ({
      name: deal.PROPERTY_BROKER[key].SHOT_NAME,
      id: deal.PROPERTY_BROKER[key].ID,
    })),
    _lawyer: deal.PROPERTY_LAWYER.map((id, key) => ({
      name: deal.PROPERTY_LAWYER[key].SHOT_NAME,
      id: deal.PROPERTY_LAWYER[key].ID,
    })),
    _salary: deal.PROPERTY_SELLER.map((id, key) => ({
      name: deal.PROPERTY_SELLER[key].PROPERTY_KLIENT_FIO_VALUE,
      id: deal.PROPERTY_SELLER[key].ID,
    })),
    _buyer: deal.PROPERTY_SELLER.map((id, key) => ({
      name: deal.PROPERTY_SELLER[key].PROPERTY_KLIENT_FIO_VALUE,
      id: deal.PROPERTY_SELLER[key].ID,
    })),
  })),

  pager: data.ANSWER.NAV,
})).catch(e => {
  return null;
});

export const editDeal = id => ajax.post(`/finance/deal/${id}/edit/`).then(response => {
  return response.ANSWER
});

export const saveDeal = data => {
  const dataForSending = {
    ...data,
    ACTION: 'EDIT',
    BUTT_PRESS: 'SAVE',
  };

  return ajax.post(`/finance/deal/${data.ID}/edit/`, dataForSending);
};
