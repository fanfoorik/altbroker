import ajax from 'utils/ajax';
import {
  SET_GB_LISTING,
  SET_GB_FILTER,
  UPDATE_GB_OPTIONS,
} from 'constants//GBTypes';

function listingAjax(dispatch, getState) {
  ajax.post('broker/gb/', getState().GB.options)
    .then((data) => {
      dispatch({
        type: SET_GB_LISTING,
        payload: data.ANSWER,
      });
    });
}

export const fetchGBListing = () => (dispatch, getState) => {
  listingAjax(dispatch, getState);
};

export const updateGBOptions = options => (dispatch, getState) => {
  dispatch({
    type: UPDATE_GB_OPTIONS,
    payload: options,
  });

  listingAjax(dispatch, getState);
};

export const fetchGBfilter = () => (dispatch) => {
  ajax.post('broker/gb/getfilter/')
    .then((data) => {
      dispatch({
        type: SET_GB_FILTER,
        payload: data.ANSWER,
      });
    });
};
