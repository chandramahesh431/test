import { call, put } from "redux-saga/effects";
import { getProducts } from "../actions/productActions";

export function* getProjects() {
  const products = yield call(getProducts);
  yield put({ type: "SET_PRODUCTS", products: products });
}
