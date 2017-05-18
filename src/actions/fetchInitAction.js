import { apiUrl } from 'utils/urls.js';
import * as types from 'constants/headerTypes';
import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';

function parseNav(menu) {
  const nav = [];

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
  ajax.get(
    `${apiUrl}init/`,
    {
      headers: getHeaders(),
    })
    .then(res => res.data)
    .then((data) => {
      const { MENU: menu, PATCHNOUTS: patchNotes, USER: usertop } = data.ANSWER;

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
    })
    .catch(error => handleError(error, dispatch));
};

export default fetchInit;
