import { GENRE_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  list: {},
};
export function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRE_LIST_SUCCESS:
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
