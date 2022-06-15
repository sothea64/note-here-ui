import "./Login.css";
import "../../App.css";
import React, { useState } from "react";
import { Form, Row, Container, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import RequireAstrix from "../../components/require-astrix/RequireAstrix.js";
import Seperator from "../../components/seperator/Seperator";
import LoadingButton from "../../components/loading-button/LoadingButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IsValidEmail } from "../../utilities/Validator";
import useAuth from "../../logic/Auth.js";
import { LoginPayload } from "../../logic/Auth.js";
import ThemeButton from "../../components/theme-button/ThemeButton";

function Login(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const [failedLoginMessage, setFailedLoginMessage] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const Invalid = () => {
    if (!IsValidEmail(email) || password === "") {
      return true;
    }
    return false;
  };

  const OnLogin = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidForm(true);

    if (Invalid()) {
      return;
    }

    setLoginLoading(true);
    event.preventDefault();
    await useAuth.Login(
      new LoginPayload(email, password),
      (success, message) => {
        if (success === true) {
          navigate(location?.state?.path || "/");
        } else {
          setFailedLoginMessage(message);
          setFailedLogin(true);
        }
      }
    );
    setLoginLoading(false);
  };

  return (
    <>
      <section style={{ height: "100vh" }}>
        <Container className="py-5 h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col className="shadow-sm p-4 col-11 col-sm-11 col-md-8 col-lg-6 col-xl-5 LoginMain">
              <Row>
                <Col>
                  <h1 className="">Note Here</h1>
                </Col>
                <Col className="col-1 col-md-1 col-lg-1 col-sm-1 m-1 mt-0">
                  <ThemeButton />
                </Col>
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
                    {failedLoginMessage}
                  </Alert>
                )}
                <Form noValidate onSubmit={OnLogin}>
                  <Form.Group className="mb-1">
                    <Form.Label>
                      Email <RequireAstrix />
                    </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="example@mail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={
                        validForm &&
                        (email === "" || (email !== "" && !IsValidEmail(email)))
                          ? true
                          : false
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {email === "" && <>Email is required!</>}
                      {email !== "" && !IsValidEmail(email) && (
                        <>Email is not valid!</>
                      )}
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
                      Password is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="mx-auto justify-content-center d-flex">
                    <Col className="col-lg-9 col-md-12 col-sm-12 p-0">
                      <p className="">
                        Don't have account yet?{" "}
                        <Link to="/signup">Sign up here!</Link>
                      </p>
                    </Col>
                    <LoadingButton
                      className="btn btn-primary btn-md btn-block col-lg-3 col-md-12 col-sm-12"
                      disabled={loginLoading}
                      type="submit"
                      text="Login"
                      showLoading={loginLoading}
                    />
                  </Row>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
