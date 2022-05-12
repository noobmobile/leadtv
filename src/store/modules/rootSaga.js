import { all } from "redux-saga/effects";
import movieSaga from "./movie/saga";
import genreSaga from "./genre/saga";

export default function* rootSaga() {
  yield all([movieSaga, genreSaga]);
}
