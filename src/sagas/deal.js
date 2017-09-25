import { call, put, takeEvery } from 'redux-saga/effects';

import { getDeal as getDealApi } from 'api/deal';
import {
  SAGA_SET_DEAL,
  setDeal as setDealAction,
} from 'actions/deal';

function* init({ page, count }) {
  const data = yield call(() => getDealApi(page, count));

  yield put(setDealAction(data));
}

export default function* () {
  yield takeEvery(SAGA_SET_DEAL, init);
}
