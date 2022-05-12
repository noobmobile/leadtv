import { GENRE_LIST_REQUEST } from "../actionTypes";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { genrerror, genreListSuccess } from "./action";
import { startLoading, finishLoading } from "../loading/action";
import { ServiceGenre } from "../../../services/serviceGenre";

function* list({}) {
  try {
    yield put(startLoading());

    //CHAMADA API
    const retorno = yield call(ServiceGenre.list);

    //CHAMADA SUCCESS
    yield put(genreListSuccess(retorno));

    yield put(finishLoading());
  } catch (e) {
    // ERROR
    yield put(genrerror(e));
    yield put(finishLoading());
  }
}

export default all([takeLatest(GENRE_LIST_REQUEST, list)]);
