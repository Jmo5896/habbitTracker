import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <ul>
            <li>add a habit</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
