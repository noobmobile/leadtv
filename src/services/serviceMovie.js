import api from "./api";

export const ServiceMovie = {
  list: (filters) => {
    if (filters.genres) {
      filters.with_genres = filters.genres.join(",");
    }
    if (filters.order) {
      filters.sort_by = filters.order;
    }
    return api.get("/discover/movie", {
      params: filters,
    });
  },
  search: (filters) => {
    if (filters.name) {
      filters.query = filters.name;
    }
    return api.get("/search/movie", {
      params: filters,
    });
  },
};
