import ajax from 'utils/ajax';

export const fetchData = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`)
  .then(data => context.setState({ selectValues: data.ANSWER.FIELDS }));
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

export const sendData = (context) => {
  ajax.post(`broker/gb/${context.props.params.id}/edit/`, Object.assign(context.state.selectValues, {
    ACTION: 'EDIT',
    BUTT_PRESS: 'SAVE',
  }));
};
