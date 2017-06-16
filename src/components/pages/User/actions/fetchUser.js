import ajax from 'utils/ajax';
import { SET_USER_DATA, SET_USER_WORK, SET_USER_CONTACTS } from 'constants/userTypes';

export default function fetchUser(userId) {
  return (dispatch) => {
    ajax.get(`user/${userId}/`)
      .then((data) => {
        const { USER: user } = data.ANSWER;

        dispatch({
          type: SET_USER_DATA,
          payload: user,
        });

        dispatch({
          type: SET_USER_WORK,
          payload: user,
        });

        dispatch({
          type: SET_USER_CONTACTS,
          payload: user,
        });
      });
  };
}
