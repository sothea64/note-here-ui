import "./Login.css";
import { useState } from "react";
import { Form, Row, Spinner } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import RequireAstrix from "../../components/require-astrix/RequireAstrix.js";
import Seperator from "../../components/seperator/Seperator";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const OnLogin = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidForm(true);
    if (username === "" || password === "") {
      return;
    }

    setLoginLoading(true);
    event.preventDefault();

    await setTimeout(() => {
      if (username == "admin" && password == "admin") {
        setFailedLogin(false);
      } else {
        setFailedLogin(true);
      }
      setLoginLoading(false);
    }, 3000);
  };

  return (
    <>
      <section title="Note Here" style={{ height: "100vh", backgroundColor: "lightblue" }}>
        <div title="Note Here" className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col shadow-sm p-4 col-11 col-sm-11 col-md-8 col-lg-6 col-xl-5 LoginMain">
              <Row>
                <h1>Note Here</h1>
                <Seperator />
              </Row>
              <Row className="mb-3">
                {/* Show failed login alert */}
                {failedLogin && (
                  <Alert
                    className="col-md-12 col-sm-12 col-lg-12"
                    key={"danger"}
                    variant={"danger"}
                  >
                    Login failed, wrong username or password!
                  </Alert>
                )}
                <Form noValidate onSubmit={OnLogin}>
                  <Form.Group className="mb-1" controlId="validateUsername">
                    <Form.Label>
                      Username <RequireAstrix />
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      onChange={(e) => setUsername(e.target.value)}
                      isInvalid={validForm && username === "" ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please input username!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      Password <RequireAstrix />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      isInvalid={validForm && password === "" ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please input password!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="mx-auto justify-content-center d-flex">
                    <div className="col-lg-9 col-md-12 col-sm-12 p-0">
                      <p className="">
                        Don't have account yet?{" "}
                        <a role={"button"} className="link-primary">
                          Sign up here!
                        </a>
                      </p>
                    </div>
                    <Button
                      className="btn btn-primary btn-sm btn-block col-lg-3 col-md-12 col-sm-12"
                      type="submit"
                      disabled={loginLoading}
                    >
                      {/* Show loading when click button login */}
                      {loginLoading && (
                        <Spinner
                          className="mr-1"
                          as="span"
                          animation="border"
                          size="sm"
                        />
                      )}
                      Login
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
