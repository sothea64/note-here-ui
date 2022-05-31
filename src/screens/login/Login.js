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
        <Row className="LoginMain mx-auto my-5 p-0 justify-content-center">
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
              <Row className="mx-auto justify-content-center d-flex">
                <div className="col-lg-10 col-md-10 col-sm-12 p-0">
                  <p className="">
                    Don't have account yet?{" "}
                    <span role={"button"} className="link-primary">
                      Sign up here!
                    </span>
                  </p>
                </div>
                <Button
                  className="btn btn-primary btn-sm btn-block col-lg-2 col-md-2 col-sm-12"
                  type="submit"
                >
                  Login
                </Button>
              </Row>
            </Form>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Login;
