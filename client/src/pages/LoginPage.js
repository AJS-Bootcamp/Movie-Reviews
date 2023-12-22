// LoginPage.js
import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container>
      <Row className="row-content-contact d-flex justify-content-center">
        <Col xs="12">
          <h2>Login</h2>
          <hr />
        </Col>
        <Col md="10">
          <LoginForm setLoggedIn={setLoggedIn} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
