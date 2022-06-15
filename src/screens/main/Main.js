import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import Seperator from "../../components/seperator/Seperator";
import ThemeButton from "../../components/theme-button/ThemeButton";
import {
  ThemeContext,
  themes,
  ThemesProperties,
} from "../../contexts/ThemeContext.js";

function Main(props) {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeContext.Consumer>
        {({ theme }) =>
          (theme === undefined && <h1>Loading...</h1>) || (
            <div>
              <Navbar
                variant={ThemesProperties[theme].variant}
                style={{
                  paddingLeft: "10px",
                  marginRight: "10px",
                }}
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
                  style={{ color: ThemesProperties[theme].color }}
                  variant={ThemesProperties[theme].variant}
                  aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                  variant={theme === themes.dark ? "dark" : "light"}
                  id="basic-navbar-nav"
                >
                  <Nav className="me-auto">
                    <Nav.Link
                      style={{ color: ThemesProperties[theme].color }}
                      href="#note"
                    >
                      Note
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: ThemesProperties[theme].color }}
                      href="#todo"
                    >
                      To-Do
                    </Nav.Link>
                  </Nav>
                  <ThemeButton className="m-0 p-0 sm-order-0" />
                </Navbar.Collapse>
              </Navbar>
              <Seperator />
              <div
                className="col col-sm-12 col-md-3 col-lg-3 col-xlg-3 m-0-auto"
                style={{
                  height: `calc(100vh - 65px)`,
                  backgroundColor: "red",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    minHeight: "100%",
                    backgroundColor: "gray",
                  }}
                >
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
