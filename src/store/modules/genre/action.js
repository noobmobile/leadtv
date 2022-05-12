import {
  GENRE_ERROR,
  GENRE_LIST_REQUEST,
  GENRE_LIST_SUCCESS,
} from "../actionTypes";

export function genreListRequest() {
  return {
    type: GENRE_LIST_REQUEST,
  };
}

export function genreListSuccess(data) {
  return {
    type: GENRE_LIST_SUCCESS,
    data,
  };
}

export function genrerror(error) {
  return {
    type: GENRE_ERROR,
    error,
  };
}
