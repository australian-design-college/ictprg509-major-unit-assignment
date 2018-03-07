import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

import Content from "./Content";
import s from "./Root.scss";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <Grid>
      <Row>
        <Col xs={4}>
          <Sidebar />
        </Col>
        <Col xs={8}>
          <Content />
        </Col>
      </Row>
    </Grid>
  );
};

export default Root;
