import ajax from 'utils/ajax';
import { NotificationManager } from 'react-notifications';

export const saveData = (data, draft = false) => {
  data.BUTT_PRESS = draft ? 'CHERNOVIK' : 'SAVE';
  data.SECTION_ID = [...data.SECTION_ID_1, ...data.SECTION_ID_2];
  data.PROPERTY_IMGS = data.PROPERTY_IMGS_PRE;
  data.PROPERTY_HIDE_IMGS = data.PROPERTY_HIDE_IMGS_PRE;

  delete data.PROPERTY_IMGS_PRE;
  delete data.PROPERTY_HIDE_IMGS_PRE;
  delete data.PROPERTY_IMGS_FULL;
  delete data.PROPERTY_HIDE_IMGS_FULL;

  return ajax.post('broker/gb/add/', data).then((result) => {
    if (result.ANSWER.SUCCESS) {
      NotificationManager.success('Объект добавлен', 'OK');
      return result.ANSWER.ID;
    } else {
      NotificationManager.error('Извините на сервере произошла ошибка!', 'ОШИБКА');
    }
  });
};
