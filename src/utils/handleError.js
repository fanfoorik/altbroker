import { AUTH_USER } from 'constants/authTypes';

export default (error, dispatch) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const errors = error.response.data.ERRORS;

    if (errors.length && errors[0].CODE === 1301 && dispatch) {
      localStorage.removeItem('login');
      localStorage.removeItem('token');
      dispatch({ type: AUTH_USER, payload: false });
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error('error.request -', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }

  console.error('error.config-', error.config);
};
