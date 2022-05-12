import {
  MOVIE_ERROR,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../actionTypes";

export function movieListRequest(filters) {
  return {
    type: MOVIE_LIST_REQUEST,
    filters,
  };
}

export function movieListSuccess(data) {
  return {
    type: MOVIE_LIST_SUCCESS,
    data,
  };
}

export function movierror(error) {
  return {
    type: MOVIE_ERROR,
    error,
  };
}
