import { MOVIE_LIST_REQUEST } from "../actionTypes";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { movierror, movieListSuccess } from "./action";
import { startLoading, finishLoading } from "../loading/action";
import { ServiceMovie } from "../../../services/serviceMovie";

function* list({ filters }) {
  try {
    yield put(startLoading());

    //CHAMADA API
    const retorno = yield call(
      filters.name ? ServiceMovie.search : ServiceMovie.list,
      filters
    );

    //CHAMADA SUCCESS
    yield put(movieListSuccess(retorno));

    yield put(finishLoading());
  } catch (e) {
    // ERROR
    yield put(movierror(e));
    yield put(finishLoading());
  }
}

export default all([takeLatest(MOVIE_LIST_REQUEST, list)]);
