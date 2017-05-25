import { SET_PATCH_NOTES, TRIGGER_PATCH_NOTES } from 'constants/headerTypes';
import ajax from 'utils/ajax';
import handleError from 'utils/handleError';

export const fetchPatchNotes = url => (dispatch) => {
  ajax.get(
    url,
    {
      headers: {
        login: localStorage.getItem('login'),
        token: localStorage.getItem('token'),
      },
    })
    .then(res => res.data)
    .then((data) => {
      dispatch({
        type: SET_PATCH_NOTES,
        payload: data.ANSWER,
      });
    })
    .catch(error => handleError(error, dispatch));
};

export const triggerPatchNotes = () => {
  return { type: TRIGGER_PATCH_NOTES };
};
