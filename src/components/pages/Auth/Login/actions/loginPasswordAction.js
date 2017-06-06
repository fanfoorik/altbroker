import { LOGIN_SET_PASSWORD } from 'constants/authTypes';

export default value => (dispatch) => {
  if (value.length < 5) {
    dispatch({
      type: LOGIN_SET_PASSWORD,
      payload: {
        value,
        valid: false,
      },
    });
  } else {
    dispatch({
      type: LOGIN_SET_PASSWORD,
      payload: {
        value,
        valid: true,
      },
    });
  }
};
