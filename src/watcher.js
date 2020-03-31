import { takeLatest } from "redux-saga/effects";

import { getProjects } from "./sagas/projectSagas";

export default function* actionWatcher() {
  yield takeLatest("GET_PRODUCTS", getProjects);
}
