import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./LoadingButton.css";

function LoadingButton(props) {
  return (
    <>
      <Button
        className={props.className}
        disabled={props.disabled}
        type={props.type}
        onClick = {(e) => props.type === "submit" ? null : props.onClick(e)}
      >
        {props.showLoading && (
          <Spinner as="span" animation="border" size="sm" /> 
        )}
        {props.text}
        {props.showLoading && (
          <span>...</span>
        )}
      </Button>
    </>
  );
}

export default LoadingButton;
