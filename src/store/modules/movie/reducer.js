import { MOVIE_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  list: {},
};
export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
