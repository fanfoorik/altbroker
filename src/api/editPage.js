import ajax from 'utils/ajax';

export const fetchData = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`)
  .then((data) => {
    const answer = data.ANSWER.FIELDS;

    context.setState({
      data: answer,
      selectValues:
      {
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
      context.setState({
        lib: {
          cities: data.ANSWER.ALL_CITY,
          metro: data.ANSWER.ALL_METRO,
          categories: data.ANSWER.ALL_CATEGORY_GB_1,
          sources: data.ANSWER.PROPERTY_SOURCE,
          reasons: data.ANSWER.PROPERTY_REASON_FOR_SALE,
          advantages: data.ANSWER.PROPERTY_DOP_ICON,
        },
      });
    });
};
