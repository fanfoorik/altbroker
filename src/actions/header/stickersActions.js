import ajax from 'utils/ajax';
import { SET_STICKERS, TRIGGER_STICKERS } from 'constants/headerTypes';

function fetchStickers(dispatch) {
  ajax.post('tools/stiker/')
    .then((data) => {
      dispatch({
        type: SET_STICKERS,
        payload: data.ANSWER,
      });
    });
}

export const addSticker = (text, color) => (dispatch) => {
  ajax.post('tools/stiker/add/',
    { COLOR: color, TEXT: text })
    .then(() => fetchStickers(dispatch));
};

export const removeSticker = id => (dispatch) => {
  ajax.post(`tools/stiker/${id}/delete/`)
    .then(() => fetchStickers(dispatch));
};

export const restoreSticker = id => (dispatch) => {
  ajax.post(`tools/stiker/${id}/restore/`)
    .then(() => fetchStickers(dispatch));
};

export const triggerStickers = (id) => {
  return {
    type: TRIGGER_STICKERS,
    payload: id,
  };
};

export const updateStickersOrder = sortedIds => (dispatch) => {
  ajax.post('tools/stiker/',
    { SORT: sortedIds })
    .then((data) => {
      dispatch({
        type: SET_STICKERS,
        payload: data.ANSWER,
      });
    });
};
