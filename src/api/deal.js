import ajax from 'utils/ajax';
import { formatNumber } from 'utils/formaters';
import { TYPE_CODE_FOR_FILTER } from 'constants/deal';

export const getDeal = (page = 1, count = 10, type = 'sale') => ajax.post('deal/', {
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
    step: `${deal.PROPERTY_STAGE.VALUE} / 8 Основной договор`,
    sum: formatNumber(parseInt(deal.PROPERTY_COST.VALUE, 10), ''),
    comission: formatNumber(parseInt(deal.PROPERTY_COMMISSION.VALUE, 10), ''),
    creating: deal.DATE_CREATE.split(' ')[0],
    ending: '12.03.18',
    _broker: deal.PROPERTY_BROKER.VALUE.map(id => ({
      name: deal.PROPERTY_BROKER.DATA[id].SHOT_NAME,
      id: deal.PROPERTY_BROKER.DATA[id].ID,
    })),
    _lawyer: deal.PROPERTY_LAWYER.VALUE.map(id => ({
      name: deal.PROPERTY_LAWYER.DATA[id].SHOT_NAME,
      id: deal.PROPERTY_LAWYER.DATA[id].ID,
    })),
    _salary: deal.PROPERTY_SELLER.VALUE.map(id => ({
      name: deal.PROPERTY_SELLER.DATA[id].PROPERTY_KLIENT_FIO_VALUE,
      id: deal.PROPERTY_SELLER.DATA[id].ID,
    })),
    _buyer: deal.PROPERTY_SELLER.VALUE.map(id => ({
      name: deal.PROPERTY_SELLER.DATA[id].PROPERTY_KLIENT_FIO_VALUE,
      id: deal.PROPERTY_SELLER.DATA[id].ID,
    })),
  })),

  pager: data.ANSWER.NAV,
}),
).catch(e => {
  return [];
});

export const editDeal = id => ajax.post(`/deal/${id}/edit/`);
