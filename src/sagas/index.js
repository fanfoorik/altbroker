import { fork, all } from 'redux-saga/effects';

import deal from './deal';

const sagas = [
  deal,
];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
