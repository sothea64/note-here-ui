import "./Login.css";
import { useState } from "react";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const OnLogin = (e) => {
    e.preventDefault();
    console.log("Username:" + username + "; Password:" + password);
  };

  return (
    <>
      <div className="container d-flex">
        <Row className="LoginMain mx-auto my-5 p-0 justify-content-center border border-transparent rounded">
          <Row>
            <h1>Note Here</h1>
            <hr className="Seperator" />
          </Row>
          <Row className="mb-3">
            <Form onSubmit={OnLogin}>
              <Form.Group className="mb-1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="" size="sm" required />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  size="sm"
                  required
                />
              </Form.Group>
              <Row className="align-middle">
                <Col>
                  <p className="sm">Don't have account yet? <a href="#">Sign up here!</a></p>
                </Col>
                <Col lg={1} sm={12}>
                  <Button
                    className="float-end"
                    variant="primary"
                    type="submit"
                    size="md"
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Login;
