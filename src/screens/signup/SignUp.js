import "./SignUp.css";
import { useRef, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import RequireAstrix from "../../components/require-astrix/RequireAstrix.js";
import Seperator from "../../components/seperator/Seperator";
import LoadingButton from "../../components/loading-button/LoadingButton";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [failedSignup, setFailedSignup] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const NotMatchPassword = () => {
    if (confirmPassword === "" || password === "") {
      return true;
    }
    if (confirmPassword != password) {
      return true;
    }
  };

  const InValid = () => {
    if (
      fullname === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      NotMatchPassword()
    ) {
      return true;
    }
    return false;
  };

  const OnLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidForm(true);

    if (InValid()) {
      return;
    }

    setLoginLoading(true);

    await setTimeout(() => {
      if (username === "admin" && password === "admin") {
        setFailedSignup(false);
      } else {
        setFailedSignup(true);
      }
      setLoginLoading(false);
    }, 3000);
  };

  return (
    <>
      <section style={{ height: "100vh", backgroundColor: "lightblue" }}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col shadow-sm p-4 col-11 col-sm-11 col-md-8 col-lg-6 col-xl-5 LoginMain">
              <Row>
                <h1>Note Here</h1>
                <Seperator />
              </Row>
              <Row className="mb-1">
                <h3>Sign Up</h3>
              </Row>
              <Row className="mb-3">
                {/* Show failed login alert */}
                {failedSignup && (
                  <Alert
                    className="col-md-12 col-sm-12 col-lg-12"
                    key={"danger"}
                    variant={"danger"}
                  >
                    Signup failed!
                  </Alert>
                )}
                <Form noValidate onSubmit={OnLogin}>
                  {/* Full Name */}
                  <Form.Group className="mb-1">
                    <Form.Label>
                      Full Name <RequireAstrix />
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      onChange={(e) => setFullname(e.target.value)}
                      isInvalid={validForm && fullname === "" ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                      Fullname is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Username */}
                  <Form.Group className="mb-1">
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
                      Username is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Password */}
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
                  {/* Confirm Password */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      Confirm Password <RequireAstrix />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      isInvalid={
                        (confirmPassword === "" && password !== "") ||
                        (confirmPassword !== "" && NotMatchPassword())
                          ? true
                          : false
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {confirmPassword === "" && password !== "" && (
                        <>Please confirm your password!</>
                      )}
                      {confirmPassword !== "" && NotMatchPassword() && (
                        <>Confirm password not match!</>
                      )}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="mx-auto justify-content-center d-flex">
                    <LoadingButton
                      className="btn btn-primary btn-md btn-block col-lg-3 col-md-12 col-sm-12"
                      disabled={loginLoading}
                      type="submit"
                      text="Sign Up"
                      showLoading={loginLoading}
                    />
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

export default Signup;
