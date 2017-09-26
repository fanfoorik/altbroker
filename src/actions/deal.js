export const GET_DEAL = 'GET_DEAL';
export const SAGA_GET_DEAL = 'SAGA_GET_DEAL';
export const SAGA_GET_DEAL_ERROR = 'SAGA_GET_DEAL_ERROR';

export function getDeal() {
  return {
    type: GET_DEAL,
  };
}

export function sagaGetDeal() {
  return {
    type: SAGA_GET_DEAL,
  };
}

export const SET_DEAL = 'SET_DEAL';
export const SAGA_SET_DEAL = 'SAGA_SET_DEAL';
export const SAGA_SET_DEAL_ERROR = 'SAGA_SET_DEAL_ERROR';

export function setDeal(data) {
  return {
    type: SET_DEAL,
    deals: data,
  };
}

export function sagaSetDeal(page = 1, count = 10, type = 'sale') {
  return {
    type: SAGA_SET_DEAL,
    page,
    count,
    typeDeal: type,
  };
}

export const CLEAR_DEAL = 'CLEAR_DEAL';
export function clearDeal() {
  return {
    type: CLEAR_DEAL,
  };
}
