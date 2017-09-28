import { call, put, takeEvery } from 'redux-saga/effects';

import { getDeal as getDealApi, editDeal } from 'api/deal';
import {
  SAGA_SET_DEAL,
  setDeal as setDealAction,
  SAGA_INIT_EDIT_DEAL_PAGE,
  initEditDealPage as initEditDealPageAction,
} from 'actions/deal';

function* init({ page, count, typeDeal }) {
  const data = yield call(() => getDealApi(page, count, typeDeal));

  yield put(setDealAction(data));
}

function* initEditDealPage({ id }) {
  const data = yield call(() => editDeal(id));

  yield put(initEditDealPageAction(data));
}

export default function* () {
  yield takeEvery(SAGA_SET_DEAL, init);
  yield takeEvery(SAGA_INIT_EDIT_DEAL_PAGE, initEditDealPage);
}
