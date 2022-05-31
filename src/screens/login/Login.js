import "./Login.css";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import RequireAstrix from "../../../src/components/require-astrix/RequireAstrix.js";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const OnLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidForm(false);
      return;
    }
    setValidForm(true);
    if (username == "admin" && password == "admin") {
      setFailedLogin(false);
    } else {
      setFailedLogin(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row LoginMain width-auto col-sm-12 col-md-7 col-lg-5 mx-auto my-5 justify-content-center">
          <Row>
            <h1>Note Here</h1>
            <hr className="Seperator" />
          </Row>
          <Row className="mb-3">
            {failedLogin && (
              <Alert
                className="mr-1 col-md-12 col-sm-12 col-lg-12"
                key={"danger"}
                variant={"danger"}
              >
                Login failed, wrong username or password!
              </Alert>
            )}
            <Form validated={validForm} onSubmit={OnLogin}>
              <Form.Group className="mb-1" controlId="validateUsername">
                <Form.Label>
                  Username <RequireAstrix />
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  size="sm"
                  invalid
                  onChange={(e) => setusername(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please input username
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>
                  Password <RequireAstrix />
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  size="sm"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
              <Row className="mx-auto justify-content-center d-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 p-0">
                  <p className="">
                    Don't have account yet?{" "}
                    <span role={"button"} className="link-primary">
                      Sign up here!
                    </span>
                  </p>
                </div>
                <Button
                  className="btn btn-primary btn-sm btn-block col-lg-2 col-md-12 col-sm-12"
                  type="submit"
                >
                  Login
                </Button>
              </Row>
            </Form>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Login;
