import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';
import { SET_STICKERS, TRIGGER_STICKERS } from 'constants/headerTypes';

function fetchStickers(dispatch) {
  ajax.post(`${apiUrl}tools/stiker/`, {},
    { headers: getHeaders() })
    .then((response) => {
      dispatch({
        type: SET_STICKERS,
        payload: response.data.ANSWER,
      });
    })
    .catch(error => handleError(error));
}

export const addSticker = (text, color) => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/add/`,
    {
      COLOR: color,
      TEXT: text,
    },
    { headers: getHeaders() })
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const removeSticker = id => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/${id}/delete/`, {},
    { headers: getHeaders() })
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const restoreSticker = id => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/${id}/restore/`, {},
    { headers: getHeaders() })
    .then(() => fetchStickers(dispatch))
    .catch(error => handleError(error, dispatch));
};

export const triggerStickers = (id) => {
  return {
    type: TRIGGER_STICKERS,
    payload: id,
  };
};

export const updateStickersOrder = sortedIds => (dispatch) => {
  ajax.post(`${apiUrl}tools/stiker/`,
    {
      SORT: sortedIds,
    },
    { headers: getHeaders() })
    .then((response) => {
      dispatch({
        type: SET_STICKERS,
        payload: response.data.ANSWER,
      });
    })
    .catch(error => handleError(error));
};
