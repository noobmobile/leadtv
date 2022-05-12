import { combineReducers } from "redux";
import { movieReducer } from "./movie/reducer";
import { genreReducer } from "./genre/reducer";
import { loadingReducer } from "./loading/reducer";

export default combineReducers({
  loading: loadingReducer,
  movies: movieReducer,
  genres: genreReducer,
});
