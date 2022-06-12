import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import ThemeButton from "../../components/theme-button/ThemeButton";
import {
  getRememberTheme,
  ThemeContext,
  themesJSX,
} from "../../contexts/ThemeContext.js";

function Main(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme }) =>
          (theme === undefined && <h1>Loading...</h1>) || (
            <div>
              <Navbar style={{ backgroundColor: themesJSX[theme].backgroundColor, border:"1px solid white" }} expand="lg">
                <Container>
                  <Navbar.Brand>
                    <Link
                      style={{
                        color: themesJSX[theme].color,
                        textDecoration: "none",
                      }}
                      to="/"
                    >
                      Note Here
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{ color: themesJSX[theme].color }} aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link
                        style={{ color: themesJSX[theme].color }}
                        href="#note"
                      >
                        Note
                      </Nav.Link>
                      <Nav.Link
                        style={{ color: themesJSX[theme].color }}
                        href="#todo"
                      >
                        To-Do
                      </Nav.Link>
                    </Nav>
                    <ThemeButton className="m-0 p-0" />
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          )
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default Main;
