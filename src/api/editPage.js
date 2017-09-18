import ajax from 'utils/ajax';
import { NotificationManager } from 'react-notifications';

export const fetchDataForEditPage = id => ajax.post(`broker/gb/${id}/edit/`);

export const fetchLib = () => ajax.get('broker/gb/add/');

export const sendDataFromEditPage = (id, newState, section) => {

  newState.PROPERTY_SOBSTVEN = newState.PROPERTY_SOBSTVEN ? 'Y' : 'N';
  const sumAllField = Object.keys(newState).length;

  let sumFilledField = 0;
  Object.values(newState).map(value => {
    if (value !== undefined && value !== null && value.length !== 0) {
      sumFilledField += 1;
    }
  });

  newState = Object.assign(newState, {
    ACTION: 'EDIT',
    BUTT_PRESS: 'SAVE',
    PROPERTY_IMGS: newState.PROPERTY_IMGS_PRE,
    PROPERTY_HIDE_IMGS: newState.PROPERTY_HIDE_IMGS_PRE,
    SECTION_ID: [...newState.SECTION_ID_1, ...newState.SECTION_ID_2],
    QUALITY_FORM_FILL: Math.ceil(100 * sumFilledField) / (sumAllField || 1),
  });

  delete newState.PROPERTY_IMGS_PRE;
  delete newState.PROPERTY_HIDE_IMGS_PRE;
  delete newState.PROPERTY_IMGS_FULL;
  delete newState.PROPERTY_HIDE_IMGS_FULL;

  ajax.post(`broker/gb/${id}/edit/`, newState).then((result) => {
    if (result.ANSWER.SUCCESS) {
      NotificationManager.success('ДАННЫЕ ОБНОВЛЕНЫ', 'OK');
    } else {
      NotificationManager.error('Извините на сервере произошла ошибка!', 'ОШИБКА');
    }
  });
};

export const deleteImg = (PIC_ID = '', PIC_URL = '', ELEMENT_ID = '') => {
  return ajax.post('tools/picture/delet/', {
    PIC_ID,
    PIC_URL,
    ELEMENT_ID,
  });
};
