import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./Card";
import { Spin } from "antd";

const MoviesTable = ({ data, openDrawer, loading }) => {
  const dispatch = useDispatch();

  return (
    <SimpleGrid minChildWidth="300px" spacing={10}>
      {data.map((movie) => (
        <Spin key={movie.id} spinning={loading}>
          <MovieCard movie={movie} openDrawer={openDrawer} />
        </Spin>
      ))}
    </SimpleGrid>
  );
};

export default MoviesTable;
