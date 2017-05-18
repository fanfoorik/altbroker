import { apiUrl } from 'utils/urls';
import { SET_STICKERS, TRIGGER_STICKERS } from 'constants/headerTypes';
import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';

function fetchStickers(dispatch) {
  ajax.post(`${apiUrl}tools/stiker/`, {},
    {
      headers: getHeaders(),
    })
    .then(res => res.data)
    .then((data) => {
      dispatch({
        type: SET_STICKERS,
        payload: data.ANSWER,
      });
    })
    .catch(error => handleError(error));
}

export const addSticker = (text, color) => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/add/`,
    {
      TEXT: text,
      COLOR: color,
    },
    {
      headers: getHeaders(),
    })
    .then(res => res.data)
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const removeSticker = id => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/${id}/delete/`, {},
    {
      headers: getHeaders(),
    })
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const restoreSticker = id => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/${id}/restore/`, {},
    {
      headers: getHeaders(),
    })
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const triggerStickers = (id) => {
  return {
    type: TRIGGER_STICKERS,
    payload: id,
  };
};
