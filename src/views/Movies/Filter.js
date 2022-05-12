import * as React from "react";
import { useEffect, useState } from "react";
import { Table, Row, Col, Input, Button, Form, Collapse, Select } from "antd";
const MovieFilter = ({ filters, setFilters, genres }) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);

  const submit = (values) => {
    setFilters({
      ...filters,
      ...values,
      page: 1,
    });
  };

  const orderOptions = [
    { id: "popularity.asc", name: "Popularidade Crescente" },
    { id: "popularity.desc", name: "Popularidade Decrescente" },
    { id: "original_title.asc", name: "Ordem Alfabética Crescente" },
    { id: "original_title.desc", name: "Ordem Alfabética Decrescente" },
  ];

  return (
    <Form form={form} onFinish={submit} layout="vertical">
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item name="name">
            <Input
              placeholder="Digite um nome."
              allowClear
              onChange={(e) => setDisabled(!!e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="genres">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Gêneros"
              maxTagCount={3}
              disabled={disabled}
            >
              {genres?.map((genre) => (
                <Select.Option key={genre.id} value={genre.id}>
                  {genre.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="order" initialValue="popularity.desc">
            <Select
              style={{ width: "100%" }}
              placeholder="Ordem"
              disabled={disabled}
            >
              {orderOptions?.map((o) => (
                <Select.Option key={o.id} value={o.id}>
                  {o.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Button type="primary" htmlType="submit" onClick={form.submit}>
            Pesquisar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MovieFilter;
