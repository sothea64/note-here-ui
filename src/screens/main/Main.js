import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import ThemeButton from "../../components/theme-button/ThemeButton";
import {
  getRememberTheme,
  ThemeContext,
  themes,
  themesJSX,
} from "../../contexts/ThemeContext.js";

function Main(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme }) =>
          (theme === undefined && <h1>Loading...</h1>) || (
            <div>
              <Navbar
                variant={theme === themes.dark ? "dark" : "light"}
                style={{ border: "0px solid white", borderBottomWidth: "1px", paddingLeft:"10px", marginRight:"10px" }}
                expand="lg"
              >
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
                <Navbar.Toggle
                  style={{ color: themesJSX[theme].color }}
                  variant={theme === themes.dark ? "dark" : "light"}
                  aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                  variant={theme === themes.dark ? "dark" : "light"}
                  id="basic-navbar-nav"
                >
                  <Nav className="me-auto">
                    <Nav.Link
                      style={{ color: themesJSX[theme].color }}
                      sm={{ order: 1 }}
                      href="#note"
                    >
                      Note
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: themesJSX[theme].color }}
                      sm={{ order: 2 }}
                      href="#todo"
                    >
                      To-Do
                    </Nav.Link>
                  </Nav>
                  <ThemeButton className="m-0 p-0 sm-order-0" />
                </Navbar.Collapse>
              </Navbar>
              <div className="pt-2">
                <section
                  style={{
                    height: "92vh",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="col col-sm-12 col-md-3 col-lg-3 col-xlg-3"
                    style={{
                      height: "100%",
                      padding: "1px",
                      backgroundColor: "whitesmoke",
                      border: "1px solid transparent",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      className="card m-1"
                      style={{
                        backgroundColor: themesJSX[theme].backgroundColor,
                        borderWidth: "0px",
                      }}
                    >
                      <h1>1st Card</h1>
                    </div>
                    <div
                      className="card m-1"
                      style={{
                        backgroundColor: themesJSX[theme].backgroundColor,
                        borderWidth: "0px",
                      }}
                    >
                      <h1>2nd Card</h1>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default Main;
