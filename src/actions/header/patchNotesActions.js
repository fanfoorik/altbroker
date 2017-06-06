import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { SET_PATCH_NOTES, TRIGGER_PATCH_NOTES } from 'constants/headerTypes';

export const fetchPatchNotes = url => (dispatch) => {
  ajax.get(
    url,
    { headers: getHeaders() })
    .then((response) => {
      dispatch({
        type: SET_PATCH_NOTES,
        payload: response.data.ANSWER,
      });
    })
    .catch(error => handleError(error, dispatch));
};

export const triggerPatchNotes = () => {
  return { type: TRIGGER_PATCH_NOTES };
};
