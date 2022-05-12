import api from "./api";

export const ServiceGenre = {
  list: () => {
    return api.get("/genre/movie/list");
  },
};
