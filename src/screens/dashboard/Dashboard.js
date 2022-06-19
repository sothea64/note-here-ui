import React, { useRef, useState } from "react";
import Seperator from "../../components/seperator/Seperator";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";

function Dashboard(props) {
  return (
    <>
      <div>
        <div
          className="card m-1 p-1 shadow-sm btn btn-primary"
          style={{
            backgroundColor: ThemesProperties[props.theme].backgroundColor,
            border: "1px solid",
            borderColor: ThemesProperties[props.theme].color,
            color: ThemesProperties[props.theme].color,
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
            backgroundColor: ThemesProperties[props.theme].backgroundColor,
            border: "1px solid",
            borderColor: ThemesProperties[props.theme].color,
            color: ThemesProperties[props.theme].color,
            textAlign: "left",
          }}
        >
          <h6>Title Two</h6>
          <Seperator />
          <p>"But I must explain to you how all this mistaken...</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
