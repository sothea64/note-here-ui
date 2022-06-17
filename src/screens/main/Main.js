import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav, Button, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import Seperator from "../../components/seperator/Seperator";
import ThemeButton from "../../components/theme-button/ThemeButton";
import {
  ThemeContext,
  themes,
  ThemesProperties,
} from "../../contexts/ThemeContext.js";
import LoadingButton from "../../components/loading-button/LoadingButton";
import { BsPersonCircle } from "react-icons/bs";
import { IsString } from "../../utilities/Validator";

function Main(props) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <ThemeContext.Consumer>
        {({ theme }) =>
          ((theme === undefined || !IsString(theme)) && <h1>Loading...</h1>) || (
            <div>
              <Navbar
                className="p-2 m-0"
                variant={ThemesProperties[theme].variant}
                expand="lg"
                onToggle={() => {}}
              >
                <Navbar.Brand>
                  <Link
                    className={ThemesProperties[theme].textClassName}
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Note Here
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  variant={ThemesProperties[theme].variant}
                  aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                  variant={ThemesProperties[theme].variant}
                  id="basic-navbar-nav"
                >
                  <Nav className="me-auto">
                    <Nav.Link href="#note">Note</Nav.Link>
                    <Nav.Link href="#todo">To-Do</Nav.Link>
                  </Nav>
                  <ThemeButton className="m-0 p-0 sm-order-0" />
                  <Link
                    className={"btn btn-" + ThemesProperties[theme].variant}
                    style={{
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    Logout
                  </Link>
                  <button
                    className={"btn-" + ThemesProperties[theme].variant}
                    style={{ border: "1px solid transparent" }}
                    onClick={() => setShowProfile(true)}
                  >
                    <BsPersonCircle className="m-0 p-0" size="1.5em" />
                  </button>
                  <Modal
                    show={showProfile}
                    onHide={() => setShowProfile(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Hello from body</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary">Close</Button>
                      <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </Navbar.Collapse>
              </Navbar>
              <Seperator />
              <div
                className="col col-sm-12 col-md-3 col-lg-3 col-xlg-3 m-0-auto"
                style={{
                  height: `calc(93vh)`,
                  overflow: "auto",
                }}
              >
                <div>
                  <div
                    className="card m-1 p-1 shadow-sm btn btn-primary"
                    style={{
                      backgroundColor: ThemesProperties[theme].backgroundColor,
                      border: "1px solid",
                      borderColor: ThemesProperties[theme].color,
                      color: ThemesProperties[theme].color,
                      textAlign: "left",
                    }}
                    onClick={() => {
                      console.info("Clicked card");
                    }}
                  >
                    <h6>Title One</h6>
                    <Seperator />
                    <p>"But I must explain to you how all this mistaken...</p>
                  </div>
                  <div
                    className="card m-1 m-1 p-1 shadow-sm btn btn-primary"
                    style={{
                      backgroundColor: ThemesProperties[theme].backgroundColor,
                      border: "1px solid",
                      borderColor: ThemesProperties[theme].color,
                      color: ThemesProperties[theme].color,
                      textAlign: "left",
                    }}
                  >
                    <h6>Title Two</h6>
                    <Seperator />
                    <p>"But I must explain to you how all this mistaken...</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default Main;
