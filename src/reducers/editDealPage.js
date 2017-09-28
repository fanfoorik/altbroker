import { INIT_EDIT_DEAL_PAGE, CLEAR_EDIT_DEAL_PAGE } from 'actions/deal';

export default function (state = null, action) {
  switch (action.type) {
    case INIT_EDIT_DEAL_PAGE:
      return state = { ...action.data };

    case CLEAR_EDIT_DEAL_PAGE:
      return state = null;

    default:
      return state;
  }
}
