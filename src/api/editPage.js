import ajax from 'utils/ajax';

export const fetchData = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`)
  .then((data) => {
    const answer = data.ANSWER.FIELDS;

    context.setState({
      data: answer,
      selectValues: {
        city: answer.PROPERTY_GEO_ID,
        metro: answer.PROPERTY_METRO_NEW,
        name: answer.NAME,
        section: answer.SECTION_ID,
        source: answer.PROPERTY_SOURCE,
        reason: answer.PROPERTY_REASON_FOR_SALE,
        advantages: answer.PROPERTY_DOP_ICON,
        description: answer.PROPERTY_DOP_INFO,
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
        },
      });
    });
};

export const sendData = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`, {
    ID: context.props.params.id,
    PROPERTY_GEO_ID: context.state.selectValues.city,
    PROPERTY_METRO_NEW: context.state.selectValues.metro,
    "NAME": "Тестовый новый объектииии",
    "PROPERTY_RAYON2": "409748",
    "SECTION_ID": [
      "6208"
    ],
    "PROPERTY_DOP_INFO": "Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;Большое текстовое описание&nbsp;",
    "PROPERTY_SOURCE": "17727",
    "PROPERTY_DOP_ICON": [
      "11671",
      "11673",
      "11679",
      "11692",
      "11700",
      "11701"
    ],
    "PROPERTY_IMGS": [
      "/upload/resize_cache/iblock/196/296_200_2/196ee6cfabd43390c6be7c928bc81fff.jpg",
      "/upload/resize_cache/iblock/92e/296_200_2/92ef76a9e8fea1c6c2fcbced4b86318a.jpg"
    ],
    "PROPERTY_PRICE_BUSINESS": "10000000",
    "PROPERTY_CHIST_PRIB": "100000",
    "PROPERTY_OKUP": "100",
    "PROPERTY_SREDMES_OBOR": "500000",
    "PROPERTY_SREDMES_RASH": "350000",
    "PROPERTY_KOLVO_SOTR": "2",
    "PROPERTY_FOND_ZP": "20000",
    "PROPERTY_STATE_INFORMATION": "<br>\r\n Информация о штате&nbsp;Информация о штате&nbsp;<br>2.<br>3.<br><br>",
    "PROPERTY_SOBSTVEN": "Y",
    "PROPERTY_LANDLORD": "Собственность",
    "PROPERTY_S_POM": "150",
    "PROPERTY_RENT_PRICE": "200",
    "PROPERTY_S_UCH": "350",
    "PROPERTY_ADDITIONAL_INFORMATION": "Дополнительная информация&nbsp;",
    "PROPERTY_OPF": "11624",
    "PROPERTY_DOLYA": "100",
    "PROPERTY_VOZR_BUSINESS": "2",
    "PROPERTY_DOP_BUSINESS_INFO": "",
    "PROPERTY_SRV_PRZ": "Перечисление<br>в столбик<br>вот<br>",
    "PROPERTY_NEM_ACT": "",
    "PROPERTY_DOC_LIC": "активы<br>всякие<br>разные<br><br>",
    "PROPERTY_KLIENT_FIO": "Продаец",
    "PROPERTY_KLIENT_TLF": "+79999999999",
    "PROPERTY_KLIENT_EMAIL": "test@test.ru",
    "PROPERTY_KLIENT_SAIT": "test.ru",
    "PROPERTY_KLIENT_MESTO": "Kgd"
  })
  .then((result) => {
    console.log(result);
  });
};
