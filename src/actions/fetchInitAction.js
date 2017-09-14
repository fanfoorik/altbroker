import * as types from 'constants/headerTypes';
import ajax from 'utils/ajax';

const fetchInit = () => (dispatch) => {
  ajax.get('init/')
    .then((data) => {
      const {
        MENU: menu,
        PATCHNOUTS: patchNotes,
        USER: usertop,
        STICKERS: stickers,
      } = data.ANSWER;

      dispatch({
        type: types.SET_PATCH_NOTES,
        payload: patchNotes,
      });

      dispatch({
        type: types.SET_USER,
        payload: usertop,
      });

      dispatch({
        type: types.SET_NAVIGATION,
        payload: menu,
      });

      dispatch({
        type: types.SET_STICKERS,
        payload: stickers,
      });
    });
};

export default fetchInit;
