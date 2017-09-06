import * as types from 'constants/headerTypes';
import ajax from 'utils/ajax';

function parseMenu(menu) {
  return Object.keys(menu).map((item) => {
    const subnav = menu[item].CHILDREN;
    return {
      ...menu[item],
      subnav: Object.keys(subnav).map(sublink => subnav[sublink]),
    };
  });
}

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
        payload: parseMenu(menu),
      });

      dispatch({
        type: types.SET_STICKERS,
        payload: stickers,
      });
    });
};

export default fetchInit;
