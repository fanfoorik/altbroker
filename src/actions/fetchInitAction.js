import * as types from 'constants/headerTypes';
import ajax from 'utils/ajax';

function parseNav(menu) {
  const nav = [];
  // TODO: To fix linting errors.
  for (const el in menu) {
    const origSubnav = menu[el].CHILDREN;
    menu[el].subnav = [];

    for (const childEl in origSubnav) {
      menu[el].subnav.push(origSubnav[childEl]);
    }

    delete menu[el].CHILDREN;
    nav.push(menu[el]);
  }

  return nav;
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
        payload: parseNav(menu),
      });

      dispatch({
        type: types.SET_STICKERS,
        payload: stickers,
      });
    });
};

export default fetchInit;
