import ajax from 'utils/ajax';
import { NotificationManager } from 'react-notifications';

export const fetchDataForEditPage = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`)
  .then((data) => {
    const fields = data.ANSWER.FIELDS;
    context.setState({
      data: fields,
      selectValues:
      {
        Basic: {
          NAME: fields.NAME,
          PROPERTY_GEO_ID: fields.PROPERTY_GEO_ID,
          PROPERTY_METRO_NEW: fields.PROPERTY_METRO_NEW,
          SECTION_ID_1: fields.SECTION_ID_1,
          PROPERTY_RAYON2: fields.PROPERTY_RAYON2,
          SECTION_ID_2: fields.SECTION_ID_2,
          PROPERTY_DOP_INFO: fields.PROPERTY_DOP_INFO,
          PROPERTY_SOURCE: fields.PROPERTY_SOURCE,
          PROPERTY_REASON_FOR_SALE: fields.PROPERTY_REASON_FOR_SALE,
          PROPERTY_DOP_ICON: fields.PROPERTY_DOP_ICON,
        },
        Finance: {
          PROPERTY_PRICE_BUSINESS: fields.PROPERTY_PRICE_BUSINESS,
          PROPERTY_CHIST_PRIB: fields.PROPERTY_CHIST_PRIB,
          PROPERTY_OKUP: fields.PROPERTY_OKUP,
          PROPERTY_SREDMES_OBOR: fields.PROPERTY_SREDMES_OBOR,
          PROPERTY_SREDMES_RASH: fields.PROPERTY_SREDMES_RASH,
        },
        Staff: {
          PROPERTY_KOLVO_SOTR: fields.PROPERTY_KOLVO_SOTR,
          PROPERTY_FOND_ZP: fields.PROPERTY_FOND_ZP,
          PROPERTY_STATE_INFORMATION: fields.PROPERTY_STATE_INFORMATION,
        },
        Building: {
          PROPERTY_SOBSTVEN: (fields.PROPERTY_SOBSTVEN === 'Y'),
          PROPERTY_LANDLORD: fields.PROPERTY_LANDLORD,
          PROPERTY_S_POM: fields.PROPERTY_S_POM,
          PROPERTY_RENT_PRICE: fields.PROPERTY_RENT_PRICE,
          PROPERTY_S_UCH: fields.PROPERTY_S_UCH,
          PROPERTY_ADDITIONAL_INFORMATION: fields.PROPERTY_ADDITIONAL_INFORMATION,
        },
        Asset: {
          PROPERTY_OPF: fields.PROPERTY_OPF,
          PROPERTY_DOLYA: fields.PROPERTY_DOLYA,
          PROPERTY_VOZR_BUSINESS: fields.PROPERTY_VOZR_BUSINESS,
          PROPERTY_DOP_BUSINESS_INFO: fields.PROPERTY_DOP_BUSINESS_INFO,
          PROPERTY_SRV_PRZ: fields.PROPERTY_SRV_PRZ,
          PROPERTY_NEM_ACT: fields.PROPERTY_NEM_ACT,
          PROPERTY_DOC_LIC: fields.PROPERTY_DOC_LIC,
        },
        Salary: {
          PROPERTY_KLIENT_FIO: fields.PROPERTY_KLIENT_FIO,
          PROPERTY_KLIENT_TLF: fields.PROPERTY_KLIENT_TLF,
          PROPERTY_KLIENT_EMAIL: fields.PROPERTY_KLIENT_EMAIL,
          PROPERTY_KLIENT_SAIT: fields.PROPERTY_KLIENT_SAIT,
          PROPERTY_KLIENT_MESTO: fields.PROPERTY_KLIENT_MESTO,
        },
        Gallery: {
          PROPERTY_IMGS_PRE: fields.PROPERTY_IMGS_FULL,
          PROPERTY_HIDE_IMGS_PRE: fields.PROPERTY_HIDE_IMGS_FULL,
        },
      },
    });
  });
};

export const fetchLib = (context) => {
  ajax.get('broker/gb/add/')
    .then((data) => {
      const answer = data.ANSWER;
      context.setState({
        lib: {
          cities: answer.ALL_CITY.map(city => ({
            value: city.ID,
            label: city.NAME,
          })),
          metro: answer.ALL_METRO,
          categories: answer.ALL_CATEGORY_GB_1.map(category => ({
            label: category.NAME,
            value: category.ID,
          })),
          categories2: answer.ALL_CATEGORY_GB_2,
          sources: answer.PROPERTY_SOURCE.map(source => ({
            value: source.ID,
            label: source.VALUE,
          })),
          reasons: answer.PROPERTY_REASON_FOR_SALE.map(reason => ({
            value: reason.ID,
            label: reason.NAME,
          })),
          advantages: answer.PROPERTY_DOP_ICON.map(advantage => ({
            label: advantage.VALUE,
            value: advantage.ID,
          })),
          opf: answer.PROPERTY_OPF.map(opf => ({
            label: opf.VALUE,
            value: opf.ID,
          })),
          landlord: answer.PROPERTY_LANDLORD.map(landlord => ({
            label: landlord.VALUE,
            value: landlord.ID,
          })),
        },
      });
    });
};

export const sendDataFromEditPage = (context, section) => {
  let newState = {
    ...context.state.data,
    ...context.state.selectValues[section],
  };

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

  ajax.post(`broker/gb/${context.props.params.id}/edit/`, newState).then((result) => {
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
