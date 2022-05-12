import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { Pagination, Row, Col, Spin, Button } from "antd";
import MoviesTable from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { movieListRequest } from "../../store/modules/movie/action";
import MovieDrawer from "./Drawer";
import { PlusOutlined } from "@ant-design/icons";
import MovieFilter from "./Filter";
import { genreListRequest } from "../../store/modules/genre/action";
import FontContext from "../../contexts/FontContext";

const MoviesList = () => {
  const dispatch = useDispatch();
  const {
    results = [],
    total_pages = 0,
    page = 1,
  } = useSelector((store) => store.movies.list);
  const { genres = [] } = useSelector((store) => store.genres.list);
  const { loading } = useSelector((store) => store.loading);
  const [filters, setFilters] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [fontSize, , calc] = useContext(FontContext);

  useEffect(() => {
    dispatch(movieListRequest(filters));
  }, [filters]);

  useEffect(() => {
    dispatch(genreListRequest());
  }, []);

  return (
    <>
      <Row gutter={24}>
        <Col span={24}>
          <MovieFilter
            filters={filters}
            setFilters={setFilters}
            genres={genres}
          />
        </Col>
      </Row>
      <br />
      <Row gutter={24}>
        <Col span={24}>
          <MoviesTable
            data={results}
            loading={loading}
            openDrawer={setDrawerOpen}
          />
        </Col>
      </Row>
      <br />
      <Pagination
        current={page}
        total={total_pages}
        showSizeChanger={false}
        defaultPageSize={20}
        showPrevNextJumpers={false}
        style={{
          display: "flex",
          justifyContent: "end",
          fontSize: calc("14px", 2),
        }}
        onChange={(page) => setFilters({ ...filters, page })}
      />
      <MovieDrawer movie={drawerOpen} setOpen={setDrawerOpen} genres={genres} />
    </>
  );
};

export default MoviesList;
