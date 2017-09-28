/**
 * DealList page action
 */
export const GET_DEAL = 'GET_DEAL';
export const SAGA_GET_DEAL = 'SAGA_GET_DEAL';
export const SAGA_GET_DEAL_ERROR = 'SAGA_GET_DEAL_ERROR';

export const getDeal = () => ({ type: GET_DEAL });

export const sagaGetDeal = () => ({ type: SAGA_GET_DEAL });

export const SET_DEAL = 'SET_DEAL';
export const SAGA_SET_DEAL = 'SAGA_SET_DEAL';
export const SAGA_SET_DEAL_ERROR = 'SAGA_SET_DEAL_ERROR';

export const setDeal = data => ({
  type: SET_DEAL,
  deals: data,
});

export const sagaSetDeal = (page = 1, count = 10, type = 'sale') => ({
  type: SAGA_SET_DEAL,
  page,
  count,
  typeDeal: type,
});

export const CLEAR_DEAL = 'CLEAR_DEAL';
export const clearDeal = () => ({ type: CLEAR_DEAL });

/**
 * Edit deal page action
 */
export const INIT_EDIT_DEAL_PAGE = 'INIT_EDIT_DEAL_PAGE';
export const SAGA_INIT_EDIT_DEAL_PAGE = 'SAGA_INIT_EDIT_DEAL_PAGE';
export const CLEAR_EDIT_DEAL_PAGE = 'CLEAR_EDIT_DEAL_PAGE';

export const initEditDealPage = data => ({
  type: INIT_EDIT_DEAL_PAGE,
  data,
});

export const sagaInitEditDealPage = id => ({
  type: SAGA_INIT_EDIT_DEAL_PAGE,
  id,
});

export const clearEditDealPage = () => ({ type: CLEAR_EDIT_DEAL_PAGE });
