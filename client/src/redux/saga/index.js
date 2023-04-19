import { all } from '@redux-saga/core/effects';
import productWatcher from './product.watcher';

export default function* rootSaga() {
  yield all([productWatcher()]);
}
