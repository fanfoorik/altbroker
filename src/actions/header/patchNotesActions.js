import ajax from 'utils/ajax';
import { SET_PATCH_NOTES, TRIGGER_PATCH_NOTES } from 'constants/headerTypes';

export const fetchPatchNotes = url => (dispatch) => {
  ajax.get(url)
    .then((data) => {
      dispatch({
        type: SET_PATCH_NOTES,
        payload: data.ANSWER,
      });
    });
};

export function triggerPatchNotes() {
  return { type: TRIGGER_PATCH_NOTES };
}
