import { GET_DEAL, SET_DEAL, CLEAR_DEAL } from 'actions/deal';

export default function (state = { data: null, pager: null }, action) {
  switch (action.type) {
    case GET_DEAL:
      return state;

    case SET_DEAL:
      return state = {
        data: [...action.deals.data],
        pager: Object.assign({}, action.deals.pager),
      };

    case CLEAR_DEAL:
      return state = null;

    default:
      return state;
  }
}
